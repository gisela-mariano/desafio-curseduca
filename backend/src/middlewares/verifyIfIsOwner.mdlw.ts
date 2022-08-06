import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Post } from "../entities/post.entity";
import { User } from "../entities/user.entity";
import { IToken } from "../interfaces/jwt.interface";
import { postRepository } from "../repositories/post.repository";
import { userRepository } from "../repositories/user.repository";

const verifyIfIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  const splitedToken = token!.split(" ")[1];

  const decodedToken = jwt.decode(splitedToken) as IToken;

  const id_user = decodedToken.id_user;

  const id_post = req.params.id_post;

  const userPost = await userRepository.createQueryBuilder("user")
    .innerJoinAndSelect("user.posts", "post", "post.id = :id_post", {id_post})
    .where("post.id_user = :id_user", {id_user})
    .getOne();
  
  if(!userPost){

    return res.status(401).json({
      message: "Unauthorized",
    })
  }
  
  next()
};

export default verifyIfIsOwnerMiddleware;