import type { Request, Response } from 'express';
import type { QuizInputDTO, QuizOutputDTO } from './types';
import * as quizzesService from './quizzes.service';

export async function postQuiz(
  req: Request<unknown, unknown, QuizInputDTO>,
  res: Response<QuizOutputDTO>,
) {
  const { title, questions } = req.body;

  const quiz = await quizzesService.createQuiz({ title, questions });

  res.status(201).json({ id: quiz.id });
}
