import React from "react";
import { ScreenContainer, SignUpButtonContainer, LogoImage } from "./styled";
import logo from "../../assets/images/logo.png";
import Button from "@material-ui/core/Button";
import LoginForm from "./LoginForm";
import { goToSignUp } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

import AlertModified from "../../components/Alert";
import { useProtectedLog } from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
useProtectedLog()
  const history = useHistory();

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          onClick={() => goToSignUp(history)}
        >
          INSCREVA-SE
        </Button>
      </SignUpButtonContainer>
      <AlertModified />
    </ScreenContainer>
  );
};

export default LoginPage;
