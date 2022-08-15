import express, {
    ErrorRequestHandler,
    Request,
    Response,
    NextFunction,
} from 'express';
import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';
import path from 'path';
import mainRouter from './routers/main.router';
import dogsRouter from './routers/dogs.router';
import authRouter from './routers/auth.router';
import './passport-config.ts';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(
    session({
        secret: 'JLT',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', mainRouter);
app.use('/dogs', dogsRouter);
app.use('/auth', authRouter);

app.use(
    (
        err: ErrorRequestHandler,
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        console.error(
            `${req.method}:${req.originalUrl}, failed with error:${err}`
        );
        next(err);
    }
);

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log(`server is up on: http://localhost:${PORT}`);
});
