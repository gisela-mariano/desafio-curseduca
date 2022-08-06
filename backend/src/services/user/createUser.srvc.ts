import { hash } from 'bcryptjs';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { ICreateUser, ICreateUserReturn } from '../../interfaces/user.interface';

const createUserService = async ({ name, email, password }: ICreateUser) => {
  const userRepository = AppDataSource.getRepository(User);

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
