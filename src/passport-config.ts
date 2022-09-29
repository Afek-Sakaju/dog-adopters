import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';

import {
    getUserPasswordByUsername,
    getUserById,
} from './services/user.service';
import { IUser, passportUser } from './interfaces/user.interface';

passport.use(
    new LocalStrategy(
        async (
            username: string,
            password: string,
            done: (err: string | null, user: IUser | null) => void // optional
        ) => {
            const user: IUser | undefined = await getUserPasswordByUsername(
                username
            );
            if (!user) {
                return done('user not found', null);
            }

            //                                       text, hash
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return done('user not match password', null);
            }

            done(null, user);
        }
    )
);

// note : fixed this issue with TS by creating speciefic type
// of user just for the passport config
passport.serializeUser((user: passportUser | null, done: Function) => {
    done(null, user?._id);
});

passport.deserializeUser(async (id: string, done: Function) => {
    const user = await getUserById(id);
    if (!user) done('user not found', null);
    else done(null, user);
});
