import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { PostContainer, ScreenContainer } from "./styled";
import CreatePostForm from "./CreatePostForm";
import Typography from "@material-ui/core/Typography";

const CreatePostPage = () => {
  useProtectedPage();
  return (
    <ScreenContainer>
      <PostContainer>
        <Typography
          gutterBottom
          variant={"h4"}
          align={"center"}
          color={"textPrimary"}
        >
          Add new post
        </Typography>
        <CreatePostForm />
      </PostContainer>
    </ScreenContainer>
  );
};

export default CreatePostPage;
