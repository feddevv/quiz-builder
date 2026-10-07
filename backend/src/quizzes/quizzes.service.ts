import { QuizRepo } from './quizzes.repository';
import type { CreateQuizInputDTO } from './quizzes.schema';

export async function createQuiz({ title, questions }: CreateQuizInputDTO) {
  const quiz = await QuizRepo.createQuiz({ title, questions });

  return quiz;
}
