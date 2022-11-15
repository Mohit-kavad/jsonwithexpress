import { NextFunction, Request, Response } from 'express';

const roleAuthorization = (...role: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // check is user logedin with user or admin if yes then....
    //@ts-ignore
    if (!role.includes(req.user.role)) {
      return res.status(403).json({
        message: "You don't have permision to perform this operation"
      });
    }
    next();
  };
};

export { roleAuthorization };
