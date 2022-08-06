import { Request, Response, Router } from 'express';
import createPostController from '../controllers/post/createPost.ctrl';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.mdlw';

const postRouter = Router();

postRouter.post('', verifyAuthTokenMiddleware, createPostController);
postRouter.post('', );

export default postRouter;
