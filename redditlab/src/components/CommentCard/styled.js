import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export const CommentCardContainer = styled(Card)`
  width: 50vw;
  @media screen and (max-width: 992px) {
    width: 70vw;
  }

  @media screen and (max-width: 600px) {
    width: 85vw;
  }
  margin: 10px;
  
`;

export const CommentCardContent = styled(CardContent)`
  display: flex;
  min-height: 5vh;
`;
export const LeftContent = styled.div`
  margin-right: 50px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
