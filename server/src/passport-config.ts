import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';

import { SYSTEM_REQ_ID } from './utils/consts';
import { getUserByUsername, getUserById } from './services/user.service';
import { IUser, IPassportUser } from './interfaces/user.interface';
import logger from './utils/logger';

passport.use(
    new LocalStrategy(
        async (
            username: string,
            password: string,
            done: (err: string | null, user: IUser | null) => void
        ) => {
            try {
                const user: IUser | undefined | null = await getUserByUsername(
                    username,
                    SYSTEM_REQ_ID
                );
                if (!user) {
                    logger.info(SYSTEM_REQ_ID, 'Username not found');
                    return done('user not found', null);
                }

                const isMatch = await bcrypt.compare(password, user.password);

                if (!isMatch) {
                    logger.info(
                        SYSTEM_REQ_ID,
                        "Username's password not matched",
                        {
                            username: username,
                            password: '*'.repeat(password.length + 1),
                        }
                    );
                    return done('user not match password', null);
                }

                logger.info(SYSTEM_REQ_ID, 'Username login successfully', {
                    username: username,
                });
                done(null, user);
            } catch (error) {
                // @ts-ignore
                done(error?.message ?? error, null);
            }
        }
    )
);

// IIPassportUser is necessary to identify this type to TS
passport.serializeUser((user: IPassportUser | null, done: Function) => {
    done(null, user?._id);
});

passport.deserializeUser(async (id: string, done: Function) => {
    const user = await getUserById(id, SYSTEM_REQ_ID);
    if (!user) done('user not found', null);
    else done(null, user);
});
