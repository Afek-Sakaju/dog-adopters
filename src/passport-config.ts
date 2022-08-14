const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userList: IUSER[] = require('./mocks/USERS.mock.json');

interface IUSER {
    id: string;
    username: string;
    password: string;
    phoneNumber: string;
    fullName: string;
}

passport.use(
    new LocalStrategy((username: string, password: string, done: Function) => {
        const user: IUSER | undefined = userList.find(
            (u) => u.username === username
        );
        if (!user) return done('user not found', null);
        if (user.password !== password) {
            return done('user not match password', null);
        }
        done(null, user);
    })
);

passport.serializeUser((user: IUSER, done: Function) => {
    done(null, user.id);
});

passport.deserializeUser((id: string, done: Function) => {
    const user = userList.find((u) => u.id === id);
    if (!user) done('user not found', null);
    else done(null, user);
});
