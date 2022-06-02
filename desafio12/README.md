# Desafio 12

## Uso

1. Forkeá y cloná el branch desafio12.
2. En la terminal, parado en la raíz del proyecto, corré el comando.

```
npm start
```
3. Accedé al *http://localhost:8080/login* y comenzá a navegar por el sitio web.

## Rutas

- POST (**/login**) → Formulario para loguear usuario. Las sesiones son almacenadas en MongoDB Atlas.
- POST (**/logout**) → Se accede al clickear el botón *logout*, luego de 2 segundos redirige a *login*.
- GET (**/productos**) → Lista todos los productos disponibles.
- POST (**/productos**) → Agrega productos al listado.
- GET (**/productos-test**) → Muestra 5 productos generados al azar con *faker.js*.
- GET (**/chat**) → Muestra un chat desarrolado con *socket.io*, a su vez muestra los datos desnormalizados y es almacenado normalizado en un archivo JSON.