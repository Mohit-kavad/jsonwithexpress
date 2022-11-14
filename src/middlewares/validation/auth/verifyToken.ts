import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../../../models/userModel';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
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

    //  is user exist or not
    if (typeof decode !== 'string') {
      const isUserExist = await User.findByPk(decode.id);
      if (!isUserExist) {
        return res.status(401).json({
          message: 'this user does not exist longer more'
        });
      }

      // GRANT ACCESS
      //@ts-ignore
      req.user = isUserExist;
    }
    next();
  } catch (error) {
    res.status(500).json(error);
  }
};

export { verifyToken };
