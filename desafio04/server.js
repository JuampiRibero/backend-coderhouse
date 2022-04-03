const express = require('express');

const { Router } = express;

const app = express();

const ProductsApi = require('./api/products');

const productsApi = new ProductsApi();

const productsRouter = new Router();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', productsRouter);

productsRouter.get('/products', (req, res) => {
    if (!productsApi.getAll()) {
        return res.status(404).json({ error: 'Aún no hay productos cargados' });
    }
    res.status(200).json(productsApi.getAll());
});

productsRouter.get('/products/:id', (req, res) => {
    const id = req.params.id;
    // const currentProduct = productsApi.getById(id);
    if(productsApi.getById(id)) {
        return res.status(200).json(productsApi.getById(id));
    }
    res.status(404).json({ error: 'Producto no encontrado' });
});

productsRouter.post('/products', (req, res) => {
    const toAdd = req.body;
    const product = productsApi.add(toAdd);
    if(product) {
        res.status(201).json(product);
    }
    res.status(400).json({ error: 'Producto no agregado' });
});

productsRouter.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const toChange = req.body;
    res.status(200).json(productsApi.update(toChange, id));
});

productsRouter.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json(productsApi.delete(id));
});

const PORT = 8081;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto: ${PORT}`);
});

server.on('error', (error) =>
    console.log(`Error en el servidor http: ${error}`)
);
