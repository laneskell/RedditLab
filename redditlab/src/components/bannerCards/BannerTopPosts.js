import React from "react";
import Typography from "@material-ui/core/Typography";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { blue, purple } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";
import AddCommentIcon from "@material-ui/icons/AddComment";
import {
  CounterCommentsStyle,
  StyledCard,
  StyledCardActions,
  StyledViewMore,
  BannerCardContainer,
} from "./styled";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: purple[600],
  },
}));

const BannerTopPosts = (props) => {
  const classes = useStyles();
  const userName = props.username;

  const userFirstLetter = () => {
    const firstLetter = userName && userName.substr(0, 1);
    return userName && firstLetter.toUpperCase();
  };

  return (
    <BannerCardContainer>
      <StyledCard onClick={props.onClickCard} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              {userFirstLetter()}
            </Avatar>
          }
          action={
            <div>
              <IconButton size='small'>
                {props.userVoteDirection >= 0 && <ArrowDownwardIcon />}
                {props.userVoteDirection < 0 && (
                  <ArrowDownwardIcon style={{ color: red[500] }} />
                )}
              </IconButton>

              {props.votesCount}

              <IconButton size='small'>
                {props.userVoteDirection > 0 && (
                  <ArrowUpwardIcon style={{ color: blue[500] }} />
                )}
                {props.userVoteDirection <= 0 && <ArrowUpwardIcon />}
              </IconButton>
            </div>
          }
          title={props.username}
          subheader={`in ${props.createdAt} at ${props.createdAtTime}h`}
        />

        <CardContent>
          <Typography variant='body1' color='textPrimary' component='p'>
            {props.title}
          </Typography>
          <IconButton aria-label='show more'>
            <AddCommentIcon />

            <CounterCommentsStyle>
              {props.commentsCount} comments
            </CounterCommentsStyle>
          </IconButton>
          <StyledViewMore>veja mais ...</StyledViewMore>
        </CardContent>

        <StyledCardActions disableSpacing>
          <div>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </div>
        </StyledCardActions>
      </StyledCard>
    </BannerCardContainer>
  );
};

export default BannerTopPosts;
