import { ILoginUser, ILoginUserResp } from "../../interfaces/user.interface"
import { userRepository } from "../../repositories/user.repository"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

const loginUserService = async ({email, password}: ILoginUser): Promise<ILoginUserResp> => {

  const user = await userRepository.findOne({
    where: {
      email: email
    }
  });

  if(!user){
    throw new Error("User not found")
  }

  const passwordMatch = bcryptjs.compareSync(password, user.password)

  if (!passwordMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({name: user.name, email: user.email, id_user: user.id}, String(process.env.JWT_SECRET), {expiresIn: '24h'});

  return {token};
}

export default loginUserService;