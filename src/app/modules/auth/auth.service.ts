import config from '../../config';
import { AppError } from '../../errors/appError';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';
import jwt from 'jsonwebtoken';
const loginUser = async (payload: ILoginUser) => {
  // checking if the user exists
  const user = await User.isUserExists(payload.email);
  if (!user) {
    throw new AppError(404, 'User not found');
  }
  if (user?.isBlocked) {
    throw new AppError(403, 'User is Blocked');
  }
  // ckecking password
  const isPasswordMached = await User.isPasswordCorrect(
    payload.password,
    user.password,
  );
  if (!isPasswordMached) {
    throw new AppError(401, 'Invalid Credentials');
  }
  // send Access and Refresh token
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_secret as string, {
    expiresIn: '10d',
  });
  return { accessToken };
};

export const AuthServices = {
  loginUser,
};
