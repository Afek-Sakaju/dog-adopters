import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome everyone');
});

router.get('/health', (req: Request, res: Response, next: NextFunction) => {
    res.send('OK');
});

export = router;