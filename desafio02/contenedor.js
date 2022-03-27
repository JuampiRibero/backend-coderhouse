const fs = require('fs');

class Contenedor {

  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }
  
  async obtenerTodo() {
    try {
      const data = await fs.promises.readFile(`./${this.nombreArchivo}`, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
  
  async guardar(nombre, precio, imagen) {
    try {
      const productos = await this.obtenerTodo();
      const nuevoProducto = {
        nombre,
        precio,
        imagen,
        id: productos.length + 1,
      };
      productos.push(nuevoProducto);
      await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(productos, null, 2));
      return `\nAgrego el producto ${nombre}`;
    } catch (error) {
      console.log('¡Algo salió mal!', error);
    }
  }

  async obtenerPorId(id) {
    try {
        const data = await this.obtenerTodo();
        const resultado = data.find((item) => item.id === id);
        if (resultado) {
          return resultado;
        } else {
          return null;
        }
    } catch (error) {
        console.log('Error al obtener un producto por ID: ' + error);
    }
  }

  async borrarPorId(id) {
    try {
      const data = await this.obtenerTodo();
      const resultado = data.filter((item) => item.id !== id);
      await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(resultado, null, 2))
      return id;
    } catch (error) {
        console.log('Error al borrar un producto por ID: ' + error);
    }
  }

  async borrarTodo() {
    await fs.promises.unlink(this.nombreArchivo);
    console.log(`\nArchivo ${this.nombreArchivo} eliminado\n`);
  }

}

module.exports = Contenedor;