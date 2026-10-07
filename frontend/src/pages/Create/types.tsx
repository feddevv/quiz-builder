export type QuestionType = 'boolean' | 'input' | 'checkbox';

export interface GetQuizzesResponseDTO {
  id: number;
  title: string;
  questionsAmount: number;
}
