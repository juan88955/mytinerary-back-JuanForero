import Joi from "joi";

const userSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.min': 'El nombre debe tener al menos 2 caracteres',
            'string.max': 'El nombre no puede tener más de 50 caracteres',
            'any.required': 'El nombre es obligatorio'
        }),
    lastname: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.min': 'El apellido debe tener al menos 2 caracteres',
            'string.max': 'El apellido no puede tener más de 50 caracteres',
            'any.required': 'El apellido es obligatorio'
        }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Formato de email inválido',
            'any.required': 'El email es obligatorio'
        }),
    password: Joi.string()
        .min(5)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .required()
        .messages({
            'string.min': 'La contraseña debe tener al menos 5 caracteres',
            'string.pattern.base': 'La contraseña debe contener al menos una mayúscula, una minúscula y un número',
            'any.required': 'La contraseña es obligatoria'
        }),
    country: Joi.string()
        .default('Mexico')
        .messages({
            'any.required': 'El país es obligatorio'
        }),
    photo: Joi.string()
        .allow('')
        .uri()
        .messages({
            'string.uri': 'La URL de la foto no es válida'
        })
});

export default userSchema;