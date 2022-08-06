import { Request, Response } from "express";
import AppError from "../../errors/AppError";
import deletePostService from "../../services/post/deletePost.srvc";

const deletePostController = async (req: Request, res: Response) => {

  try {
    const postId = req.params.id_post;

    await deletePostService({postId});

    return res.status(200).json({
      message: "Post deleted successfully"
    })

  } catch (err) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default deletePostController;