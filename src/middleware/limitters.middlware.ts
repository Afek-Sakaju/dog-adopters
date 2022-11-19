import rateLimit from 'express-rate-limit';

export const loginLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: 5,
});

export const uploadDogProfileLimiter = rateLimit({
    windowMs: 1000 * 60,
    message: 'Maximum tries, please try again later',
    legacyHeaders: false,
    standardHeaders: true,
    max: 1,
});
