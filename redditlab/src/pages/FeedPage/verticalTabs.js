import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ContainerSeach, StyledSelectFilter } from "./styled";
import { IconButton, TextField } from "@material-ui/core";
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

export default function VerticalTabs(props) {
  const classes = useStyles();

  const { containerSearch, setContainerSearch } = React.useContext(
    GlobalStateContext
  );

  const toggleStateContainerSearch = () => {
    containerSearch ? setContainerSearch(false) : setContainerSearch(true);
  };
  return (
    <>
      {containerSearch && (
        <ContainerSeach className={classes.root}>
          <div>
            <IconButton color='secondary' onClick={toggleStateContainerSearch}>
              <CloseIcon />
            </IconButton>
          </div>

          <TextField
            name={"search"}
            value={props.search}
            onChange={props.setSearch}
            variant={"outlined"}
            label={"Pesquisar"}
            fullWidth
            autoFocus
            margin={"normal"}
          />
          <div>
            <StyledSelectFilter
              multiple
              native
              name={"search"}
              value={props.search}
              onChange={props.setSearch}
            >
              <option value=''>EXIBIR TODOS</option>

              <option value='livro'> + SOBRE LIVROS</option>

              <option value='tec'>+ SOBRE TECNOLOGIA</option>

              <option value='Covid'> + SOBRE COVID</option>

              <option value='música'>+ SOBRE MÚSICAS</option>
            </StyledSelectFilter>
          </div>
        </ContainerSeach>
      )}
    </>
  );
}
