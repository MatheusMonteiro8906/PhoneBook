import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const apiKey = req.headers['api-key'];

        if (apiKey !== 'MeAprova') {
            return res.status(401).json({ message: 'API KEY inválida' });
        }

        next();
    }
}