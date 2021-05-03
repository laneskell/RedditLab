import React from "react";
import Typography from "@material-ui/core/Typography";
import { StyledCard, StyledCardActions } from "./styled";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { blue } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";
import AddCommentIcon from "@material-ui/icons/AddComment";
import { Badge } from "@material-ui/core";

const useStyles = makeStyles((theme, props) => ({
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
}));

const PostCard = (props) => {
  const classes = useStyles();
  const userName = props.username;
  const countComment = props.commentsCount;

  const count = () => {
    const countBallon = countComment && countComment;
    return countComment ? countBallon.toString() : "0";
  };

  const userFirstLetter = () => {
    const firstLetter = userName && userName.substr(0, 1);
    return userName && firstLetter.toUpperCase();
  };

  return (
    <StyledCard className={classes.root}>
      <CardHeader
        onClick={props.onClickCard}
        avatar={
          <Avatar
            style={{ backgroundColor: props.color }}
            className={classes.avatar}
          >
            {userFirstLetter()}
          </Avatar>
        }
        title={props.username}
        subheader={`in ${props.createdAt} at ${props.createdAtTime}h`}
      />

      <CardContent onClick={props.onClickCard}>
        <Typography variant='body1' color='textPrimary' component='p'>
          {props.title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {props.text}
        </Typography>
      </CardContent>
      <StyledCardActions disableSpacing>
        <div>
          <IconButton size='small' onClick={props.onClickDownvote}>
            {props.userVoteDirection >= 0 && <ArrowDownwardIcon />}
            {props.userVoteDirection < 0 && (
              <ArrowDownwardIcon style={{ color: red[500] }} />
            )}
          </IconButton>

          {props.votesCount}

          <IconButton size='small' onClick={props.onClickUpvote}>
            {props.userVoteDirection > 0 && (
              <ArrowUpwardIcon style={{ color: blue[500] }} />
            )}
            {props.userVoteDirection <= 0 && <ArrowUpwardIcon />}
          </IconButton>
        </div>

        <div>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <IconButton onClick={props.onClickCard} aria-label='show more'>
            <Badge color='secondary' badgeContent={count()}>
              <AddCommentIcon />
            </Badge>
          </IconButton>
        </div>
      </StyledCardActions>
    </StyledCard>
  );
};

export default PostCard;
