const validationErrorHandler = (err, req, res, next) => {
    try {
        // Verifica si es un error de validación de Mongoose
        if (err.name === 'ValidationError') {
            // Extrae los mensajes de error de cada campo
            const errors = Object.values(err.errors).map(error => error.message);
            return res.status(400).json({ success: false, errors });
        }
        // Pasa otros tipos de errores al siguiente middleware
        next(err);
    } catch (error) {
        next(error);
    }
};

export default validationErrorHandler;