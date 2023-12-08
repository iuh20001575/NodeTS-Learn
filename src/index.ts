import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app: Express = express();
const PORT: number = 8080;

// Pre-middleware
app.use('/api', (req: Request, _, next: NextFunction) => {
    console.log('This is pre-middleware', req.url);

    next();
});

app.use('/api', router);

// Post-middleware
app.use('/api', () => {
    console.log('This is post-middleware');
});

app.listen(PORT, () => console.log(`Server running on: ${PORT}...`));
