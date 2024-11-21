import User from '../../models/User.js'

let register = async (req, res, next) => {
    try {
        let user = req.body
        user.online = true

        let newUser = await User.create(user)

        return res.status(201).json({
            success: true,
            response: {
                user: newUser,
                token: req.token
            },
            message: 'Successfully registered user'
        })
    } catch (error) {
        next(error)
    }
}

export default register