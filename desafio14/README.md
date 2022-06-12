# Desafio 14

## Uso

1. Forkeá y cloná el branch desafio14.
2. En la terminal, parado en la raíz del proyecto, corré el comando.

```
npm start ó npm start -p <número de puerto>
```

ó

```
npm start -p <número de puerto>
```

3. Accedé al _http://localhost:8080/_ y comenzá a navegar por el sitio web.

## Rutas

- POST (**/login**) → Formulario para loguear usuario. Las sesiones son almacenadas en MongoDB Atlas.
- POST (**/logout**) → Se accede al clickear el botón _logout_, luego de 2 segundos redirige a _login_.
- GET (**/productos**) → Lista todos los productos disponibles.
- POST (**/productos**) → Agrega productos al listado.
- GET (**/productos-test**) → Muestra 5 productos generados al azar con _faker.js_.
- GET (**/chat**) → Muestra un chat desarrolado con _socket.io_, a su vez muestra los datos desnormalizados y es almacenado normalizado en un archivo JSON.
- GET (**/info**) → Muestra información relacionada a la app.
- GET (**/randoms**) → Devuelve números aleatorios en el rango del 1 al 1000 especificada por parámetros de consulta (query). Por ejemplo: `/randoms?cant=500`. Si no se ingresa el parámetro, calcula 1.000 números.
