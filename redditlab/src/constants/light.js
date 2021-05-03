import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { backgroundColorNigth, primaryColorNigth } from "./colors";

const theme2 = createMuiTheme({
  palette: {
    primary: {
      main: primaryColorNigth,
      contrastText: "white",
    },
    background: {
      default: "#ffff",
      paper: "#f0f2f1",
    },
    text: {
      primary: backgroundColorNigth,
    },
  },
});

const themeda = responsiveFontSizes(theme2);

export default themeda;
