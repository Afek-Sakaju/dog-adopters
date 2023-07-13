import express, { Request, Response, NextFunction } from 'express';

import logger from '../utils/logger';

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    logger.debug(req.id, 'Call to API', {
        method: req.method,
        originalUrl: req.originalUrl,
        body: req.body,
    });
    next();
});

/**
 * @swagger
 * /:
 *   get:
 *     tags: ['Main operations']
 *     description: Default api
 *     responses:
 *       200:
 *         description: Returns welcome everyone
 */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    logger.debug(req.id, 'call to API', {
        method: req.method,
        originalUrl: req.originalUrl,
    });
    res.send('welcome everyone');
});

/**
 * @swagger
 * /health:
 *   get:
 *     tags: ['Main operations']
 *     description: Get health server status
 *     responses:
 *       200:
 *         description: Returns OK
 */
router.get('/health', (req: Request, res: Response, next: NextFunction) => {
    logger.debug(req.id, 'call to API', {
        method: req.method,
        originalUrl: req.originalUrl,
    });
    res.send('OK');
});

export = router;
