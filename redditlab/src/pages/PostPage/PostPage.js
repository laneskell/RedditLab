import React, { useEffect, useContext, useState } from "react";
import {
  ScreenContainer,
  PostCardContainer,
  InputsContainer,
  CommentContainer,
} from "./styled";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import BASE_URL from "../../constants/urls";
import axios from "axios";
import GlobalStateContext from "../../global/GlobalStateContext";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import CommentCard from "../../components/CommentCard/CommentCard";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import AlertModified from "../../components/Alert";
import PostCard from "../../components/PostCard/PostCard";

const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const history = useHistory();
  const [postDetails, setPostDetails] = useState({});
  const [postComments, setPostComments] = useState([]);
  const [form, onChange, clear] = useForm({ text: "" });
  const {
    loading,
    setLoading,
    currentPage,
    postsPerPage,
    setOpenAlert,
    setAlertMsg,
    setAlertSeverity,
    setCurrentPage,
  } = useContext(GlobalStateContext);

  const onSubmitForm = (event) => {
    event.preventDefault();
    newComment(form, clear, history);
  };

  const getPostDetails = () => {
    axios
      .get(`${BASE_URL}/posts/${params.id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setPostDetails(res.data.post);
        setPostComments(res.data.post.comments);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        alert("Error getting post details!");
      });
  };

  const newComment = (body, clear, history) => {
    axios
      .post(`${BASE_URL}/posts/${params.id}/comment`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        clear();
        alert(res);
        getPostDetails();
      })
      .catch((err) => {
        setAlertMsg(err.response.data.message);
        setAlertSeverity("error");
        setOpenAlert(true);
      });
  };

  useEffect(() => {
    setLoading(true);
    setCurrentPage(1);
    getPostDetails();
  }, []);

  const upvoteComment = (comment) => {
    if (comment.userVoteDirection > 0) {
      unvoteComment(comment);
    } else {
      const body = {
        direction: 1,
      };
      axios
        .put(
          `${BASE_URL}/posts/${params.id}/comment/${comment.id}/vote`,
          body,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          setAlertMsg("voted +1");
          setAlertSeverity("info");
          setOpenAlert(true);
          getPostDetails();
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const downvoteComment = (comment) => {
    if (comment.userVoteDirection < 0) {
      unvoteComment(comment);
    } else {
      const body = {
        direction: -1,
      };
      axios
        .put(
          `${BASE_URL}/posts/${params.id}/comment/${comment.id}/vote`,
          body,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          setAlertMsg("voted -1");
          setAlertSeverity("info");
          setOpenAlert(true);
          getPostDetails();
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const unvoteComment = (comment) => {
    const body = {
      direction: 0,
    };
    axios
      .put(`${BASE_URL}/posts/${params.id}/comment/${comment.id}/vote`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setAlertMsg("Took the vote");
        setAlertSeverity("info");
        setOpenAlert(true);
        getPostDetails();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const upvotePost = (post) => {
    if (post.userVoteDirection > 0) {
      unvotePost(post);
    } else {
      const body = {
        direction: 1,
      };
      axios
        .put(`${BASE_URL}/posts/${post.id}/vote`, body, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setAlertMsg("voted +1");
          setAlertSeverity("info");
          setOpenAlert(true);
          getPostDetails();
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const downvotePost = (post) => {
    if (post.userVoteDirection < 0) {
      unvotePost(post);
    } else {
      const body = {
        direction: -1,
      };
      axios
        .put(`${BASE_URL}/posts/${post.id}/vote`, body, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setAlertMsg("voted -1");
          setAlertSeverity("info");
          setOpenAlert(true);
          getPostDetails();
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const unvotePost = (post) => {
    const body = {
      direction: 0,
    };
    axios
      .put(`${BASE_URL}/posts/${post.id}/vote`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setAlertMsg("Took the vote");
        setAlertSeverity("info");
        setOpenAlert(true);
        getPostDetails();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // order list comments
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const sortComments = postComments.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });
  const currentComments = sortComments.slice(indexOfFirstPost, indexOfLastPost);

  const commentsCards = currentComments.map((comment) => {
    var date = new Date(comment.createdAt);
    return (
      <CommentCard
        key={comment.id}
        text={comment.text.toString()}
        votesCount={comment.votesCount}
        username={comment.username}
        createdAt={date.toLocaleDateString()}
        createdAtTime={date.toLocaleTimeString()}
        userVoteDirection={comment.userVoteDirection}
        onClickUpvote={() => upvoteComment(comment)}
        onClickDownvote={() => downvoteComment(comment)}
      />
    );
  });

  var date = new Date(postDetails.createdAt);

  var corlorRandom = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <ScreenContainer>
      {loading ? (
        <Loader />
      ) : (
        <PostCardContainer>
          <PostCard
            key={postDetails.id}
            color={corlorRandom()}
            title={postDetails.title}
            text={postDetails.text}
            votesCount={postDetails.votesCount}
            username={postDetails.username}
            createdAt={date.toLocaleDateString()}
            createdAtTime={date.toLocaleTimeString()}
            commentsCount={postDetails.commentsCount}
            userVoteDirection={postDetails.userVoteDirection}
            onClickUpvote={() => upvotePost(postDetails)}
            onClickDownvote={() => downvotePost(postDetails)}
          />

          <CommentContainer>
            <form onSubmit={onSubmitForm}>
              <InputsContainer>
                <TextField
                  name={"text"}
                  value={form.text}
                  onChange={onChange}
                  label={"Escreva um comentário"}
                  variant={"outlined"}
                  fullWidth
                  margin={"normal"}
                  required
                />
              </InputsContainer>
              <Button
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"primary"}
              >
                Comentar
              </Button>
            </form>
          </CommentContainer>
          <div>{commentsCards}</div>
          <Pagination totalPosts={postComments.length} />
        </PostCardContainer>
      )}

      <AlertModified />
    </ScreenContainer>
  );
};

export default PostPage;
