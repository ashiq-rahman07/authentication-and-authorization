import { Model } from "mongoose";


// User Schema Definition
export interface IUser extends Document {
  username: string;
  password: string;
  shopNames: string[];
}

export interface UserModel extends Model<IUser> {
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
checkUserExist(userId: string): Promise<IUser>;
}
