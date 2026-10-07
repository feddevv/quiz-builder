import type { Option, Question } from '../generated/prisma/client';

export interface QuestionWithOptions extends Question {
  options: Option[];
}

export interface QuizInputDTO {
  title: string;
  questions: QuestionWithOptions[];
}

export interface QuizOutputDTO {
  id: number;
}
