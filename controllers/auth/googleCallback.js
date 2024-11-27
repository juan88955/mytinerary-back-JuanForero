import User from "../../models/User.js";

const handleGoogleCallback = async (req, res) => {
    try {
        if (!req.user?.email) {
            throw new Error('No user email found');
        }

        let user = await User.findOne({ email: req.user.email });

        if (!user) {
            user = new User({
                email: req.user.email,
                name: req.user.name,
                lastname: req.user.lastname,
                photo: req.user.photo,
                password: req.user.password,
                online: true
            });
            await user.save();
            req.user = user;
        } else {
            user.online = true;
            await user.save();
            req.user = user;
        }

        const responseData = {
            success: true,
            message: user ? "Signed in successfully" : "Account created successfully",
            response: {
                user: {
                    email: user.email,
                    name: user.name,
                    lastname: user.lastname,
                    country: user.country || '',
                    photo: user.photo,
                },
                token: req.token
            }
        };

        const redirectURL = process.env.FRONTEND_URL || 'https://front-end-mern-91f73.web.app/';
        return res.redirect(
            `${redirectURL}/auth/google/callback?data=${encodeURIComponent(JSON.stringify(responseData))}`
        );
    } catch (error) {
        console.error('Error in callback:', error);
        const errorRedirectURL = process.env.FRONTEND_URL || 'https://front-end-mern-91f73.web.app/';
        return res.redirect(`${errorRedirectURL}/signin?error=${encodeURIComponent(error.message)}`);
    }
};

export default handleGoogleCallback;