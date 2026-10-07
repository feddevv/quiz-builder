import type { Question } from '../generated/prisma/client';

export interface QuizInputDTO {
  title: string;
  questions: Question[];
}
