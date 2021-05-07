import React from "react";
import { ScreenContainer, SignUpButtonContainer, LogoImage } from "./styled";
import logo from "../../assets/images/logo.png";
import Button from "@material-ui/core/Button";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import AlertModified from "../../components/Alert";
import { goToSignUp } from "../../routes/coordinator";
import { useProtectedLog } from "../../hooks/useUnprotectedPage";


const LoginPage = () => {
  const history = useHistory();
  useProtectedLog()
  return (
    <ScreenContainer>
      <LogoImage src={logo} alt="logo labReddit, é um robô fofinho em dois tons de  azul, com texto Labeddit"  />
      <LoginForm />
      <SignUpButtonContainer>
        <Button
         onClick={() => goToSignUp(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
         >
          <h3>INSCREVA-SE</h3>
        </Button>
      </SignUpButtonContainer>
      <AlertModified />
    </ScreenContainer>
  );
};

export default LoginPage;
