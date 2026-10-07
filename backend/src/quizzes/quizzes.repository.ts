import type { Question } from '../generated/prisma/client';
import { prisma } from '../db/prisma';

class QuizRepository {
  async createQuiz({ title, questions }: { title: string; questions: Question[] }) {
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
