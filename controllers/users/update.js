import User from '../../models/User.js';

const updateUser = async (req, res, next) => {
    try {
       const updatedUser = await User.findByIdAndUpdate(
            req.params.id,        
            req.body,
            { new: true }             
        )

        if (updatedUser) {
            return res.status(200).json({
                success: true,
                message: "User successfully updated",
                response: updatedUser
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

    } catch (error) {
        next(error)
    }
}

export default updateUser
