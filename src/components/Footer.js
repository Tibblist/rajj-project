import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#383838",
    height: 100,
    color: "white"
    //marginTop: 15
  },
  link: {
    color: "#0000FF"
  },
  text: {
    paddingTop: 10
  }
}));

function Footer(props) {
  const classes = useStyles();
  return (
    <footer>
      <br />
      <div className={classes.root}>
        <Typography className={classes.text}>
          Copyright © 2019 Ethan Tibbetts
          <br />
          <Link className={classes.link}>Terms of use</Link>{" "}
          <Link className={classes.link}>Privacy Policy</Link>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
