import { Request, Response } from "express";
import editPostService from "../../services/post/editPost.srvc";

const editPostController = async (req: Request,  res: Response) => {

  try {
    
    const newPost = req.body.post;
    const postId = req.params.id_post;

    const editedPost = await editPostService({newPost, postId});

    return res.status(200).json({
      message: "Post updated successfully",
      data: editedPost
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

export default editPostController;