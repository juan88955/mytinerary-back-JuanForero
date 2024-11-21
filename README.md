MyTinerary Backend

Backend para una aplicación de itinerarios de viajes desarrollada con Node.js y Express.

Características

- API RESTful
- Autenticación con JWT y Google OAuth2.0  
- Base de datos MongoDB con Mongoose
- Validación de datos con Joi
- Encriptación de contraseñas con bcrypt
- CORS habilitado
- Logging con Morgan

Requisitos Previos

- Node.js (versión recomendada: 18.x o superior)
- MongoDB instalado y ejecutándose
- Una cuenta de Google Cloud Platform (para OAuth2.0)

Instalación

1. Clona el repositorio:
git clone https://github.com/tuusuario/mytinerary-back-juanforero.git

2. Instala las dependencias:
npm install

3. Crea un archivo .env en la raíz del proyecto con las siguientes variables:
PORT=8080
URI_MONGO=      # Tu URL de conexión a MongoDB
SECRET=         # Tu clave secreta para JWT
GOOGLE_CLIENT_ID=    # Tu ID de cliente de Google  
GOOGLE_CLIENT_SECRET=    # Tu secreto de cliente de Google
GOOGLE_URI_BACK=    # URL de callback de Google (ej: http://localhost:8080/api/auth/signin/google/callback)
FRONTEND_URL=   # URL de tu frontend (ej: http://localhost:5173)

Scripts Disponibles

- npm start: Inicia el servidor con nodemon
- npm run dev: Inicia el servidor en modo desarrollo 
- npm run cities: Ejecuta el script de ciudades
- npm run itineraries: Ejecuta el script de itinerarios
- npm run user: Ejecuta el script de usuarios

Rutas API

Autenticación
- POST /api/auth/signup - Registro de usuario
- POST /api/auth/signin - Inicio de sesión 
- GET /api/auth/signin/google - Autenticación con Google
- GET /api/auth/signin/google/callback - Callback de Google Auth

Ciudades
- GET /api/cities - Obtener todas las ciudades
- GET /api/cities/:id - Obtener ciudad por ID
- POST /api/cities - Crear nueva ciudad (requiere autenticación)
- PUT /api/cities/:id - Actualizar ciudad (requiere autenticación)
- DELETE /api/cities/:id - Eliminar ciudad (requiere autenticación)

Itinerarios
- GET /api/itineraries - Obtener todos los itinerarios
- GET /api/itineraries/:id - Obtener itinerario por ID
- POST /api/itineraries - Crear nuevo itinerario (requiere autenticación)
- PUT /api/itineraries/:id - Actualizar itinerario (requiere autenticación)
- DELETE /api/itineraries/:id - Eliminar itinerario (requiere autenticación)

Dependencias Principales

- express: Framework web
- mongoose: ODM para MongoDB
- passport y passport-jwt: Autenticación con JWT
- passport-google-oauth20: Autenticación con Google
- joi: Validación de datos
- bcryptjs: Encriptación de contraseñas
- cors: Middleware para CORS

Dependencias de Desarrollo

- nodemon: Reinicio automático del servidor durante el desarrollo

Autor

Juan Forero
