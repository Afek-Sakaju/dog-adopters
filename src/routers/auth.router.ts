import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
const router = express.Router();

router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/home.html', //'http://localhost:3000/home.html',
        failureRedirect: '/login.html', //'http://localhost:3000/login.html',
    })
);

export = router;
