import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  text: {
    color: "white",
    fontSize: 32,
    textAlign: "center"
  }
}));

function ShowCast(props) {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      To be done, Showcase of commons cast and/or past winners?
    </div>
  );
}

export default ShowCast;
