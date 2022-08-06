import { Post } from '../../entities/post.entity';
import { ICreatePost, ICreatePostResp } from '../../interfaces/post.interface';
import { postRepository } from '../../repositories/post.repository';
import { userRepository } from '../../repositories/user.repository';
import jwt from 'jsonwebtoken';
import { IToken } from '../../interfaces/jwt.interface';
import { User } from '../../entities/user.entity';

const createPostService = async ({ post, token }: ICreatePost): Promise<ICreatePostResp> => {
  const splitedToken = token!.split(' ')[1];

  const decodedToken = jwt.decode(splitedToken) as IToken;

  const id_user = decodedToken.id_user;

  const user = await userRepository.findOne({
    where: {
      id: id_user,
    },
  });

  const newPost = new Post();
  newPost.post = post;
  newPost.id_user = { ...new User(), ...user };

  await postRepository.save(newPost);
  postRepository.create(newPost);

  const returnPost = {
    id: newPost.id,
    post: newPost.post,
  };

  return returnPost;
};

export default createPostService;
