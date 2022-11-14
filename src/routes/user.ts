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
import { verifyToken } from '../middlewares/validation/auth/verifyToken';
import { roleAuthorization } from '../middlewares/validation/auth/role';
const userRouter = Router();

userRouter.post('/signup', schemaValidator, signUp);

userRouter.post('/login', loginValidator, login);

userRouter.put(
  '/update-user/:id',
  schemaValidator,
  verifyToken,
  roleAuthorization('admin'),
  updateUser
);

userRouter.get('/users', verifyToken, roleAuthorization('admin'), getUsers);

userRouter.get('/user/:id', verifyToken, roleAuthorization('admin'), getUser);

userRouter.delete(
  '/delete-user/:id',
  verifyToken,
  roleAuthorization('admin'),
  deleteUser
);

export { userRouter };
