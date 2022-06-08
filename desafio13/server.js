const express = require("express");
const exphbs = require("express-handlebars");
const bCrypt = require("bcrypt");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const routes = require("./routes.js");
const config = require("./config.js");
const controllersdb = require("./conrollersdb");
const User = require("./models");
const faker = require("faker");
faker.locale = 'es';

passport.use(
  "login",
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        console.log("User not found " + username);
        return done(null, false);
      }
      if (!isValidPassword(user, password)) {
        return done(null, false);
      }

      return done(null, user);
    });
  })
);

passport.use(
  "signup",
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, false);
        }

        const newUser = {
          username: username,
          password: createHash(password),
          email: req.body.emal,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        };

        User.create(newUser, (err, userWithId) => {
          if (err) {
            return done(err);
          }
          return done(null, userWithId);
        });
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, done);
});

function isValidPassword(user, password) {
  return bCrypt.compareSync(password, user.password);
}

function createHash(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

const app = express();

app.engine(".hbs", exphbs({ extname: ".hbs", defaultLayout: "main.hbs" }));
app.set("view engine", ".hbs");

app.use(express.static(__dirname + "/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8081;

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: config.TIEMPO_EXPIRACION,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", routes.getRoot);

app.get("/login", routes.getLogin);
app.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/faillogin" }),
  routes.postLogin
);
app.get("/faillogin", routes.getFailLogin);

app.get("/signup", routes.getSignup);
app.post(
  "/signup",
  passport.authenticate("signup", { failureRedirect: "/failsignup" }),
  routes.postSignup
);
app.get("/failsignup", routes.getFailSignup);

function checkAuthenticaction(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
}

app.get("/ruta-protegida", checkAuthenticaction, (req, res) => {
  const { user } = req;
  res.send("<h1>Ruta OK!</h1>");
});

app.get("/logout", routes.getLogout);

// FAKER
let productos = [];
let id = 1;

app.get("/productos-test", (req, res) => {
  const { cant } = req.query;

  if (!cant) {
    for (let i = 0; i < 5; i++) {
      const producto = {
        nombre: faker.commerce.productName(),
        precio: faker.commerce.price(),
        foto: faker.image.imageUrl(),
        id: id++,
      };
      productos.push(producto);
    }
    res.render("./views/partials/products.hbs", {
      data: productos,
    });
    productos = [];
    id = 1;
  }

  if (cant == 0) {
    const noProd = "No hay productos";
    res.json(noProd);
  }

  if (cant >= 1) {
    console.log(`Cantidad = ${cant}`);
    for (let i = 0; i < cant; i++) {
      const producto = {
        nombre: faker.commerce.productName(),
        precio: faker.commerce.price(),
        foto: faker.image.imageUrl(),
      };
      productos.push(producto);
      console.log(producto);
    }

    res.render("./views/partials/products.hbs", {
      data: productos,
    });
    productos = [];
  }
});

controllersdb.conectarDB(config.URL_BASE_DE_DATOS, (err) => {
  if (err) return console.log("Error Base de Datos");
  console.log("Base de Datos conectada");

  app.listen(PORT, (err) => {
    if (err) return console.log("Error en el servidor");
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});
