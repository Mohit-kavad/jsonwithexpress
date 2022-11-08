import { Request, Response } from 'express';
import { User } from '../models/userModel';
import jwt from 'jsonwebtoken';

const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    const data = await User.create({
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    });
    res.status(201).json({
      status: 200,
      message: 'success',
      data
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ where: { email: email } });

    if (userExist) {
      const passwordValidate = password === userExist.toJSON().password;
      let user = userExist;
      //   jwt
      const token = jwt.sign(userExist.toJSON(), process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRES_IN
      });
      console.log(token);

      console.log('jet token', token);
      if (passwordValidate) {
        res.status(200).json({
          status: 200,
          message: 'success',
          token,
          user
        });
      } else {
        res.status(401).json({ error: 'Incorect Password' });
      }
    } else {
      res.status(401).json({ error: 'Invalid Email' });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
};

export { signUp, login };
