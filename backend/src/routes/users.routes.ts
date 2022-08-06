import { Request, Response, Router } from 'express';
import createUserController from '../controllers/user/createUser.ctrl';
import LoginUserController from '../controllers/user/loginUser.ctrl';

const userRouter = Router();

userRouter.post('', createUserController);
userRouter.post('/login', LoginUserController);

export default userRouter;
