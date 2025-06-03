import { ClientSession } from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/appError';
import User from '../user/user.model';
import { IAuth, IJwtPayload } from './auth.interface';
import { createToken, verifyToken } from './auth.utils';
import config from '../../config';
import mongoose from 'mongoose';
import { StringValue } from 'ms';
import { Secret } from 'jsonwebtoken';

const loginUser = async (payload: IAuth) => {
  const { username, password,rememberMe } = payload;
  const user = await User.findOne({ username });
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found!');
  }
  if (!(await User.isPasswordMatched(password, user.password))) {
    throw new AppError(StatusCodes.FORBIDDEN, 'Password does not match');
  }

  const jwtPayload: IJwtPayload = {
    userId: user._id.toString(),
    username: user.username as string,
    
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as Secret,
    rememberMe ? '7d' : '30m',
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as Secret,
    config.jwt_refresh_expires_in as StringValue,
  );

  return {
    accessToken,
    refreshToken,
  };
};



export const AuthService = {
  loginUser,
  
};
