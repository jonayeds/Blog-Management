import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { router } from './app/routes';

export const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use("/api", router)

export default app.get('/', (req: Request, res: Response) => {
  res.send('Blog Management is running 🏃🏼‍♂️‍➡️');
});
