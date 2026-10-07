import type { Request, Response } from 'express';
import * as quizzesService from './quizzes.service';
import type { CreateQuizInputDTO } from './quizzes.schema';
import type { CreateQuizOutputDTO, GetQuizOutputDTO, GetQuizzesOutputDTO } from './types';
import { HttpError } from '../errors/HttpError';

export async function postQuiz(
  req: Request<unknown, unknown, CreateQuizInputDTO>,
  res: Response<CreateQuizOutputDTO>,
) {
  const { title, questions } = req.body;

  const quiz = await quizzesService.createQuiz({ title, questions });

  res.status(201).json({ id: quiz.id });
}

export async function getQuizzes(req: Request, res: Response<GetQuizzesOutputDTO>) {
  const quizzes = await quizzesService.getQuizzes();

  const mapped = quizzes.map(({ _count, ...q }) => ({
    ...q,
    questionsAmount: _count.questions,
  }));

  res.json(mapped);
}

export async function getQuizById(req: Request<{ id: string }>, res: Response<GetQuizOutputDTO>) {
  const { id } = req.params;

  const quiz = await quizzesService.getQuizById(Number(id));

  if (!quiz) {
    throw new HttpError(404, 'Quiz not found');
  }

  res.json(quiz);
}

export async function deleteQuizById(req: Request<{ id: string }>, res: Response<{ id: number }>) {
  const { id } = req.params;

  const quiz = await quizzesService.deleteQuizById(Number(id));

  res.json(quiz);
}
