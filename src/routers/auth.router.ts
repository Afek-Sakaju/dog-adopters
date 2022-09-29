import express from 'express';
import passport from 'passport';

import {
    createNewUserCtrl,
    getUserByIdCtrl,
} from '../controllers/user.controller';

const router = express.Router();

router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/home.html', //'http://localhost:3000/home.html',
        failureRedirect: '/login.html', //'http://localhost:3000/login.html',
    })
);

router.post('/register', createNewUserCtrl);

router.get('/:userId', getUserByIdCtrl);

export = router;
