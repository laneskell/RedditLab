import React, { useContext, useState } from "react";
import { InputsContainer, SignUpFormContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../constants/urls";
import { goToFeed } from "../../routes/coordinator";
import GlobalStateContext from "../../global/GlobalStateContext";
import Loader from "../../components/Loader";
import { StyledButtonBase } from "../LoginPage/styled";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const SignUpForm = () => {
  const history = useHistory();
  const [showPassWord, setPassWord] = useState("password");
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const {
    setOpenAlert,
    setAlertMsg,
    setAlertSeverity,
    loading,
    setLoading,
  } = useContext(GlobalStateContext);

  const onSubmitForm = (event) => {
    event.preventDefault();
    getSignUp(form, clear, history);
    setLoading(true);
  };
  setLoading(false)

  const handleClickShowPassword = () => {
    setPassWord(!showPassWord);
  };
  const handleMouseDownPassword = () => {
    setPassWord(!showPassWord);
  };

  const getSignUp = (body, clear, history) => {
    setLoading(true);
    axios
      .post(`${BASE_URL}/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.user.username);
        clear();
        setLoading(false);
        goToFeed(history);
      })
      .catch((err) => {
        setLoading(false);
        setAlertMsg(err.response.data.message);
        setAlertSeverity("error");
        setOpenAlert(true);
      });
  };

  return (
    <SignUpFormContainer>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={onSubmitForm}>
          <InputsContainer>
            <TextField
              name={"username"}
              aria-label="username"
              value={form.username}
              onChange={onChange}
              label={"Nome de Usuário"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              autoFocus
            />
            <TextField
              name={"email"}
              value={form.email}
              onChange={onChange}
              aria-label="email"
              label={"E-mail"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={"email"}
            />
        
            <TextField
              name={"password"}
              value={form.password}
              onChange={onChange}
              aria-label="password"
              label={"Senha"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={showPassWord ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassWord ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </InputsContainer>
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            CADASTRAR
          </Button>
        </form>
      )}
    </SignUpFormContainer>
  );
};

export default SignUpForm;
