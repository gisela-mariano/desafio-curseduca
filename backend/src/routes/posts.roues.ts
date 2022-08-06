import { Request, Response, Router } from 'express';
import createPostController from '../controllers/post/createPost.ctrl';
import listAllPostsController from '../controllers/post/listAllPosts.ctrl';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.mdlw';

const postRouter = Router();

postRouter.post('', verifyAuthTokenMiddleware, createPostController);
postRouter.get('', verifyAuthTokenMiddleware, listAllPostsController);

export default postRouter;
