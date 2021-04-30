import styled from "styled-components";
import Fab from "@material-ui/core/Fab";


export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  margin-bottom: 2vh;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;

export const AddPostButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`;

export const InputDiv = styled.div`
  width: 18vw;
  @media screen and (max-width: 400px) {
    width: 80vw;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;
export const TopContainerPosts = styled.div`
 align-items:center;
 justify-items:center;
`;
export const ContainerFeed = styled.div`
 display:grid;
 grid-template-columns:1fr 4fr 2fr;
`;


export const StyledCarousel = styled.div`
  height:42vh;

`;
