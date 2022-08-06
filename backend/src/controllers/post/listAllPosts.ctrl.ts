import { Request, Response } from "express";
import AppError from "../../errors/AppError";
import listAllPostsService from "../../services/post/listAllPosts.srvc";

const listAllPostsController = async (req: Request, res: Response) => {

  try {
    const posts = await listAllPostsService();

    return res.status(200).json({
      message: "All posts listed successfully",
      data: posts
    })

  } catch (err) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        error: err.name,
        message: err.message,
      });
    }
  }
}

export default listAllPostsController;

