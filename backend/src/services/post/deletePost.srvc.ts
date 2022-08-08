import { IDeletePost } from "../../interfaces/post.interface";
import { postRepository } from "../../repositories/post.repository";

const deletePostService = async ({postId}: IDeletePost): Promise<boolean> => {

  await postRepository.delete({id: postId})

  return true;
};

export default deletePostService;