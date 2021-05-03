import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import NightsStay from "@material-ui/icons/NightsStay";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import { StyledButtonTheme, StyledFormGroup } from "./styled";

export default function SwitchesSize(props) {
  const refreshPage = () => {
    props.toggleChecked();
  };

  return (
    <StyledButtonTheme>
      <StyledFormGroup onClick={refreshPage}>
        <FormControlLabel
          checked={props.checked === true}
          control={<Switch />}
        />
        {!props.checked ? (
          <NightsStay color='disabled' />
        ) : (
          <WbSunnyRoundedIcon color='disabled' />
        )}
      </StyledFormGroup>
    </StyledButtonTheme>
  );
}
