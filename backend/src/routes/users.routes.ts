import { Request, Response, Router } from 'express';
import createUserController from '../controllers/user/createUser.ctrl';
import LoginUserController from '../controllers/user/loginUser.ctrl';
import schemaValidationMiddleware from '../middlewares/schemaValidation.midlw';
import userSchema from '../schemas/user.schema';

const userRouter = Router();

userRouter.post('', schemaValidationMiddleware(userSchema), createUserController);
userRouter.post('/login', LoginUserController);

export default userRouter;
