import React, { useContext, useState } from "react";
import {
  InputsContainer,
  LoginFormContainer,
  StyledButtonBase,
} from "./styled";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../constants/urls";
import { goToFeed } from "../../routes/coordinator";
import GlobalStateContext from "../../global/GlobalStateContext";
import Loader from "../../components/Loader";

const LoginForm = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [showPassWord, setPassWord] = useState("password");
  const {
    setOpenAlert,
    setAlertMsg,
    setAlertSeverity,
    setRightButtonText,
    loading,
    setLoading,
  } = useContext(GlobalStateContext);
  setLoading(false)
  const onSubmitForm = (event) => {
    event.preventDefault();
    getLogin(form, clear, history);
    setLoading(true);
  };

  const showPassWordInput = () => {
    showPassWord === "password" ? setPassWord("text") : setPassWord("password");
  };

  const getLogin = (body, clear, history) => {
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.user.username);
        setLoading(false);
        clear();
        goToFeed(history);
        setRightButtonText("Logout");
      })
      .catch((err) => {
        setLoading(false);
        setAlertMsg(err.response.data.message);
        setAlertSeverity("error");
        setOpenAlert(true);
      });
  };

  return (
    <LoginFormContainer>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={onSubmitForm}>
          <InputsContainer>
            <TextField
              name={"email"}
              value={form.email}
              onChange={onChange}
              label={"E-mail"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={"email"}
            />
            <StyledButtonBase onClick={showPassWordInput}>
              Mostrar senha
            </StyledButtonBase>
            <TextField
              name={"password"}
              value={form.password}
              onChange={onChange}
              label={"Senha"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={showPassWord}
            />
          </InputsContainer>

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            ENTRAR
          </Button>
        </form>
      )}
    </LoginFormContainer>
  );
};

export default LoginForm;
