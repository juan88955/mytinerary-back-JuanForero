// routes/auth.js
import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import signOut from "../controllers/auth/signOut.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import accountNoExists from "../middlewares/accountNoExists.js";
import generateToken from "../middlewares/generateToken.js";
import isValidatedPassword from "../middlewares/isValidatedPassword.js";
import User from "../models/User.js";

const routerAuth = Router();

routerAuth.post('/signIn', accountNoExists, isValidatedPassword, generateToken, signIn);
routerAuth.post('/signOut', passport.authenticate('jwt', { session: false }), signOut);

routerAuth.get(
    '/signin/google',
    passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] })
);

routerAuth.get(
    '/signin/google/callback',
    passportGoogle.authenticate('google', {
        session: false,
        failureRedirect: process.env.FRONTEND_URL ? `${process.env.FRONTEND_URL}/signin` : 'http://localhost:5173/signin'
    }),
    generateToken,
    async (req, res) => {
        try {
            if (!req.user?.email) {
                throw new Error('No user email found');
            }

            const updatedUser = await User.findOneAndUpdate(
                { email: req.user.email },
                { online: true },
                { new: true }
            );
            if (!updatedUser) {
                const newUser = new User({
                    email: req.user.email,
                    name: req.user.name,
                    lastname: req.user.lastname,
                    photo: req.user.photo,
                    password: req.user.password,
                    online: true
                });
                await newUser.save();
                req.user = newUser;
            }

            const responseData = {
                success: true,
                message: updatedUser ? "Signed in successfully" : "Account created successfully",
                response: {
                    user: {
                        email: req.user.email,
                        name: req.user.name,
                        lastname: req.user.lastname,
                        country: req.user.country || '',
                        photo: req.user.photo,
                    },
                    token: req.token
                }
            };

            const redirectURL = process.env.FRONTEND_URL || 'http://localhost:5173';
            return res.redirect(
                `${redirectURL}/auth/google/callback?data=${encodeURIComponent(JSON.stringify(responseData))}`
            );
        } catch (error) {
            console.error('Error in callback:', error);
            const errorRedirectURL = process.env.FRONTEND_URL || 'http://localhost:5173';
            return res.redirect(`${errorRedirectURL}/signin?error=${encodeURIComponent(error.message)}`);
        }
    }
);

export default routerAuth;