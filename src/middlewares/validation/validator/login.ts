import { Request, Response, NextFunction } from 'express';
import { baseSchema } from '../schema/user';

const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = baseSchema.validate(req.body);

    if (error) return res.status(400).json(error);

    return next();
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { loginValidator };
