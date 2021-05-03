import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 5vh;
`;
export const PostCardContainer = styled(Card)`
  width: 65vw;
  @media screen and (max-width: 992px) {
    width: 85vw;
  }

  @media screen and (max-width: 600px) {
    width: 95vw;
  }
  margin: 10px;
  padding-bottom: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  align-items: center;
  margin-bottom: 20px;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;
