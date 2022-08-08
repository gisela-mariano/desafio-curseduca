import { Request, Response, Router } from 'express';
import createPostController from '../controllers/post/createPost.ctrl';
import deletePostController from '../controllers/post/deletePost.ctrl';
import editPostController from '../controllers/post/editPost.ctrl';
import listAllPostsController from '../controllers/post/listAllPosts.ctrl';
import schemaValidationMiddleware from '../middlewares/schemaValidation.midlw';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.mdlw';
import verifyIfIsOwnerMiddleware from '../middlewares/verifyIfIsOwner.mdlw';
import verifyIfPostExists from '../middlewares/verifyIfPostExists.mdlw';
import postSchema from '../schemas/post.schema';

const postRouter = Router();

postRouter.post('', schemaValidationMiddleware(postSchema), verifyAuthTokenMiddleware, createPostController);
postRouter.get('', verifyAuthTokenMiddleware, listAllPostsController);
postRouter.patch('/:id_post', schemaValidationMiddleware(postSchema), verifyAuthTokenMiddleware, verifyIfPostExists, verifyIfIsOwnerMiddleware, editPostController);
postRouter.delete('/:id_post', verifyAuthTokenMiddleware, verifyIfPostExists, verifyIfIsOwnerMiddleware, deletePostController);

export default postRouter;
