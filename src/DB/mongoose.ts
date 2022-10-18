import mongoose from 'mongoose';
import logger from '../utils/logger';
import { REQUEST_ID } from '../utils/consts';

export async function connectDB(uri: string) {
    return mongoose
        .connect(uri)
        .then(() => {
            logger.info(REQUEST_ID, 'connected to database', { uri });
        })
        .catch((err) => {
            logger.error(REQUEST_ID, 'failed to connect db', {
                uri,
                error: err,
            });
            throw err;
        });
}
