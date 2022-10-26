import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

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
    res.send('OK');
});

export = router;
