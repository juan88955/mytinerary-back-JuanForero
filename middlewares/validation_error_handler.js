const validationErrorHandler = (err, req, res, next) => {
    // Verifica si el error es un error de validación de Mongoose
    if (err.name === 'ValidationError') {
        // Extrae los mensajes de error de cada campo que falló la validación
        const errors = Object.values(err.errors).map(error => error.message);

        // Envía una respuesta JSON con los detalles del error
        return res.status(400).json({
            success: false,
            message: 'Error de validación',
            errors
        });
    }

    // Si no es un error de validación, pasa el error al siguiente middleware
    next(err);
};

export default validationErrorHandler;