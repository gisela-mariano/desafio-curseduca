import { hash } from 'bcryptjs';
import { User } from '../../entities/user.entity';
import { ICreateUser, ICreateUserReturn } from '../../interfaces/user.interface';
import { userRepository } from '../../repositories/user.repository';

const createUserService = async ({ name, email, password }: ICreateUser): Promise<ICreateUserReturn> => {

  const hashedPassowrd = await hash(password, 10);

  const newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.password = hashedPassowrd;

  userRepository.create(newUser);
  await userRepository.save(newUser);

  const data: ICreateUserReturn = {...newUser}
  delete data.password

  return data;
};

export default createUserService;
