# INSTRUCCIONES POSTMAN

## Ruta '/api/productos/' 

- GET: '/'  
Lista todos los productos disponibles (disponible para usuarios y administradores).
  
- GET: '/:id'  
Lista un producto por su id (disponible para usuarios y administradores).
  
- POST: '/'  
Incorpora productos al listado (disponible para administradores).
El formato del producto debe ser { "nombre": string, "descripcion": string, "codigo": string, "url": string, "precio": number, "stock": number } ya que id y timestamp se agregan de manera automática.
  
- PUT: '/:id'  
Actualiza un producto por su id (disponible para administradores).
El formato del producto debe ser { "nombre": string, "descripcion": string, "codigo": string, "url": string, "precio": number, "stock": number } ya que id y timestamp se agregan de manera automática.
  
- DELETE: '/:id'  
Borra un producto por su id (disponible para administradores).
  
## Ruta '/api/carrito/'

- POST: '/'  
Crea un carrito y devuelve su id.  
  
- DELETE: '/:id'  
Elimina el carrito por 'id'.

- GET: '/'  
Lista todos los carritos creados.
  
- GET: '/:id/productos'  
Lista todos los productos guardados en el carrito 'id'.
  
- POST: '/:id/productos/:id_prod'  
Agrega el producto 'id_prod' al carrito 'id'.
  
- DELETE: '/:id/productos/:id_prod'  
Elimina el producto 'id_prod' del carrito 'id'.