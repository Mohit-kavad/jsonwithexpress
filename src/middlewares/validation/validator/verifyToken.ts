import { json } from 'body-parser';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    // getting bearer token
    const bearerToken = req.headers.authorization?.split(' ')[1];
    if (bearerToken === undefined) {
      return res.status(401).json({
        message: 'You are not loggin Please loggin to get access'
      });
    }
    //verify jwt token
    const decode = jwt.verify(bearerToken, process.env.JWT_SECRET!);
    console.log(decode);

    next();
  } catch (error) {
    res.status(500).json(error);
  }
};

export { verifyToken };
