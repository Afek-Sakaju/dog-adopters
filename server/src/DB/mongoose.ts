import mongoose from 'mongoose';

import logger from '../utils/logger';
import { SYSTEM_REQ_ID } from '../utils/consts';

export async function connectDB(uri: string) {
    return mongoose
        .connect(uri)
        .then(() => {
            logger.info(SYSTEM_REQ_ID, 'connected to database', { uri });
        })
        .catch((err) => {
            logger.error(SYSTEM_REQ_ID, 'failed to connect db', {
                uri,
                error: err,
            });
            throw err;
        });
}
