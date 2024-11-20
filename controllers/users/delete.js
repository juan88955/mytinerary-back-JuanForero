import User from "../../models/User.js"

let deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'User successfully deleted',
            response: deletedUser
        });

    } catch (error) {
        next(error);
    }
}

export default deleteUser
