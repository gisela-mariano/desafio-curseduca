import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaUserAlt, FaEnvelope, FaKey } from 'react-icons/fa';

import InputComponent from '../input';
import { ICreateUser, IPropsState } from '../../iterfaces';
import { StyleContainer } from './style';
import { schemaRegister } from '../../schemas';

const FormRegister = ({setIsInRegisterPage}: IPropsState) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUser>({
    resolver: yupResolver(schemaRegister),
  });

  const onSubmit = (data: ICreateUser) => {
    console.log(data);
  };

  // const handleSwithPage =() => {

  //   setIsInRegisterPage(false)
  // }

  return (
    <>
      <StyleContainer>
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            icon={FaUserAlt}
            placeholder='Insira seu nome'
            register={register}
            name='name'
            error={errors.name && errors.name.message}
            label= "Nome"
          />
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
            <button type='submit'>Cadastrar-se</button>

            <button onClick={() => setIsInRegisterPage(false)}>Logar-se</button>
          </div>
        </form>
      </StyleContainer>
    </>
  );
};

export default FormRegister;
