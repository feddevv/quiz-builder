import type { Option, Question, Quiz } from '../generated/prisma/client';

export interface QuestionWithOptions extends Question {
  options: Option[];
}

export interface CreateQuizOutputDTO {
  id: number;
}

export type GetQuizzesOutputDTO = (Quiz & { questionsAmount: number })[];
export type GetQuizOutputDTO = CreateQuizOutputDTO;
