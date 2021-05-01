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

const SignUpForm = () => {
  const history = useHistory();
  const [showPassWord, setPassWord] = useState("password")
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
    signUp(form, clear, history);
    setLoading(true);
  };

  const showPassWordInput = () => {
    showPassWord === "password" ? setPassWord ("text") :
     setPassWord ("password")
   }

  const signUp = (body, clear, history) => {
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
              value={form.username}
              onChange={onChange}
              label={"Username"}
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
              label={"E-mail"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={"email"}
            />
              <StyledButtonBase  onClick={showPassWordInput} >Mostrar senha</StyledButtonBase>
            <TextField
              name={"password"}
              value={form.password}
              onChange={onChange}
              label={"Password"}
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
            Sign Up
          </Button>
        </form>
      )}
    </SignUpFormContainer>
  );
};

export default SignUpForm;
