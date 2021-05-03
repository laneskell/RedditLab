import React, { useEffect, useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { ContainerLogout, PopperStyled, StyledToolbar } from "./styled";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import SwitchesSize from "../../pages/FeedPage/onNigth";
import { Avatar, IconButton, Popper } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Header = (props) => {
  const history = useHistory();
  const {
    rightButtonText,
    setRightButtonText,
    token,
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

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
              <MenuIcon />
            </IconButton>
          )}
        </div>
        <SwitchesSize
          checked={checked}
          toggleChecked={toggleChecked}
          toggleCheckedLigth={toggleCheckedLigth}
        />
        <div>
          <ContainerLogout onClick={handleClick}>
            <Avatar />{" "}
            {username && (
              <>
                {" "}
                {username.toLocaleUpperCase()} <ExpandMoreIcon />{" "}
              </>
            )}
          </ContainerLogout>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <PopperStyled onClick={rightButtonAction} color='secundary'>
              {rightButtonText}{" "}
            </PopperStyled>
          </Popper>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
