import React, { useEffect } from "react";
import Router from "./routes/Router";
import { ThemeProvider } from "@material-ui/core/styles";
import light from "./constants/light";
import nigth from "./constants/Nigth";
import theme from "./constants/theme";
import GlobalState from "./global/GlobalState";
import GlobalStyle from './global/global'
import { blue } from "@material-ui/core/colors";

const App = () => {
  const [checked, setChecked] = React.useState();

  useEffect(() => {
   
  }, [checked]);

 

  const toggleChecked = () => {
    !checked ? setChecked(true) : setChecked(false)
  return 
  };
  console.log(theme)

  console.log(checked, "trocou")
  
  return (
    
    <ThemeProvider theme={ !checked ? theme : nigth }>
      <GlobalStyle/>
      <GlobalState >
        
        <Router checked={checked} toggleChecked={toggleChecked}/>
      </GlobalState>
    </ThemeProvider>
    
  );
};

export default App;
