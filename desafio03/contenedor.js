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

}

module.exports = Contenedor;