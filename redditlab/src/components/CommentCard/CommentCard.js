import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  CommentCardContainer,
  CommentCardContent,
  LeftContent,
  RightContent,
} from "./styled";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { blue } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";

const CommentCard = (props) => {
  return (
    <CommentCardContainer>
      <CommentCardContent>
        <LeftContent>
          <IconButton size='small' onClick={props.onClickUpvote}>
            {props.userVoteDirection > 0 && (
              <ArrowUpwardIcon fontSize='small' style={{ color: blue[500] }} />
            )}
            {props.userVoteDirection <= 0 && (
              <ArrowUpwardIcon fontSize='small' />
            )}
          </IconButton>
          <Typography align='center' variant='h6'>
            {props.votesCount}
          </Typography>
          <IconButton size='small' onClick={props.onClickDownvote}>
            {props.userVoteDirection >= 0 && (
              <ArrowDownwardIcon fontSize='small' />
            )}
            {props.userVoteDirection < 0 && (
              <ArrowDownwardIcon fontSize='small' style={{ color: red[500] }} />
            )}
          </IconButton>
        </LeftContent>
        <RightContent>
          <Typography variant='h6'>
            {props.text}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            by {props.username} at{" "}
            {`in ${props.createdAt} at ${props.createdAtTime}h`}
          </Typography>
        </RightContent>
      </CommentCardContent>
    </CommentCardContainer>
  );
};

export default CommentCard;
