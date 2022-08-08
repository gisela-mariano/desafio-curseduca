import { StyleContainer } from "./style";
import logo from "../../assets/imgs/full-logo.svg"
import { useState } from "react";
import FormRegister from "../../components/formRegister";
import FormLogin from "../../components/formLogin";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {

  const [isInRegisterPage, setIsInRegisterPage] = useState(true);

  const history = useHistory();

  if(!!JSON.parse(localStorage.getItem('userData')!)){

    history.push('/dashboard')
  }

  return (
    <>
      <StyleContainer>
        <header>
          <img src={logo} alt="Logomarca Curseduca" />
        </header>

        <main>
          {
            isInRegisterPage ?
            <FormRegister setIsInRegisterPage={setIsInRegisterPage}/>
            :
            <FormLogin setIsInRegisterPage={setIsInRegisterPage}/>
          }
        </main>
      </StyleContainer>
    </>
  )
};

export default RegisterPage;