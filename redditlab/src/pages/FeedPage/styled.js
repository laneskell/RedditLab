import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import { primaryColorNigth } from "../../constants/colors";



export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  margin-bottom: 2vh;
  overflow:auto;

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
 @media (max-width: 600px) {
display:none;
  }
`;

export const ContainerFeed = styled.div`
 display:grid;
 grid-template-columns:1fr 4fr 3fr;
 @media (max-width: 600px) {
  grid-template-columns:1fr 5fr;
  }
`;


export const StyledCarousel = styled.div`
  height:42vh;

`;

export const ContainerChangeTheme = styled.div`
  width:16vw;
  height:2vh;
  display:flex;
  align-items:center;

`;
export const ContainerSeach = styled.div`
background-color:${primaryColorNigth};
width:100%;
height:100%;
animation: mymove 1.5s;
::after{
  @keyframes mymove {
  100%{
      transform: translateX();
      opacity: 1;
    }
  0%{
      transform: translateX(-600px)  translateY(0);
      opacity: 0.4;
  }
}}

`;
