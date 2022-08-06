import { ICreatePostResp } from '../../interfaces/post.interface';
import { postRepository } from '../../repositories/post.repository';

const listAllPostsService = async (): Promise<ICreatePostResp[]> => {
  const posts = await postRepository.find({
    select: {
      id: true,
      post: true,
    },
  });

  return posts;
};

export default listAllPostsService;
