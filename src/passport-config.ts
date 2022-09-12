import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { getUserByUsername } from './services/user.service';
import { IUser } from './interfaces/user.interface';

passport.use(
    new LocalStrategy(
        async (
            username: string,
            password: string,
            done: (err: string | null, user: IUser | null) => void // optional
        ) => {
            const user: IUser | undefined = await getUserByUsername(username);
            if (!user) return done('user not found', null);
            if (user.password !== password) {
                return done('user not match password', null);
            }
            done(null, user);
        }
    )
);

passport.serializeUser((user: IUser | null, done: Function) => {
    done(null, user.id);
});

passport.deserializeUser((id: string, done: Function) => {
    const user = userList.find((u) => u.id === id);
    if (!user) done('user not found', null);
    else done(null, user);
});
