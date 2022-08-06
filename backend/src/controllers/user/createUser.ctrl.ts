import { Request, Response } from 'express';
import { ICreateUser } from '../../interfaces/user.interface';
import createUserService from '../../services/user/createUser.srvc';

const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password }: ICreateUser = req.body;

    const createdUser = await createUserService({ name, email, password });

    return res.status(201).json({
      message: 'User created successfully',
      data: createdUser,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default createUserController;
