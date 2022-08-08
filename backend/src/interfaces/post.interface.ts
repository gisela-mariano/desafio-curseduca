import { User } from "../entities/user.entity";

export interface ICreatePost{
  post: string;
  token?: string;
}

export interface ICreatePostResp{
  id: string;
  post: string;
}

export interface IListPostResp{
  id: string;
  name: string;
  posts: ICreatePostResp[];
}

export interface IEditPost{
  postId: string;
  newPost: string;
}

export interface IDeletePost{
  postId: string;
}