import { Router } from "express";
import { login, signUp } from "../controllers/authContoller";
import { createValidator } from "../middlewares/validation/validator/user";

const userRouter = Router();

userRouter.post("/signup", createValidator, signUp);
userRouter.post("/login", login);

export { userRouter };
