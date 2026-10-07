import { prisma } from '../db/prisma';
import type { QuizInputDTO } from './types';

class QuizRepository {
  async createQuiz({ title, questions }: QuizInputDTO) {
    const quiz = await prisma.quiz.create({
      data: {
        title,
        questions: {
          createMany: {
            data: [...questions],
          },
        },
      },
    });

    return quiz;
  }
}

export const QuizRepo = new QuizRepository();
