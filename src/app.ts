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
import { PORT, MONGO_URL } from './utils/environment-variables';
import { connectDB } from './DB/mongoose';
import swaggerJsDoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
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

const swaggerOptions: Options = {
    swaggerDefinition: {
        openapi: '3.0.3',
        info: {
            version: '1.0.0',
            title: 'Dog Adopters REST API',
            description:
                'A REST API built with Express and MongoDB.\n' +
                'This API provides dog advertising and the context of the dogs for adopting and loving.',
            contact: {
                name: 'Afek',
                email: 'Afek.Sakajo@gmail.com',
                url: 'https://github.com/afekTheMiniLearner/dog-adapters',
            },
        },
        basePath: '/swagger',
        tags: [
            { name: 'Main operations' },
            { name: 'Auth operations' },
            { name: 'Dog CRUD operations' },
        ],
        components: {
            schemas,
            securitySchemes: {
                cookieAuth: {
                    type: 'apiKey',
                    in: 'cookie',
                    name: 'connect.sid',
                },
            },
        },
    },
    apis: ['**/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`server is up on: http://localhost:${PORT}`);
    });
}

export default app;
