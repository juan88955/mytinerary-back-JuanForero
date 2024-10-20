const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        // manejo de error 404
        message: `La petición con el método ${req.method} en la ruta ${req.url} no fue encontrada- Not Found`
    })
}

export default not_found_handler;