import { Request, Response, Router } from 'express';
import createPostController from '../controllers/post/createPost.ctrl';
import editPostController from '../controllers/post/editPost.ctrl';
import listAllPostsController from '../controllers/post/listAllPosts.ctrl';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.mdlw';
import verifyIfPostExists from '../middlewares/verifyIfPostExists.mdlw';

const postRouter = Router();

postRouter.post('', verifyAuthTokenMiddleware, createPostController);
postRouter.get('', verifyAuthTokenMiddleware, listAllPostsController);
postRouter.patch('/:id_post', verifyAuthTokenMiddleware, verifyIfPostExists, editPostController);

export default postRouter;
