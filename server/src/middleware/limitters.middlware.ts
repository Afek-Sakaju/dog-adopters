import rateLimit from 'express-rate-limit';
import {
    RATE_LIMIT_DOGS_CREATE,
    RATE_LIMIT_DOGS_DELETE,
    RATE_LIMIT_DOGS_UPDATE,
    RATE_LIMIT_DOGS_UPLOAD_IMAGES,
    RATE_LIMIT_LOGIN,
    RATE_LIMIT_REGISTER,
} from '../utils/environment-variables';

export const loginLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: RATE_LIMIT_LOGIN,
});

export const registerLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: RATE_LIMIT_REGISTER,
});

export const uploadDogProfileLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: RATE_LIMIT_DOGS_UPLOAD_IMAGES,
});

export const createDogLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: RATE_LIMIT_DOGS_CREATE,
});

export const updateDogLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: RATE_LIMIT_DOGS_UPDATE,
});

export const deleteDogLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: RATE_LIMIT_DOGS_DELETE,
});
