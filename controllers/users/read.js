import User from "../../models/User.js"

let allUser = async (req, res, next) => {
    try {

        let { name, email, address, phone } = req.query;
        let query = {}
        if (name) {
            query.name = { $regex: '^' + name, $options: 'i' }
        }
        if (email) {
            query.email = { $regex: '^' + email, $options: 'i' }
        }
        if (address) {
            query.address = { $regex: '^' + address, $options: 'i' }
        }
        if (phone) {
            query.phone = { $regex: phone }
        }

        let users = await User.find(query).exec()

        return res.status(200).json({
            success: true,
            response: users
        })
    } catch (error) {
        next(error)
    }
}

let userById = async (req, res, next) => {
    try {
        const userId = req.params.id
        const user = await User.findById(userId).exec();
        if (user) {
            return res.status(200).json({
                success: true,
                response: user
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
    } catch (error) {
        next(error);
    }
}

export { allUser, userById } 
