import React from "react";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Button, Typography } from "@material-ui/core";

const leftMargin = 15;

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "100%",
    height: 480
  },
  centerBottomContainer: {
    position: "absolute",
    bottom: 0,
    height: 150,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%"
  },
  slideTitle: {
    color: "white",
    marginLeft: leftMargin,
    marginTop: 5,
    fontSize: 24
  },
  slideDescription: {
    color: "white",
    marginLeft: leftMargin,
    //top: 30,
    marginTop: 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  button: {
    color: "white",
    border: "1px solid",
    left: leftMargin,
    marginTop: 10
  },
  buttonText: {
    color: "white"
  }
}));

function Slide(props) {
  const classes = useStyles();
  var description = truncateDescription(props.description);
  return (
    <div className={classes.root}>
      <img className={classes.image} src={props.src} alt="Error loading"></img>
      <div className={classes.centerBottomContainer}>
        <div className={classes.slideTitle}>{props.title}</div>
        <div className={classes.slideDescription}>{description}</div>
        <Button variant="outlined" className={classes.button}>
          <Typography className={classes.buttonText}>Learn More</Typography>
        </Button>
      </div>
    </div>
  );
}

//Truncate to last word present past 150 characters
const punct = [".", ":", ",", "!", "?"];
function truncateDescription(text) {
  if (text.length < 200) return text;
  for (var i = 200; i < text.length; i++) {
    if (text[i] !== " " && !punct.includes(text[i])) continue;
    else if (punct.includes(text[i - 1]))
      return text.substring(0, i - 1) + "...";
    else return text.substring(0, i) + "...";
  }
}

Slide.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Slide;
