import React from "react";
import { makeStyles, Tooltip, Grid } from "@material-ui/core";

//const channel_id = "UCuo4oFbb__fyoIDE2z_RdMA";

const useStyles1 = makeStyles(theme => ({
  root: {
    padding: 25,
    backgroundColor: "#1A1A1B",
    borderRadius: 10,
    border: "1.5px solid #808080",
    "&:hover": {
      border: "1.5px solid #b3b3b3"
    }
  },
  gridItem: {
    padding: 10
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white"
  }
}));

const imageHeight = 180;

const useStyles2 = makeStyles(theme => ({
  imageRoot: {
    width: "fit-content",
    height: imageHeight,
    "&:hover": { boxShadow: "0px 0px 12px 2px rgba(0,229,255,1)" }
  },
  image: {
    width: 240,
    height: imageHeight
  }
}));

function YoutubeWidget(props) {
  const classes = useStyles1();
  return (
    <div className={classes.root}>
      <span className={classes.title}>
        {props.title + " "}
        <a
          href={props.linkSrc}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "normal", fontSize: 24 }}
        >
          {props.linkTitle}
        </a>
      </span>
      <Grid container direction="row" justify="space-around">
        {props.videos.map(video => {
          return (
            <a
              href={video.link}
              key={video.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Grid item className={classes.gridItem}>
                <Thumbnail src={video.image} title={video.title} />
              </Grid>
            </a>
          );
        })}
      </Grid>
    </div>
  );
}

function Thumbnail(props) {
  const classes = useStyles2();
  return (
    <div className={classes.imageRoot}>
      <Tooltip title={props.title}>
        <img
          className={classes.image}
          src={props.src}
          alt="Error loading"
        ></img>
      </Tooltip>
    </div>
  );
}

export default YoutubeWidget;
