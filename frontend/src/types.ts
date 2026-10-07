export type QuestionType = 'boolean' | 'input' | 'checkbox';

export interface GetQuizzesResponseDTO {
  id: number;
  title: string;
  questionsAmount: number;
}

export interface GetQuizResponseDTO {
  id: number;
  title: string;
  questions: Question[];
}

export interface Question {
  id: number;
  question: string;
  type: QuestionType;
  options?: Option[];
}

export interface Option {
  id: number;
  title: string;
}
