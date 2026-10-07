import type { Request, Response } from 'express';
import * as quizzesService from './quizzes.service';
import type { CreateQuizInputDTO } from './quizzes.schema';
import type { CreateQuizOutputDTO } from './types';

export async function postQuiz(
  req: Request<unknown, unknown, CreateQuizInputDTO>,
  res: Response<CreateQuizOutputDTO>,
) {
  const { title, questions } = req.body;

  const quiz = await quizzesService.createQuiz({ title, questions });

  res.status(201).json({ id: quiz.id });
}
