import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const email = profile.emails[0].value;
                const displayName = profile.displayName || "Unknown Name";
                const [name, ...lastnameArray] = displayName.split(" ");
                const lastname = lastnameArray.join(" ") || "N/A";
                let user = await User.findOne({ email });
                if (!user) {
                    user = new User({
                        name: name,
                        lastname: lastname,
                        email,
                        photo: profile.photos[0]?.value || "",
                        password: profile.id,
                        online: true,
                    });
                    await user.save();
                } else {
                    user.online = true;
                    await user.save();
                }
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

export default passport;