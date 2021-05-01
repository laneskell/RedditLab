import React, { useEffect, useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import Switches from "../../pages/FeedPage/onNigth";
import SwitchesSize from "../../pages/FeedPage/onNigth";
import { Avatar } from "@material-ui/core";

const Header = (props) => {
  const history = useHistory();
  const { rightButtonText, setRightButtonText, token } = useContext(
    GlobalStateContext
  );
 const  toggleChecked = props.toggleChecked

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  useEffect(() => {
    if (token) {
      setRightButtonText("Logout");
    } else {
      setRightButtonText("Login");
    }
  }, [token, setRightButtonText]);

  const username = window.localStorage.getItem("username");

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeed(history)} color="inherit">
          LabEddit
        </Button>
        <SwitchesSize toggleChecked={toggleChecked} />
        <div>
        <div><Avatar/> {username && <>  {username.toLocaleUpperCase()} </>}</div>
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
