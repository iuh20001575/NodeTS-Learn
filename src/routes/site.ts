import express, { Router, Response } from 'express';

const router: Router = express.Router();

router.get('/', (_, resp: Response) => {
    resp.json('Working....');
});

export default router;
