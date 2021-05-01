import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { primaryColor, neutralColor } from "./colors";

const theme2 = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
    text: {
      primary: neutralColor,
    },
    
  },
});

const themeda = responsiveFontSizes(theme2);

export default themeda;