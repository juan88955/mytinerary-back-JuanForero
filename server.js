import express from 'express';
import "dotenv/config.js";
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './routes/index.js';
import './config/database.js';
import not_found_handler from './middlewares/not_found_handler.js';
import bad_request_handler from './middlewares/bad_request_handler.js';
import error_handler from './middlewares/error_handler.js';

// configuracion de servidor
const server = express();

// configuracion de poueerto
const PORT = process.env.PORT || 8080;

// Callback para mostrar mensaje de inicio
const ready = () => console.log("Servidor listo en el puerto: " + PORT);

// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));

// router de la api
server.use('/api', indexRouter);

// Manejador de errores
server.use(bad_request_handler); // manejador de errores de validación 400
server.use(not_found_handler); // manejador de errores 404
server.use(error_handler); // manejador de errores 500 (general)


// funcion de inicio del servidor
server.listen(PORT, ready);
