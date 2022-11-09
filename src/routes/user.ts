import { Router } from 'express';
import { login, signUp } from '../controllers/authContoller';
import { createValidator } from '../middlewares/validation/validator/user';
import { loginValidator } from '../middlewares/validation/validator/login';
const userRouter = Router();

userRouter.post('/signup', createValidator, signUp);

userRouter.post('/login', loginValidator, login);

export { userRouter };
