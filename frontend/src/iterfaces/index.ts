import { Dispatch, SetStateAction } from "react";
import { UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

export interface ICreateUser{
  name?: string;
  email: string;
  password: string;
}

export interface ILoginUser{
  email: string;
  password: string;
}

export interface IRegisterInput{
  icon: IconType
  placeholder: string;
  register: UseFormRegister<ICreateUser | ILoginUser>
  name: "name" | "email" | "password";
  error?: string;
  label: string;
  [x:string]: any
}

export interface IPropsInput{
  isErrored: boolean;
}

export interface IPropsState{
  setIsInRegisterPage: Dispatch<SetStateAction<boolean>>;
}

export interface IPropsStateModal{
  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  id_post: string;
}

export interface INewPost{
  username: string;
  post: string;
  id_user: string;
  id_post: string;
}

export interface ICreatedUser{
  id: string;
  name: string;
  email: string;
}

export interface ILoggedUser{
  token: string;
}

export interface IPost{
  id: string;
  post: string
}