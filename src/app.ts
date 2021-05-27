import * as dotenv from 'dotenv';
import express from 'express';
import { router } from './routes';
import path from 'path';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const app = express();

app.use(express.json());
app.use(router);

export { app };