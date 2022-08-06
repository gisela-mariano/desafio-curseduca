import { User } from "../entities/user.entity";

export interface ICreatePost{
  post: string;
  token?: string;
}

export interface ICreatePostResp{
  id: string;
  post: string;
}

export interface IEditPostResp{
  postId: string;
  newPost: string;
}