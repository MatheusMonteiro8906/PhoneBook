import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const apiKey = req.headers['api-key'];

        if (apiKey !== process.env.API_KEY) {
            return res.status(401).json({ message: 'ApiKey inválida' });
        }

        next();
    }
}