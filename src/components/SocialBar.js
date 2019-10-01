import React from "react";
import { makeStyles } from "@material-ui/core";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const useStyles = makeStyles(theme => ({
  discordPlaceholder: {
    backgroundColor: "rgba(114, 137, 218, 1)",
    height: 640,
    marginTop: -50,
    borderRadius: 5
  }
}));

function SocialBar(props) {
  const classes = useStyles();
  return (
    <div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="RajjOfficial"
        options={{ height: 640 }}
      />
      <div className={classes.discordPlaceholder}>
        <p style={{ textAlign: "center", fontSize: 64 }}>
          Discord Place- holder
        </p>
      </div>
    </div>
  );
}

export default SocialBar;
