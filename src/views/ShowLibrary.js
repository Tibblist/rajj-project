import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  text: {
    color: "white",
    fontSize: 32,
    textAlign: "center"
  }
}));

function ShowLibrary(props) {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      To be done, Searchable/Filterable catalog of all past shows
    </div>
  );
}

export default ShowLibrary;
