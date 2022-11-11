import { Router } from 'express';
import { login, signUp } from '../controllers/authContoller';
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser
} from '../controllers/userController';
import { schemaValidator } from '../middlewares/validation/validator/user';
import { loginValidator } from '../middlewares/validation/validator/login';
import { verifyToken } from '../middlewares/validation/validator/verifyToken';

const userRouter = Router();

userRouter.post('/signup', schemaValidator, signUp);

userRouter.post('/login', loginValidator, login);

userRouter.put('/update-user/:id', schemaValidator, updateUser);

userRouter.get('/users', verifyToken, getUsers);

userRouter.get('/user/:id', getUser);

userRouter.delete('/delete-user/:id', deleteUser);

export { userRouter };
