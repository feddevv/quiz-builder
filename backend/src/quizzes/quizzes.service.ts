import { HttpError } from '../errors/HttpError';
import { QuizRepo } from './quizzes.repository';
import type { CreateQuizInputDTO } from './quizzes.schema';

export async function createQuiz({ title, questions }: CreateQuizInputDTO) {
  const quiz = await QuizRepo.createQuiz({ title, questions });

  return quiz;
}

export async function getQuizzes() {
  const quizzes = await QuizRepo.findAllQuizzes();

  return quizzes;
}

export async function getQuizById(id: number) {
  const quiz = await QuizRepo.findQuizById(id);

  if (!quiz) {
    throw new HttpError(404, 'Quiz not found');
  }

  return quiz;
}

export async function deleteQuizById(id: number) {
  const deletedQuiz = await QuizRepo.deleteQuizById(id);

  if (!deletedQuiz) {
    throw new HttpError(404, 'Quiz not found');
  }

  return deletedQuiz;
}
