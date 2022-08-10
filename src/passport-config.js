const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userList = require('./mocks/USERS.mock.json');

passport.use(
    new LocalStrategy((username, password, done) => {
        const user = userList.find((u) => u.username === username);
        if (!user) return done('user not found', null);
        if (user.password !== password) {
            return done('user not match password', null);
        }
        done(null, user);
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = userList.find((u) => u.id === id);
    if (!user) done('user not found', null);
    else done(null, user);
});
