import React, { useContext } from "react";
import { PostContainer, ScreenContainer } from "./styled";
import CreatePostForm from "./CreatePostForm";
import Typography from "@material-ui/core/Typography";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import GlobalStateContext from "../../global/GlobalStateContext";
import { primaryColorNigth } from "../../constants/colors";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0",
    color: "primary",
  },
}));

const CreatePostPage = () => {
  useProtectedPage();
  const { setCreatePost } = useContext(GlobalStateContext);

  return (
    <Card
      style={{
        backgroundColor: "primary",
        width: "clamp(320px,100%,700px)",
        alignItems: "center",
        right:"0",
        position: "fixed",
        top: "65px",
        boxShadow: `inset 0 0 0.3em ${primaryColorNigth}`,
        zIndex: "100",
      }}
    >
      <ScreenContainer>
        <div>
          <IconButton color='secondary' onClick={() => setCreatePost(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <PostContainer>
          <Typography
            gutterBottom
            variant={"h4"}
            align={"center"}
            color={"textPrimary"}
          >
           
          </Typography>
          <CreatePostForm />
        </PostContainer>
      </ScreenContainer>
    </Card>
  );
};

export default CreatePostPage;
