import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import NotFound from "./NotFound";
import ShowRules from "./ShowRules";
import ShowLibrary from "./ShowLibrary";
import ShowCast from "./ShowCast";
import PollView from "./PollView";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "black",
    display: "block",
    overflow: "auto",
    minHeight: "100%"
  }
}));

function MainPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/show-rules" component={ShowRules} />
        <Route path="/show-library" component={ShowLibrary} />
        <Route path="/show-cast" component={ShowCast} />
        <Route path="/poll/:id" component={PollView} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default MainPage;
