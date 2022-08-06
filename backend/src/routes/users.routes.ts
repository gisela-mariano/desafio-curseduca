import { Request, Response, Router } from 'express';
import createUserController from '../controllers/user/createUser.ctrl';

const userRouter = Router();

userRouter.post('', createUserController);
userRouter.get('', (req:Request, res: Response) => res.status(200).json({ala: "foi"}));

export default userRouter;
