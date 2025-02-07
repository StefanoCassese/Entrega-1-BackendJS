# Proyecto de Servidor con Node.js y Express

Este proyecto consiste en la creación de un servidor utilizando Node.js y Express para manejar productos y carritos. 
A continuación se describen los pasos realizados para completar el proyecto.

## Pasos Realizados

1. **Crear el Proyecto**
   - Inicializamos un nuevo proyecto de Node.js.
   - Instalamos las dependencias necesarias (`express`).

2. **Configurar el Servidor**
   - Creamos un archivo `app.js` para configurar el servidor.
   - Configuramos el servidor para que escuche en el puerto 8080.

3. **Crear Rutas para Productos**
   - Creamos el archivo `routes/products.js`.
   - Definimos las rutas para manejar productos: obtener todos los productos, obtener un producto por ID, agregar un nuevo producto, actualizar un producto y eliminar un producto.

4. **Crear Rutas para Carritos**
   - Creamos el archivo `routes/carts.js`.
   - Definimos las rutas para manejar carritos: crear un nuevo carrito, obtener productos de un carrito y agregar un producto a un carrito.

5. **Configurar los Routers en el Servidor Principal**
   - Importamos y usamos los routers de productos y carritos en `app.js`.

6. **Crear los Managers para Productos y Carritos**
   - Creamos la clase `ProductManager` para manejar la lógica de productos.
   - Creamos la clase `CartManager` para manejar la lógica de carritos.

7. **Persistencia de la Información**
   - Creamos una carpeta `data` con los archivos `products.json` y `carts.json` para almacenar la información de productos y carritos.

## Uso del Proyecto

Para ejecutar el servidor, asegúrate de tener Node.js instalado y sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
