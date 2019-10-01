import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  gameTitles: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    "border-bottom": "4px solid rgba(255,255,255,1)",
    marginTop: 25
  },
  gameDescription: {
    fontSize: 16,
    color: "white",
    marginTop: 10
  }
}));

const shows = [
  {
    title: "Rajj Royale",
    description:
      "A select group of streamers go head to head debating topics from politics to latest twitch news. Rounds decrease in time as the show progresses, at the end of each round a vote is held to determine who is the winner of the round and gets to kick someone off the show. The winner selects between the bottom 2 people on the poll to determine who gets kicked off (unless you are Destiny and leave it to chance). "
  },
  {
    title: "Rajjchelor",
    description:
      "A select group of streamers attempt to win the heart and mind of an elibile bachelor from twitch. Rounds decrease in time as the show continues and at the end of each round the eligible bachelor chooses who gets removed. Rajj then creates a bottom 3 of contestants to make them sweat while waiting to figure out who is going to get kicked off the show."
  },
  {
    title: "Rajjchelorette",
    description:
      "Same as Rajjchelor but reverse the genders. Generally involves alot more thirst among participants."
  },
  {
    title: "King of the hill",
    description:
      "A group of 4 women streamers judge contestants that come on the show. Rounds are king of the hill style where the winner stays on to face the next contestant and try to keep their title as king of the hill."
  },
  {
    title: "Reverse King of the hill",
    description: "Same as King of the hill but reverse the genders."
  }
];

function ShowRules(props) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      {shows.map(show => {
        return (
          <React.Fragment>
            <div className={classes.gameTitles}>{show.title}</div>
            <div className={classes.gameDescription}>{show.description}</div>
          </React.Fragment>
        );
      })}
    </Container>
  );
}

export default ShowRules;
