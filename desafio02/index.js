const Contenedor = require('./contenedor.js');

const prueba = async () => {

    const manejoArchivo = new Contenedor('productos.txt');

    console.log(
        await manejoArchivo.guardar(
            'PlayStation 5',
            199990,
            'https://gorilagames.com/img/Public/1019-producto-ps5-estandar-preventa-argentina-gorila-games-4-903.jpg'
        )
    );

    console.log(
        await manejoArchivo.guardar(
            'Control Inalámbrico DualSense PS5',
            15499,
            'https://gorilagames.com/img/Public/1019-producto-dualsense-ps5-7234.jpg'
        )
    );

    console.log(
        await manejoArchivo.guardar(
            'Auricular Inalámbrico Pulse 3D PS5',
            17990,
            'https://gorilagames.com/img/Public/1019-producto-pulse-3d-ps5-4-1669.jpg'
        )
    );

    console.log('\nObtengo todos los productos: \n', await manejoArchivo.obtenerTodo());

    console.log('\nProducto obtenido por ID \n', await manejoArchivo.obtenerPorId(2));

    console.log('\nElimino el producto cuyo ID es: ', await manejoArchivo.borrarPorId(3));

    console.log('\nObtengo los productos luego de haber eliminado uno por ID: \n', await manejoArchivo.obtenerTodo());
    
    setTimeout(async () => {
        await manejoArchivo.borrarTodo();
    }, 2500);

}

prueba();