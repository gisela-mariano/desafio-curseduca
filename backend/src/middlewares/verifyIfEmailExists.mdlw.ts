import { NextFunction, Request, Response } from 'express';
import { userRepository } from '../repositories/user.repository';

const verifyIfEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;

  const user = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (user) {
    return res.status(400).json({
      message: 'Email already registred',
    });
  }

  next();
};

export default verifyIfEmailExistsMiddleware;
