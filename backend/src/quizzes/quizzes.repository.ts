import { prisma } from '../db/prisma';
import type { CreateQuizInputDTO } from './quizzes.schema';

class QuizRepository {
  async createQuiz({ title, questions }: CreateQuizInputDTO) {
    const quiz = await prisma.quiz.create({
      data: {
        title,
        questions: {
          create: questions.map((q) => ({
            question: q.question,
            type: q.type,
            options:
              q.type === 'checkbox' && q.options && q.options.length > 0
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

  async findAllQuizzes() {
    const quizzes = await prisma.quiz.findMany({
      include: {
        _count: {
          select: {
            questions: true,
          },
        },
      },
    });

    return quizzes;
  }

  async findQuizById(id: number) {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id,
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
