export interface IAuth {
  username: string;
  password: string;
  rememberMe?: string ;
}

export interface IJwtPayload {
  userId: string;
  username: string;
  
}
