import { QuizRepo } from './quizzes.repository';
import type { QuizInputDTO } from './types';

export async function createQuiz({ title, questions }: QuizInputDTO) {
  const quiz = await QuizRepo.createQuiz({ title, questions });

  return quiz;
}
