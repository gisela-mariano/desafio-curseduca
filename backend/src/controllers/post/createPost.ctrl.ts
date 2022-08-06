import { Request, Response } from "express";
import AppError from "../../errors/AppError";
import createPostService from "../../services/post/createPost.srvc";

const createPostController = async (req: Request, res: Response) => {

  try {
    const post = req.body.post;
    const token = req.headers.authorization;

    const createdPost = await createPostService({post, token})

    return res.status(201).json({
      message: "Post created successfully",
      data: createdPost
    });
  } catch (err) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        error: err.name,
        message: err.message,
      });
    }
  }
}

export default createPostController;