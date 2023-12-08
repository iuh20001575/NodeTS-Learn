import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT: number = 8080;

app.get('/', (res: Request, req: Response) => {
    req.send('Hello world!');
});

app.listen(PORT, () => console.log(`Server running on: ${PORT}...`));
