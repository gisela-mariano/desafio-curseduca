import { AppDataSource } from "../data-source";
import { Post } from "../entities/post.entity";

export const postRepository = AppDataSource.getRepository(Post);
