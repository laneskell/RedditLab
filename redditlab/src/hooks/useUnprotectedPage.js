
import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtectedLog = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = window.localStorage.getItem("token");

    if (!token) {
      history.push("/login");
    } else {
      history.push("/");
    }
  }, [history]);
};