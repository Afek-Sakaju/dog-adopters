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
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import requestID from './middleware/requestID.middleware';
import mainRouter from './routers/main.router';
import dogsRouter from './routers/dogs.router';
import authRouter from './routers/auth.router';
import './passport-config';
import { PORT, MONGO_URL, NODE_ENV } from './utils/environment-variables';
import { connectDB } from './DB/mongoose';
import swaggerDocument from './swagger-docs.json';
import schemas from './models/swaggerSchemas';
import logger from './utils/logger';
import logAPI from './middleware/logAPI';
import { SYSTEM_REQ_ID } from './utils/consts';

if (process.env.NODE_ENV !== 'test') {
    connectDB(MONGO_URL);
}

const app = express();

app.use(requestID());
app.use(logAPI);
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
        logger.error(SYSTEM_REQ_ID, 'Failed with error', {
            error: err,
            method: req.method,
            originalUrl: req.originalUrl,
        });

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
        logger.info(SYSTEM_REQ_ID, `server is up`, {
            url: `http://localhost:${PORT}`,
            port: PORT,
        });
    });
}

export default app;
