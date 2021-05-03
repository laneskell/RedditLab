import React, { useContext } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPostPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import useInput from "../../hooks/useInput";
import BannerTopPosts from "../../components/bannerCards/BannerTopPosts";
import { blue } from "@material-ui/core/colors";
import Carousel from "react-elastic-carousel";
import { StyledCarousel } from "./styled";
import AddCommentIcon from "@material-ui/icons/AddComment";

const TopComments = () => {
  useProtectedPage();
  const { posts, currentPage, postsPerPage } = useContext(GlobalStateContext);
  const history = useHistory();

  const [search, setSearch] = useInput("");

  const onClickCard = (id) => {
    goToPostPage(history, id);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const sortPosts = posts.sort((a, b) => {
    return b.commentsCount - a.commentsCount;
  });

  const filteredPosts =
    sortPosts &&
    sortPosts.filter((post) => {
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

  const currentPosts =
    filteredPosts && filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const postsTopBanner =
    currentPosts &&
    currentPosts.map((post) => {
      var date = new Date(post.createdAt);
      return (
        <BannerTopPosts
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


  return (
    <StyledCarousel>
      <h3>
        {" "}
        <AddCommentIcon style={{ color: blue[500] }} /> TOP 5 - OS MAIS
        COMENTADOS
      </h3>

      <Carousel>{postsTopBanner}</Carousel>
    </StyledCarousel>
  );
};

export default TopComments;
