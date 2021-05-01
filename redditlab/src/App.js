import React from "react";
import Router from "./routes/Router";
import { ThemeProvider } from "@material-ui/core/styles";
import light from "./constants/light";
import theme from "./constants/theme";
import GlobalState from "./global/GlobalState";
import GlobalStyle from './global/global'
import { blue } from "@material-ui/core/colors";

const App = () => {
  const [checked, setChecked] = React.useState(false);

  console.log(checked, "chega?")

  const toggleChecked = () => {
    !checked && setChecked(true) 
  return 
  };
  const isTheme = !checked ? theme : light
  console.log(checked, "trocou")
  console.log(isTheme, "tema")
  return (
    
    <ThemeProvider theme={ isTheme }>
      <GlobalStyle/>
      <GlobalState >
        
        <Router checked={checked} toggleChecked={toggleChecked}/>
      </GlobalState>
    </ThemeProvider>
    
  );
};

export default App;
