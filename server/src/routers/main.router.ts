import express, { Request, Response, NextFunction } from 'express';

import logger from '../utils/logger';

const router = express.Router();

router.use((req: Request, _res: Response, next: NextFunction) => {
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
 *         description: Success
 */
router.get('/', (req: Request, res: Response, _next: NextFunction) => {
    logger.debug(req.id, 'call to API', {
        method: req.method,
        originalUrl: req.originalUrl,
    });
    res.status(200);
});

/**
 * @swagger
 * /health:
 *   get:
 *     tags: ['Main operations']
 *     description: Get server's health status
 *     responses:
 *       200:
 *         description: Returns OK (server is up)
 */
router.get('/health', (req: Request, res: Response, _next: NextFunction) => {
    logger.debug(req.id, 'call to API', {
        method: req.method,
        originalUrl: req.originalUrl,
    });
    res.send('OK');
});

export = router;
