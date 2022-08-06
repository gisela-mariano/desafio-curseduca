import { NextFunction, Request, Response } from 'express';
import { postRepository } from '../repositories/post.repository';

const verifyIfPostExists = async (req: Request,  res: Response, next: NextFunction) => {
  const id_post = req.params.id_post;

  const post = await postRepository.findOne({
    where: {
      id: id_post,
    },
  });

  if (!post) {
    return res.status(404).json({
      message: 'Post not found',
    });
  }

  next();
};

export default verifyIfPostExists;
