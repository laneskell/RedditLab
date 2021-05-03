import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import {
  neutralColorNigth,
  primaryColorNigth,
  contrastColorTextNigth,
  backgroundColorNigth,
  backgroundColorCardNigth,
  secundaryColorTextNigth,
} from "./colors";

const theme2 = createMuiTheme({
  palette: {
    primary: {
      main: primaryColorNigth,
      contrastText: contrastColorTextNigth,
    },
    background: {
      default: backgroundColorNigth,
      paper: backgroundColorCardNigth,
    },
    text: {
      primary: neutralColorNigth,
      secondary: secundaryColorTextNigth,
    },
    action: {
      disabled: "white",
    },
  },
});

const themeda = responsiveFontSizes(theme2);

export default themeda;
