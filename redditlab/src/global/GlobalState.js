import React, { useState } from "react";
import useInput from "../hooks/useInput";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState("");
  const [loading, setLoading] = useState();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [search, setSearch] = useInput("");
  const [containerSearch, setContainerSearch] = React.useState(true);

  React.useEffect(() => {
    if (window.matchMedia("(min-width:800px)").matches) {
      setContainerSearch(true);
      setPostsPerPage(5);
    } else {
      setContainerSearch(false);
      setPostsPerPage(2);
    }
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        openAlert,
        setOpenAlert,
        alertMsg,
        setAlertMsg,
        alertSeverity,
        setAlertSeverity,
        rightButtonText,
        setRightButtonText,
        token,
        loading,
        setLoading,
        posts,
        setPosts,
        currentPage,
        setCurrentPage,
        postsPerPage,
        setPostsPerPage,
        search,
        setSearch,
        containerSearch,
        setContainerSearch,
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
