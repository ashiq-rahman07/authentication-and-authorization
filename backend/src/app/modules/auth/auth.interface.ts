export interface IAuth {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export interface IJwtPayload {
  userId: string;
  username: string;
  
}
