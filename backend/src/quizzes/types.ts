import type { Option, Question } from '../generated/prisma/client';

export interface QuestionWithOptions extends Question {
  options: Option[];
}

export interface CreateQuizOutputDTO {
  id: number;
}
