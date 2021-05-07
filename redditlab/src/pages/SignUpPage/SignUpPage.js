import React from "react";
import { ScreenContainer, LogoImage } from "./styled";
import logo from "../../assets/images/logo.png";
import SignUpForm from "./SignUpForm";
import AlertModified from "../../components/Alert";
import { goToPreviousPage } from "../../routes/coordinator";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {

  const history = useHistory();
  return (
    <ScreenContainer>
      <LogoImage src={logo} alt="logo labReddit, é um robô fofinho em dois tons de  azul, com texto Labeddit" />
      <SignUpForm />
      <Button
        type={"submit"}
        variant={"text"}
        color={"primary"}
        onClick={() => goToPreviousPage(history)}
      >
        <h3>Voltar</h3>
      </Button>
      <AlertModified />
    </ScreenContainer>
  );
};

export default SignUpPage;
