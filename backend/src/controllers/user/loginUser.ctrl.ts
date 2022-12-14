import { Request, Response } from 'express';
import AppError from '../../errors/AppError';
import { ILoginUser } from '../../interfaces/user.interface';
import loginUserService from '../../services/user/loginUser.srvc';

const LoginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password }: ILoginUser = req.body;

    const token = await loginUserService({email, password});

    return res.status(200).json(token)
  } catch (err) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default LoginUserController;
