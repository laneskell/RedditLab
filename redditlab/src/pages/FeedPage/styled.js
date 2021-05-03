import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import { FormGroup } from "@material-ui/core";
import { primaryColor } from "../../constants/colors";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  margin-bottom: 2vh;
  overflow: auto;
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
  align-items: center;
  justify-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ContainerFeed = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 3fr;
  @media (max-width: 600px) {
    grid-template-columns: 1fr 5fr;
  }
`;

export const StyledCarousel = styled.div`
  height: 42vh;
`;

export const ContainerChangeTheme = styled.div`
  width: 16vw;
  height: 2vh;
  display: flex;
  align-items: center;
`;
export const ContainerSeach = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: clamp(270px, 14vw, 320px);
  margin-left: -14px;
  animation: mymove 1.5s;
  border-right: 2px solid ${primaryColor};
  ::after {
    @keyframes mymove {
      100% {
        transform: translateX();
        opacity: 0.8;
      }
      0% {
        transform: translateX(-300px) translateY(0);
        opacity: 0.2;
      }
    }
  }
  div:first-child {
    display: flex;
    justify-content: flex-end;
  }
`;

export const StyledButtonTheme = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledSelectFilter = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 700px;
  font-size: 1.2rem;
  color: gray;
  cursor: pointer;
  overflow: hidden;
  border: none;
  background-color: transparent;
  border: 0 none;
  outline: 0;
  border: none;
  option {
    margin-bottom: 16%;
    margin-top: 8%;
    :hover {
      transition: 0.6s;
      background-color: black;
      color: white;
      border: none;
    }
  }
`;
