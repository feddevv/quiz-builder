import { Router } from 'express';
import * as quizzesController from './quizzes.controller';
import { validate } from '../middleware/validator';
import { createQuizSchema } from './quizzes.schema';

export const router = Router();

router.post('/quizzes', validate({ body: createQuizSchema }), quizzesController.postQuiz);
router.get('/quizzes', quizzesController.getQuizzes);
router.get('/quizzes/:id', quizzesController.getQuizById);
