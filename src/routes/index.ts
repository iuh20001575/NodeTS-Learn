import express, { Router } from 'express';
import site from './site';

const router: Router = express.Router();

router.use('/', site);

export default router;
