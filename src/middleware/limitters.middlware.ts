import rateLimit from 'express-rate-limit';

export const loginLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: 5,
});

export const logoutLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: 5,
});

export const registerLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: 2,
});

export const uploadDogProfileLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: 1,
});

export const createDogLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: 2,
});

export const updateDogLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: 2,
});

export const deleteDogLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: 2,
});

// todo add limiters to more API's
