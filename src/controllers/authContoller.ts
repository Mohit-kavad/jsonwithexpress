import { Request, Response } from 'express';
import { User } from '../models/userModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;
    const isExist = await User.findOne({ where: { email: email } });
    if (isExist) {
      return res.status(403).json({
        message: 'User already Exist'
      });
    }
    const data = await User.create({
      name: name,
      email: email,
      password: await bcrypt.hash(password, 12),
      role: role
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
    let userExist = await User.findOne({
      where: { email: email }
    });

    console.log('available column', userExist);

    if (userExist === null) {
      return res.status(403).json({
        message: 'user does not Exist'
      });
    }
    const passwordValid = await bcrypt.compare(
      password,
      userExist.toJSON().password
    );
    if (!passwordValid) {
      return res.status(403).json({
        message: 'password is invalid'
      });
    }
    // jwt
    const token = jwt.sign(
      { id: userExist.toJSON().id, email: userExist.toJSON().email },
      process.env.JWT_SECRET!,
      {
        expiresIn: process.env.JWT_EXPIRES_IN
      }
    );
    res.status(201).json({
      status: 200,
      message: 'success',
      user: userExist,
      token
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { signUp, login };
