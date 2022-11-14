import { User } from '../models/userModel';

declare global {
  namespace Express {
    export interface Request {
      user: User;
    }
  }
}
