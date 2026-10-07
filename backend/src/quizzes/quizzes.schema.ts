import { z } from 'zod';

const optionSchema = z.object({
  title: z.string().trim().min(1, 'Option text cannot be empty'),
});

const checkboxQuestionSchema = z.object({
  type: z.literal('checkbox'),
  question: z.string().trim().min(1, 'Question text is required'),
  options: z.array(optionSchema).min(2, 'At least 2 options are required'),
});

const booleanQuestionSchema = z.object({
  type: z.literal('boolean'),
  question: z.string().trim().min(1, 'Question text is required'),
});

const inputQuestionSchema = z.object({
  type: z.literal('input'),
  question: z.string().trim().min(1, 'Question text is required'),
});

const questionSchema = z.discriminatedUnion('type', [
  checkboxQuestionSchema,
  booleanQuestionSchema,
  inputQuestionSchema,
]);

export const createQuizSchema = z.object({
  title: z.string().trim().min(3, 'Title must be at least 3 characters long'),
  questions: z.array(questionSchema).min(1, 'Quiz must contain at least 1 question'),
});

export type CreateQuizInput = z.infer<typeof createQuizSchema>;
