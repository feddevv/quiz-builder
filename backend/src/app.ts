import express, { json, type Request, type Response, type NextFunction } from 'express';
import { router as quizzesRouter } from './quizzes/quizzes.route';
import { ZodError } from 'zod';
import { HttpError } from './errors/HttpError';

const app = express();

app.use(json());

app.use('/api', quizzesRouter);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  let message = 'Internal server error';

  if (err instanceof ZodError) {
    statusCode = 401;
    message = err.issues[0]?.message || 'Validation error';
  } else if (err instanceof HttpError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({
    message,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening to PORT ${process.env.PORT || 3000}`);
});
