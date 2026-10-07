import express, { json } from 'express';
import { router as quizzesRouter } from './quizzes/quizzes.route';

const app = express();

app.use(json());

app.use('/api', quizzesRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening to PORT ${process.env.PORT || 3000}`);
});
