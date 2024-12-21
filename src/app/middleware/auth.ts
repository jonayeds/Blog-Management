import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '../utils/catchAsync';
import { AppError } from '../errors/appError';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';

export const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new AppError(401, 'You are not authorized');
    }
    // check if the token is valid
    jwt.verify(token, config.jwt_secret as string, function (err, decoded) {
      if (err) {
        throw new AppError(401, 'You are not authorized');
      }
      if (decoded) {
        req.body.user = decoded as JwtPayload;
        next();
      }
    });
  });
};
