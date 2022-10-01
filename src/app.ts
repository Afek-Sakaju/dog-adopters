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
import './passport-config';
import { PORT, MONGO_URL, NODE_ENV } from './utils/environment-variables';
import { connectDB } from './DB/mongoose';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-docs.json';
import schemas from './models/swaggerSchemas';

if (process.env.NODE_ENV !== 'test') {
    connectDB(MONGO_URL);
}

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

app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log(
        `${req.method}:${req.originalUrl} body: ${JSON.stringify(req.body)}`
    );
    next();
});

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

if (NODE_ENV !== 'production') {
    // @ts-ignore
    swaggerDocument.swaggerDefinition.components.schemas = schemas;
    const swaggerOptions = {
        customCssUrl: '/swagger.css',
    };

    const swaggerDocs = swaggerJsDoc(swaggerDocument);
    app.use(
        '/swagger',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocs, swaggerOptions)
    );
}

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`server is up on: http://localhost:${PORT}`);
    });
}

export default app;
