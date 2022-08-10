const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/home.html', //'http://localhost:3000/home.html',
        failureMessage: '/login.html', //'http://localhost:3000/login.html',
    })
);

module.exports = router;
