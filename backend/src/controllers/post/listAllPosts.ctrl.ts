import { Request, Response } from "express";
import listAllPostsService from "../../services/post/listAllPosts.srvc";

const listAllPostsController = async (req: Request, res: Response) => {

  try {
    const posts = await listAllPostsService();

    return res.status(200).json({
      message: "All posts listed successfully",
      data: posts
    })

  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
}

export default listAllPostsController;

