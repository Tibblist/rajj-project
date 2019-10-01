import React, { useState, useCallback } from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

const buttonBackgroundColor = "rgba(255, 255, 255, 0.2)";
const buttonHoverBackground = "rgba(255, 255, 255, 0.3)";

const useStyles = makeStyles(theme => ({
  leftButton: {
    color: "white",
    backgroundColor: buttonBackgroundColor,
    position: "absolute",
    left: -75,
    top: "40%",
    zIndex: 1,
    "&:hover": {
      backgroundColor: buttonHoverBackground
    }
  },
  rightButton: {
    color: "white",
    backgroundColor: buttonBackgroundColor,
    position: "absolute",
    right: -75,
    top: "40%",
    zIndex: 1,
    "&:hover": {
      backgroundColor: buttonHoverBackground
    }
  },
  buttonIcon: {
    color: "white",
    fontSize: 48
  }
}));

function SlideShow(props) {
  const classes = useStyles();
  const [slideIndex, setSlideIndex] = useState(props.initialIndex || 0);
  const transitionLeft = useCallback(() => {
    if (slideIndex === 0) setSlideIndex(props.children.length - 1);
    else setSlideIndex(slideIndex - 1);
  }, [setSlideIndex, slideIndex, props.children]);

  const transitionRight = useCallback(() => {
    if (slideIndex === props.children.length - 1) setSlideIndex(0);
    else setSlideIndex(slideIndex + 1);
  }, [setSlideIndex, slideIndex, props.children]);
  if (props.children.length === 0) return <React.Fragment />;
  return (
    <div
      style={{
        position: "relative"
      }}
    >
      <IconButton
        size="small"
        onClick={transitionLeft}
        className={classes.leftButton}
      >
        <ChevronLeft className={classes.buttonIcon} />
      </IconButton>
      <IconButton
        size="small"
        onClick={transitionRight}
        className={classes.rightButton}
      >
        <ChevronRight className={classes.buttonIcon} />
      </IconButton>
      <div>{props.children[slideIndex]}</div>
    </div>
  );
}

SlideShow.propTypes = {
  initialIndex: PropTypes.number
};

export default SlideShow;
