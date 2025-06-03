import { UserServices } from './user.service';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { IJwtPayload } from '../auth/auth.interface';


const registerUser = catchAsync(async (req, res) => {
  const result = await UserServices.registerUser(req.body);

  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: 201,
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUser(req.query);

  sendResponse(res, {
    success: true,
    message: 'User retrieve successfully',
    statusCode: 201,
    data: result,
  });
});
const getSingleUsers = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.getSingleUser(id);

  sendResponse(res, {
    success: true,
    message: 'User retrieve successfully',
    statusCode: 201,
    data: result,
  });
});

const getProfile = catchAsync(async (req, res) => {
    
  const user = req.user as IJwtPayload;

  const result = await UserServices.getProfile(user.userId);

  sendResponse(res, {
    success: true,
    message: 'User profile retrieved successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const UserControllers = {
  registerUser,
  getAllUsers,
 getProfile,
  getSingleUsers,
 
};
