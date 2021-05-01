import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, CardActions } from "@material-ui/core";

export const PostCardContainer = styled(Card)`
  width: 20vw;
  margin: 5%;
  @media screen and (max-width: 992px) {
    width: 80vw;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;

export const PostCardContent = styled(CardContent)`
  display: flex;
  min-height: 10vh;
  background-color: #f2f2f2;
  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;
export const LeftContent = styled.div`
  margin-right: 5%;
  margin-top: 4px;
`;

export const BannerCardContainer = styled(Card)`
  display: flex;
  justify-content: center;
`;

export const StyledCard = styled(Card)`
  margin: 1vh;
  width: clamp(350px, 34vw, 600px);
  height: 26vh;
`;
export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;
export const StyledAvatar = styled(Avatar)`
  background-color: black;
`;
export const StyledCardComments = styled(Card)`
  margin: 1vh;
  width: clamp(350px, 40vw, 800px);
  display: inline-block;
`;
export const TextCardComments = styled.div`
  padding-left: 10%;
`;

export const CounterCommentsStyle = styled.p`
  font-size: 12px;
  display: inline;
  width: 80%;
  height: 50%;
`;
export const IconVotesCounter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 8vh;
`;

export const StyledViewMore = styled.p`
  display: flex;
  justify-content: flex-end;
`;
