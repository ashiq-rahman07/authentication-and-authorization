import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../user/user.model';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';
import { StatusCodes } from 'http-status-codes';
import config from '../../config';


const loginUser = catchAsync(async (req, res) => {
  const { remember } = req.body;
  const result = await AuthService.loginUser(req.body);
  // console.log(result)
  const { accessToken} = result;

res.cookie("token", accessToken, {
      httpOnly: true,
      secure: false, // set to true in production with HTTPS
      domain: `${config.cookie_domain}`, // ⬅️ important for cross-subdomain
      sameSite: "lax",
      maxAge: remember ? 7 * 24 * 60 * 60 * 1000 : 30 * 60 * 1000,
    });
  sendResponse(res, {
    success: true,
    message: 'User profile retrieved successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});


export const AuthControllers = {
  loginUser,
};
