import React from "react";
import { Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import RajjLogo from "../images/rajj_logo.jpg";

const useStyles = makeStyles(theme => ({
  buttonText: {
    color: "lightgrey",
    "&:hover": {
      color: "white",
      "text-shadow": "0px 0px 18px #CECECE, 0px 0px 18px #CECECE"
    }
  },
  menuButton: {
    padding: 10
  },
  text: {
    color: "white"
  },
  glowText: {
    color: "teal !important",
    "text-shadow": "none !important"
    //"text-shadow":
    //  "0px 0px 10px #CECECE, 0px 0px 8px #CECECE, 0px 0px 13px #CECECE"
  },
  headerContainers: {
    width: "fit-content"
  }
}));

const LinkComp = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

function Header(props) {
  const classes = useStyles();
  var selectedPageIndex = -1;
  switch (props.location.pathname) {
    case "/":
      selectedPageIndex = 0;
      break;
    case "/show-rules":
      selectedPageIndex = 1;
      break;
    case "/show-library":
      selectedPageIndex = 2;
      break;
    case "/show-cast":
      selectedPageIndex = 3;
      break;
    default:
      break;
  }
  return (
    <header>
      <Grid container direction="row" justify="space-between">
        <Grid
          container
          className={classes.headerContainers}
          direction="row"
          justify="flex-start"
        >
          <Grid item>
            <Link to="/">
              <img src={RajjLogo} alt="Rajj Logo"></img>
            </Link>
          </Grid>
          <Grid item>
            <Button component={LinkComp} to="/" className={classes.menuButton}>
              <Typography
                className={
                  selectedPageIndex === 0
                    ? classes.buttonText + " " + classes.glowText
                    : classes.buttonText
                }
              >
                Home
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={LinkComp}
              to="/show-rules"
              className={classes.menuButton}
            >
              <Typography
                className={
                  selectedPageIndex === 1
                    ? classes.buttonText + " " + classes.glowText
                    : classes.buttonText
                }
              >
                Show Rules
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={LinkComp}
              to="/show-library"
              className={classes.menuButton}
            >
              <Typography
                className={
                  selectedPageIndex === 2
                    ? classes.buttonText + " " + classes.glowText
                    : classes.buttonText
                }
              >
                Past Shows
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={LinkComp}
              to="/show-cast"
              className={classes.menuButton}
            >
              <Typography
                className={
                  selectedPageIndex === 3
                    ? classes.buttonText + " " + classes.glowText
                    : classes.buttonText
                }
              >
                The Cast
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.headerContainers}
          direction="row"
          justify="flex-end"
        >
          <Grid item>
            <a
              href="https://twitter.com/RajjOfficial"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button className={classes.menuButton}>
                <Typography className={classes.buttonText}>Twitter</Typography>
              </Button>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.youtube.com/channel/UCuo4oFbb__fyoIDE2z_RdMA"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button className={classes.menuButton}>
                <Typography className={classes.buttonText}>Youtube</Typography>
              </Button>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.instagram.com/rajjontwitch"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button className={classes.menuButton}>
                <Typography className={classes.buttonText}>
                  Instagram
                </Typography>
              </Button>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
}

export default withRouter(Header);
