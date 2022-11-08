import { Request, Response, NextFunction } from "express";
import { createSchema } from "../schema/user";

const createValidator = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = createSchema.validate(req.body);

    if (error) return res.status(400).json(error);
    next();
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { createValidator };