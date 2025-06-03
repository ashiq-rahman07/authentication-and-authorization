import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../user/user.model';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';
import { StatusCodes } from 'http-status-codes';


const loginUser = catchAsync(async (req, res) => {
 
  const result = await AuthService.loginUser(req.body);

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
