import React from "react";
import { makeStyles } from "@material-ui/core";
import Poll from "../components/Poll";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "grey",
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
    border: "1.5px solid lightgrey",
    width: 640,
    borderRadius: "10px"
  }
}));

function PollView(props) {
  const classes = useStyles();
  const pollId = props.match.params.id;

  return (
    <div className={classes.root}>
      <Poll id={pollId} />
    </div>
  );
}

export default PollView;
