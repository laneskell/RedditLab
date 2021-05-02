import React, { useContext } from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import NightsStay from "@material-ui/icons/NightsStay";
import { Route } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Box, IconButton } from "@material-ui/core";
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import { StyledButtonTheme, StyledFormGroup } from "./styled";

export default function SwitchesSize(props) {
  const refreshPage = () => {
    props.toggleChecked()
    window.location.reload();
  };

  return (
    <StyledButtonTheme>

      <IconButton onClick={refreshPage} >
        <WbSunnyRoundedIcon color="disabled"/>
      </IconButton>
 <StyledFormGroup>
     
        <FormControlLabel
          checked={props.checked === true}
          control={<Switch />}
        />
        <NightsStay color="disabled" onClick={props.toggleChecked} />
      </StyledFormGroup>
    </StyledButtonTheme>
  );
}
