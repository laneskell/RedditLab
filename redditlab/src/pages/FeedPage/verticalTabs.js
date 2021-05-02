import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ContainerSeach, InputDiv } from "./styled";
import { IconButton, TextField } from "@material-ui/core";
import useInput from "../../hooks/useInput";
import CloseIcon from "@material-ui/icons/Close";
import GlobalStateContext from "../../global/GlobalStateContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 1500,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {
    search,
    setSearch,
    containerSearch,
    setContainerSearch,
  } = React.useContext(GlobalStateContext);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleStateContainerSearch = () => {
    containerSearch ? setContainerSearch(false) : setContainerSearch(true);
  };
  return (
    <>
      {containerSearch && (
        <ContainerSeach className={classes.root}>
          <Tabs
            orientation='vertical'
            variant='scrollable'
            value={value}
            onChange={handleChange}
            aria-label='Vertical tabs example'
            className={classes.tabs}
            textColor='secondary'
          >
            {" "}
 
            <IconButton  color='secondary' onClick={toggleStateContainerSearch}>
              <CloseIcon />
            </IconButton>

            <TextField
              name={"search"}
              value={search}
              onChange={setSearch}
              variant={"outlined"}
              label={"PESQUISAR"}
              fullWidth
              autoFocus
              margin={"normal"}
            />
            <Tab label='limpar filtros' />
            <Tab label='+ Recentes' />
            <Tab label='+ antigos' />
            <Tab label='+ curtidos' />
            <Tab label='+ Comentados' />
            <Tab label='tecnologia' />
            <Tab label='música' />
            <Tab label='livros' />
            <Tab label='assunto' />
            <Tab label='assunto' />
            <Tab label='assunto' />
            <Tab label='assunto' />
          </Tabs>
        </ContainerSeach>
      )}
    </>
  );
}
