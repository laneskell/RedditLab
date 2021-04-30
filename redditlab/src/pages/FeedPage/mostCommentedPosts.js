

import React, { useEffect, useContext } from "react";
import {
  ScreenContainer,
  PostsContainer,
  AddPostButton,
  InputDiv,
  StyledCarousel,
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
import { Add } from "@material-ui/icons";
import AlertModified from "../../components/Alert";
import useInput from "../../hooks/useInput";
import TextField from "@material-ui/core/TextField";
import BannerTopPosts from "../../components/bannerCards/BannerTopPosts";
import Carousel from "react-elastic-carousel";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { blue } from "@material-ui/core/colors";

const TopPosts = () => {
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const sortPosts = posts.sort((a, b) => {
    return b.votesCount - a.votesCount;
  });


  const filteredPosts = sortPosts && sortPosts.filter((post) => {
    const titlePost = post.title.toLowerCase();
    const textPost = post.text.toLowerCase();
    const userPost = post.username.toLowerCase();
    if (
      titlePost.includes(search.toLowerCase()) ||
      textPost.includes(search.toLowerCase()) ||
      userPost.includes(search.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  const currentPosts = filteredPosts &&  filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const postsTopBanner = currentPosts && currentPosts.map((post) => {
    var date = new Date(post.createdAt);
    return (
      < BannerTopPosts 
        key={post.id}
        title={post.title}
        votesCount={post.votesCount}
        username={post.username}
        text={post.text}
        createdAt={date.toLocaleDateString()}
        createdAtTime={date.toLocaleTimeString()}
        commentsCount={post.commentsCount}
        userVoteDirection={post.userVoteDirection}
        onClickCard={() => onClickCard(post.id)}
      
      />
    );
  });
  console.log(postsTopBanner)

  return(
    <StyledCarousel> 
        <h3> <ArrowUpwardIcon style={{ color: blue[500] }} /> TOP 10</h3>
          <Carousel   >
          {postsTopBanner}
          </Carousel>

   </StyledCarousel>
  )

}

export default TopPosts;