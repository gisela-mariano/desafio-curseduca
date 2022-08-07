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
  setIsInRegisterPage: Dispatch<SetStateAction<boolean>>
}