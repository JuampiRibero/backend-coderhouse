# Desafio 19

## Uso

1. Forkeá y cloná el branch _desafio19_.
2. En la terminal, parado en la raíz del proyecto, corré el siguiente comando para instalar todas las dependencias necesarias.

```
npm i
```

3. Recordá tener instalado de manera global la librería _pm2_.

```
npm i pm2 -g
```

4. Parado en la raíz del proyecto, corré el comando.

```
npm start
```

ó

```
npm start -p <número de puerto>
```

## Rutas

- POST (**/login**) → Formulario para loguear usuario. Las sesiones son almacenadas en MongoDB Atlas.
- POST (**/logout**) → Se accede al clickear el botón _logout_, luego de 2 segundos redirige a _login_.
- POST (**/register**) → Formulario para registrar usuario.
- GET (**/productos**) → Lista todos los productos disponibles.
- POST (**/productos**) → Agrega productos al listado.
- GET (**/productos-test**) → Muestra 5 productos generados al azar con _faker.js_.
- GET (**/chat**) → Muestra un chat desarrolado con _socket.io_, a su vez muestra los datos desnormalizados y es almacenado normalizado en un archivo JSON.
- GET (**/info**) → Muestra información relacionada a la app. A diferencia del desafio anterior, se incluyó el numero de procesadores.
- GET (**/randoms**) → Devuelve números aleatorios en el rango del 1 al 1000 especificada por parámetros de consulta (query). Por ejemplo: `/randoms?cant=500`. Si no se ingresa el parámetro, calcula 1.000 números.

## Logueo

### log4js

El archivo de configuración se encuentra en _utils/logger.js_ y todos los logs generados se pueden ver por consola. Además los logs de nivel error y warning, se los puede ver en los archivos _error.log_ y _warn.log_ dentro de la carpeta _logs_.