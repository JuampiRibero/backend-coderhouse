import app from "./server.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8081;

const server = app.listen(PORT, () => {
    console.log(
        `Servidor http escuchando en el puerto ${PORT}`
    );
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

console.log(`Los productos y carritos se almacenarán en: ${process.env.PERS}\n`)
