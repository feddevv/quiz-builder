import type { Request, Response } from 'express';
import type { QuizInputDTO, QuizOutputDTO } from './types';
import * as quizService from './quizzes.service';

export async function postQuiz(
  req: Request<unknown, unknown, QuizInputDTO>,
  res: Response<QuizOutputDTO>,
) {
  const { title, questions } = req.body;

  const quiz = await quizService.createQuiz({ title, questions });

  res.status(201).json({ id: quiz.id });
}
