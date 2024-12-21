import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { router } from './app/routes';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { notFound } from './app/middleware/notFound';

export const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use('/api', router);

// Test route
export default app.get('/', (req: Request, res: Response) => {
  res.send('Blog Management is running 🏃🏼‍♂️‍➡️');
});

// Global Error Handler
app.use(globalErrorHandler);

// Not Found Route
app.use(notFound);
