import User from '../../models/User.js';

export default async (req, res) => {
    try {
        const { email } = req.user;
        await User.findOneAndUpdate(
            { email },
            { online: false }
        );

        return res.status(200).json({
            success: true,
            message: 'Sesión cerrada exitosamente'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al cerrar sesión'
        });
    }
};