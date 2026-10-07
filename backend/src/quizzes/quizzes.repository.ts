import { prisma } from '../db/prisma';
import type { QuestionWithOptions, QuizInputDTO } from './types';

class QuizRepository {
  async createQuiz({ title, questions }: QuizInputDTO) {
    const quiz = await prisma.quiz.create({
      data: {
        title,
        questions: {
          create: questions.map((q) => ({
            question: q.question,
            type: q.type,
            options:
              q.options && q.options.length > 0
                ? {
                    create: q.options.map((opt) => ({
                      title: opt.title,
                    })),
                  }
                : undefined,
          })),
        },
      },

      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });

    return quiz;
  }
}

export const QuizRepo = new QuizRepository();
