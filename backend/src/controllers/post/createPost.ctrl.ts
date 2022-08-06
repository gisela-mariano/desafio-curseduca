import { Request, Response } from "express";
import createPostService from "../../services/post/createPost.svc";

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
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
}

export default createPostController;