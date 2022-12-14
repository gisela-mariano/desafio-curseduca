import { ICreatePostResp, IEditPost } from "../../interfaces/post.interface";
import { postRepository } from "../../repositories/post.repository";

const editPostService = async ({postId, newPost}: IEditPost): Promise<ICreatePostResp> => {

  const editedPost = await postRepository.createQueryBuilder()
    .update({post: newPost})
    .where({id: postId})
    .returning(['id', 'post'])
    .execute()

  return editedPost.raw[0];
}

export default editPostService;