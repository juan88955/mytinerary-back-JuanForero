import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        console.log("Buscando usuario con el correo:", req.body.email);
        let account = await User.findOne({ email: req.body.email });

        if (account) {
            console.log("Usuario encontrado:", account);
            req.user = {
                name: account.name,
                email: account.email,
                password: account.password,
                country: account.country,
                online: account.online,
                firstName: account.firstName,
                lastname: account.lastname,
                photo: account.photo,
            };
            return next();
        }
        return res.status(400).json({
            success: false,
            message: "User does not exist",
        });
    } catch (error) {
        console.error("Error en accountNotExists:", error);
        next(error);
    }
};