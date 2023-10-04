# Prueba Técnica de Desarrollo de Aplicación

## Descripción del Proyecto

Este proyecto se centra en el desarrollo de una aplicación web para la empresa "Barrel", la cual gestiona, vende y distribuye fotografías en línea en tiempo real. Consta de un backend que proporciona una API REST y un frontend construido con React que consume esta API.

## Tecnologías Utilizadas

- **Backend**: Node.js con Sequelize para interactuar con MySQL.
- **Frontend**: JavaScript con React.

## Estructura de la Aplicación

El proyecto se estructura en torno a tres entidades principales:

1. **Usuario (User)**: Representa a los usuarios del sistema y contiene atributos como `firstName`, `lastName` y `email`. Se establece una relación uno a muchos (1:N) entre usuarios y reservas.

2. **Evento (Event)**: Representa los eventos y contiene atributos como `title`, `date` y `location`. Se establece una relación uno a muchos (1:N) entre eventos y reservas.

3. **Reserva (Booking)**: Representa las reservas de eventos y contiene atributos como `userId`, `eventId`, `status`, `createdAt`, `deletedAt` y `description`. Se establecen relaciones de pertenencia entre reservas y usuarios/eventos.

## Configuración de la Base de Datos

- Utilizamos Sequelize para interactuar con MySQL.

## Generación de Modelos y Migraciones

- Utiliza los comandos de Sequelize CLI para generar modelos y migraciones para las entidades `User`, `Event` y `Booking`.
- Aplica las migraciones para crear las tablas correspondientes en la base de datos.

## Relaciones entre Modelos

- Se definen las relaciones entre los modelos de la siguiente manera:
  - Un usuario puede tener muchas reservas.
  - Un usuario (opcionalmente) puede crear muchos eventos.
  - Un evento puede tener muchas reservas.
  - Una reserva pertenece a un usuario y a un evento.