import { AppDataSource } from '../../data-source';
import { Post } from '../../entities/post.entity';
import { User } from '../../entities/user.entity';
import { IListPostResp } from '../../interfaces/post.interface';
import { postRepository } from '../../repositories/post.repository';
import { userRepository } from '../../repositories/user.repository';

const listAllPostsService = async (): Promise<IListPostResp[]> => {
  const posts = await userRepository.createQueryBuilder('user')
    .innerJoin("user.posts", "post", "post.id_user = user.id")
    .select(["user.name", "post"])
    .getMany();

  return posts;
};

export default listAllPostsService;
