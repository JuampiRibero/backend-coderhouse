const express = require('express');

const app = express();

const Contenedor = require('./contenedor.js');

const productos = new Contenedor('productos.txt');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1 style="color: blue">Bienvenidos servidor express</h1>');
});

app.get('/productos', async (req, res) => {
    res.send(await productos.obtenerTodo());
});

app.get('/productoRandom', async (req, res) => {
    const data = await productos.obtenerTodo();
    const numeroRandom = Math.floor(Math.random() * data.length);
    res.send(await productos.obtenerPorId(parseInt(numeroRandom + 1)));
});

const PORT = 81;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto: ${PORT}`);
});

server.on('error', error => console.log(`Error en el servidor http: ${error}`));