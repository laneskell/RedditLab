import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { InputsContainer, AddPostFormContainer } from "./styled";
import useForm from "../../hooks/useForm";
import BASE_URL from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import axios from "axios";
import Loader from "../../components/Loader";
import { useHistory } from "react-router-dom";
import AlertModified from "../../components/Alert";
import Carousel from "react-elastic-carousel";

const AddRecipeForm = () => {
  const [form, onChange, clear] = useForm({ text: "", title: "" });
  const {
    loading,
    setLoading,
    setAlertMsg,
    setAlertSeverity,
    setOpenAlert,
    createPost,
    setCreatePost,
  } = useContext(GlobalStateContext);

  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    newPost(form, clear, history);
    setLoading(true);
  };

  const newPost = (body, clear, history) => {
    axios
      .post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        clear();
        setLoading(false);
        setAlertMsg("Post created successfully");
        setAlertSeverity("success");
        setOpenAlert(true);
        setCreatePost(false)
      })
      .catch((err) => {
        setAlertMsg(err.response.data.message);
        setLoading(false);
        setAlertSeverity("error");
        setOpenAlert(true);
      });
  };


  return (
    <div>
      {loading ? (
       
        <div>Carregando ...</div>
      ) : (
        <form onSubmit={onSubmitForm}>
          <AddPostFormContainer>
            <h3>O que você quer compartihar hoje?</h3>
            <InputsContainer>
              <TextField
                name={"title"}
                aria-label="title for post"
                value={form.title}
                onChange={onChange}
                label={"Title"}
                variant={"outlined"}
                fullWidth
                required
                autoFocus
                margin={"normal"}
              />
              <TextField
                name={"text"}
                aria-label="text for post"
                value={form.text}
                onChange={onChange}
                label={"Text"}
                variant={"outlined"}
                fullWidth
                required
                margin={"normal"}
              />
            </InputsContainer>
            <Button
              color={"primary"}
              variant={"contained"}
              type={"submit"}
              fullWidth
            >
              <>Postar</>
            </Button>
          </AddPostFormContainer>
        </form>
      )}

      <AlertModified />
    </div>
  );
};

export default AddRecipeForm;
