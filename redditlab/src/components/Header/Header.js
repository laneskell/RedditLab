import React, { useEffect, useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { ContainerLogout, StyledToolbar } from "./styled";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import Switches from "../../pages/FeedPage/onNigth";
import SwitchesSize from "../../pages/FeedPage/onNigth";
import { Avatar, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {
  const history = useHistory();
  const {
    rightButtonText,
    setRightButtonText,
    token,
    search,
    setSearch,
    containerSearch,
    setContainerSearch,
  } = useContext(GlobalStateContext);
  const toggleChecked = props.toggleChecked;
  const toggleCheckedLigth = props.toggleCheckedLigth;
  const checked = props.checked;

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
  }, [token, setRightButtonText, props.checked]);

  const username = window.localStorage.getItem("username");

  const toggleStateContainerSearch = () => {
    containerSearch ? setContainerSearch(false) : setContainerSearch(true);
  };
  return (
    <AppBar position='static'>
      <StyledToolbar>
        <div>
          <Button onClick={() => goToFeed(history)} color='inherit'>
            LabEddit
          </Button>
          {!containerSearch && (
            <IconButton color='inherit' onClick={toggleStateContainerSearch}>
              <MenuIcon  />
            </IconButton>
          )}
        </div>
        <SwitchesSize
          checked={checked}
          toggleChecked={toggleChecked}
          toggleCheckedLigth={toggleCheckedLigth}
        />
        <div>
          <ContainerLogout>
            <Avatar /> {username && <> {username.toLocaleUpperCase()} </>}
            <Button onClick={rightButtonAction} color='inherit'>
              {rightButtonText}{" "}
            </Button>
          </ContainerLogout>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
