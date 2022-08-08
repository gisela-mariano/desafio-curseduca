import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaEnvelope, FaKey } from 'react-icons/fa';

import InputComponent from '../input';
import { ILoggedUser, ILoginUser, IPropsState } from '../../iterfaces';
import { StyleContainer } from './style';
import { schemaLogin } from '../../schemas';
import { apiAccess } from '../../services';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const FormLogin = ({setIsInRegisterPage}: IPropsState) => {

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = (data: ILoginUser) => {
    
    apiAccess
      .post("/users/login", JSON.stringify(data))
      .then((res) => handleSuccessLogin(res.data.token))
      .catch((_) => toast.error("Email ou senha inválidos."))
  };

  const handleSuccessLogin = (token: ILoggedUser) => {

    localStorage.setItem("userData", JSON.stringify({token}));

    history.push('/dashboard')
  }

  return (
    <>
      <StyleContainer>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            icon={FaEnvelope}
            placeholder='Insira seu nome'
            register={register}
            name='email'
            error={errors.email && errors.email.message}
            label= "Email"
            type='email'
          />
          <InputComponent
            icon={FaKey}
            placeholder='Insira sua senha'
            register={register}
            name='password'
            error={errors.password && errors.password.message}
            label= "Senha"
            type='password'
          />

          <div className='cont-buttons'>
            <button type='submit'>Logar-se</button>

            <button onClick={() => setIsInRegisterPage(true)}>Cadastrar-se</button>
          </div>
        </form>
      </StyleContainer>
    </>
  );
};

export default FormLogin;
