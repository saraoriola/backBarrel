# Prueba Técnica de Desarrollo de Aplicación 🚀

## Descripción del Proyecto 📄

Este proyecto se centra en el desarrollo de una aplicación web para la empresa "Barrel", la cual gestiona, vende y distribuye fotografías en línea en tiempo real. Consta de un backend que proporciona una API REST y un frontend construido con React que consume esta API.

## Tecnologías Utilizadas 💻

- **Backend**: Node.js con Sequelize para interactuar con MySQL.
- **Frontend**: JavaScript con React.

## Estructura de la Aplicación 🏗️

El proyecto se estructura en torno a tres entidades principales:

1. **Usuario (User)**: Representa a los usuarios del sistema y contiene atributos como `name`, `surname` y `email`. Se establece una relación uno a muchos (1:N) entre usuarios y reservas.

2. **Evento (Event)**: Representa los eventos y contiene atributos como `title`, `date` y `location`. Se establece una relación uno a muchos (1:N) entre eventos y reservas.

3. **Reserva (Booking)**: Representa las reservas de eventos y contiene atributos como `userId`, `eventId`, `status`, `createdAt`, `deletedAt` y `description`. Se establecen relaciones de pertenencia entre reservas y usuarios/eventos.

## Funcionalidades Principales 🚀

- **Usuarios**: Los usuarios pueden registrarse y autenticarse en la aplicación. Se genera un token JWT después de la autenticación, que se utiliza para acceder a las rutas protegidas.
- **Eventos**: Los usuarios autenticados pueden crear, ver, actualizar y eliminar eventos.
- **Reservas**: Los usuarios autenticados pueden crear, ver, actualizar y eliminar reservas. Además, se ha implementado un mecanismo de "soft delete" para las reservas, que las marca como eliminadas sin eliminar físicamente los registros de la base de datos.

## Configuración de la Base de Datos 🗃️

- Utilizamos Sequelize para interactuar con MySQL.

## Generación de Modelos y Migraciones 🛠️

- Utiliza los comandos de Sequelize CLI para generar modelos y migraciones para las entidades `User`, `Event` y `Booking`.
- Aplica las migraciones para crear las tablas correspondientes en la base de datos.

## Seguridad y Autenticación 🔒

- Implementación de Bcrypt para el hash y el salting de contraseñas antes de almacenarlas en la base de datos.
- Implementación de JWT (JSON Web Tokens) para la autenticación de usuarios.
- Uso de middleware de autenticación para proteger rutas y endpoints sensibles.

## Controladores y Rutas 🛣️

Se han implementado los siguientes controladores y rutas para las entidades `User`, `Event` y `Booking`:

- 🧑 **UserController**: Maneja la creación y autenticación de usuarios.
- 📅 **EventController**: Gestiona la creación, obtención, actualización y eliminación de eventos.
- 📝 **BookingController**: Maneja la creación, obtención, actualización y eliminación de reservas.

Se han definido rutas para cada controlador que cumplen con las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) y están protegidas por autenticación.

## Ejecución del Proyecto ▶️

- El backend se ejecuta en Node.js y se inicia utilizando el comando `npm start`.

## Documentación de los endpoints 📖

Consulta la [documentación detallada de los endpoints en Postman](https://documenter.getpostman.com/view/28231638/2s9YJeyLmc).

🔗 [¡Haz clic aquí para acceder a la documentación!](https://documenter.getpostman.com/view/28231638/2s9YJeyLmc)

¡Explora y disfruta de la funcionalidad de la aplicación! 🌟
