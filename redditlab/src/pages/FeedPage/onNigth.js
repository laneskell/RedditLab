  import React, { useContext } from 'react';
  import Switch from '@material-ui/core/Switch';
  import FormGroup from '@material-ui/core/FormGroup';
  import FormControlLabel from '@material-ui/core/FormControlLabel';
  import NightsStay from "@material-ui/icons/NightsStay";
import { Route } from 'react-router';
import GlobalStateContext from '../../global/GlobalStateContext';
  
  export default function SwitchesSize(props) {

  
    

    return (
      <FormGroup >
        
        
        <FormControlLabel 
           
        control={<Switch  onChange={props.toggleChecked}  />}
         
        /> 
         <NightsStay/>
      </FormGroup>
    );
  }
