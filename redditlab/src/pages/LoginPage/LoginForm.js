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
import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const LoginForm = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [showPassWord, setPassWord] = useState(true);
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

  const handleClickShowPassword = () => {
    setPassWord(!showPassWord);
  };
  const handleMouseDownPassword = () => {
    setPassWord(!showPassWord);
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
              aria-label="email"
              value={form.email}
              onChange={onChange}
              label={"E-mail"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={"email"}
            />
   
            <TextField
              name={"password"}
              aria-label="password"
              value={form.password}
              onChange={onChange}
              label={"Senha"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={!showPassWord ? "text" : "password"}
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
            <h3>ENTRAR</h3>
          </Button>
        </form>
      )}
    </LoginFormContainer>
  );
};

export default LoginForm;
