import React, { useEffect, useContext} from "react";
import {
  ScreenContainer,
  PostsContainer,
  AddPostButton,
  TopContainerPosts,
  ContainerFeed,
} from "./styled";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import BASE_URL from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import axios from "axios";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import { goToCreatePostPage, goToPostPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Add,} from "@material-ui/icons";
import AlertModified from "../../components/Alert";
import useInput from "../../hooks/useInput";
import TopPosts from "./mostCommentedPosts";
import TopComments from "./topcomments";
import {Container, CssBaseline } from "@material-ui/core";
import VerticalTabs from "./verticalTabs";

const FeedPage = () => {
  useProtectedPage();
  const {
    loading,
    setLoading,
    posts,
    setPosts,
    currentPage,
    setCurrentPage,
    postsPerPage,
    setAlertMsg,
    setAlertSeverity,
    setOpenAlert,
  } = useContext(GlobalStateContext);
  const history = useHistory();

  const [search, setSearch] = useInput("");

  const onClickCard = (id) => {
    goToPostPage(history, id);
  };

  const getPosts = () => {
    axios
      .get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setPosts(res.data.posts);
        setLoading(false);
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
          setAlertMsg("voted +1 ");
          setAlertSeverity("info");
          setOpenAlert(true);
          getPosts();
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
          getPosts();
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
        getPosts();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getPosts();
    setLoading(true);
    setCurrentPage(1);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const sortPosts = posts.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  const filteredPosts = sortPosts.filter((post) => {
    const titlePost = post.title.toLowerCase();
    const textPost = post.text.toLowerCase();
    const userPost = post.username.toLowerCase();
    if (
      (titlePost && titlePost.includes(search.toLowerCase())) ||
      (textPost && textPost.includes(search.toLowerCase())) ||
      (userPost && userPost.includes(search.toLowerCase()))
    ) {
      return true;
    } else {
      return false;
    }
  });

  var corlorRandom = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const postsCards = currentPosts.map((post) => {
    var date = new Date(post.createdAt);

    return (
      <PostCard
        key={post.id}
        color={corlorRandom()}
        title={post.title}
        votesCount={post.votesCount}
        username={post.username}
        text={post.text}
        createdAt={date.toLocaleDateString()}
        createdAtTime={date.toLocaleTimeString()}
        commentsCount={post.commentsCount}
        onClickCard={() => onClickCard(post.id)}
        userVoteDirection={post.userVoteDirection}
        onClickUpvote={() => upvotePost(post)}
        onClickDownvote={() => downvotePost(post)}
      />
    );
  });

  return (
    <Container maxWidth='gl'>
      <CssBaseline />
      <ContainerFeed>
        <div>
          <VerticalTabs search={search} setSearch={setSearch} />
        </div>
        <ScreenContainer>
          <>
            {loading ? (
              <Loader />
            ) : (
              <PostsContainer>{postsCards}</PostsContainer>
            )}

            <Pagination totalPosts={filteredPosts.length} />
            <AlertModified />
            <AddPostButton
              color={"primary"}
              onClick={() => goToCreatePostPage(history)}
            >
              <Add />
            </AddPostButton>
          </>
        </ScreenContainer>
        <TopContainerPosts>
          <TopPosts />
          <TopComments />
        </TopContainerPosts>
      </ContainerFeed>
    </Container>
  );
};

export default FeedPage;
