import { Router } from 'express';
import * as quizzesController from './quizzes.controller';

export const router = Router();

router.post('/quizzes', quizzesController.postQuiz);
