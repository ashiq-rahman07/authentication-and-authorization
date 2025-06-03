import { IUser} from './user.interface';
import User from './user.model';
import AppError from '../../errors/appError';
import { StatusCodes } from 'http-status-codes';

import { IJwtPayload } from '../auth/auth.interface';


const registerUser = async (userData: IUser) => {
 const { username, password, shopNames } = userData;

  if (!username || !password || !Array.isArray(shopNames) || shopNames.length < 3) {
   throw new AppError(StatusCodes.BAD_REQUEST, 'Please provide all fields and 3+ shop names');
    // return res.status(400).json({ message: 'Please provide all fields and 3+ shop names' });
  }

  // if (!isStrongPassword(password)) {
  //   return res.status(400).json({ message: 'Password must be 8+ chars, 1 number, 1 special char' });
  // }

  const existingShops = await User.findOne({ shopNames: { $in: shopNames } });
  if (existingShops) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'One or more shop names already exist');
    // return res.status(400).json({ message: 'One or more shop names already exist' });
  }
  const newUser = User.create(userData);
  return newUser;
};

const getAllUser = async (query: any) => {
  const { page = 1, limit = 10 } = query;
  const skip = (page - 1) * limit; 
  const users = await User.find()
    .skip(skip)
    .limit(Number(limit))
    .select('-password'); // Exclude password field from the result
  const totalUsers = await User.countDocuments();
  const totalPages = Math.ceil(totalUsers / limit);
  return {
    users,
    totalUsers,
    totalPages,
    currentPage: Number(page),
  };
}

const getSingleUser = async (id: string) => {
  const user = User.findById(id);

  return user;
};

// const deleteUser = async (id:string) => {
//    const user = User.findOneAndDelete({id})

//   return user
// };

 const getProfile = async (userId:string) => {
  
  const user = await User.findById(userId).select('-password');
  // Exclude password field from the result
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }
  return user;
  
};

export const UserServices = {
  registerUser,
  getAllUser,
  getProfile,
  getSingleUser,
 
};
