export interface ICreateUser{
  name: string;
  email: string;
  password: string;
}

export interface ICreateUserReturn{
  name: string;
  email: string;
  password?: string;
}

export interface ICreateUserResp{
  id: string;
  name: string;
  email: string;
}

export interface ILoginUser{
  email: string;
  password: string;
}

export interface ILoginUserResp{
  token: string;
}