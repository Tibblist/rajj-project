import React from "react";
import { Container } from "@material-ui/core";
//import SlideShow from "react-slidez";
import SlideShow from "../components/SlideShow";
import Slide from "../components/Slide";
import Forest from "../images/forest.jpg";
import Mountain from "../images/mountain.jpg";
import WaterSparkler from "../images/watersparkler.jpg";
import { makeStyles } from "@material-ui/styles";
import SocialBar from "../components/SocialBar";
import VideoWidget from "../components/VideoWidget";
import Vid1 from "../images/vid1.jpg";
import Vid2 from "../images/vid2.jpg";
import Vid3 from "../images/vid3.jpg";

const youtubeVideoInfo = [
  {
    image: Vid1,
    title:
      "RAJJ ROYALE PODCAST | FT. DESTINY, TRIHEX, ATHENE, KACEYTRON & MORE",
    link: "https://www.youtube.com/watch?v=sbvUD9lq7gg"
  },
  {
    image: Vid2,
    title: "THE RAJJCHELORETTE FT. KATERINO & 10 GUYS",
    link: "https://www.youtube.com/watch?v=0jVv5uAXxbI"
  },
  {
    image: Vid3,
    title:
      "RAJJ ROYALE PODCAST FT. DESTINY, MIA MALKOVA, JON ZHERKA, REM & MORE",
    link: "https://www.youtube.com/watch?v=5JCt0Iosvwg"
  }
];

const useStyles = makeStyles(theme => ({
  slideshowContainer: {
    width: "75%",
    display: "block",
    marginRight: "auto",
    marginLeft: "auto"
  },
  socialBarContainer: {
    width: 360
  },
  mainContentContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 25
  },
  mainContentBlock: {
    //width: 640,
    //height: 240
    marginRight: 25
  },
  rightBar: {
    width: 0,
    height: 1000,
    backgroundColor: "teal",
    marginLeft: -15,
    float: "left",
    border: "0.4rem solid #fff",
    "border-radius": "2rem",
    "box-shadow": "0 10px 20px teal",
    animation: "$flicker 1.5s infinite alternate"
  },
  leftBar: {},
  "@keyframes flicker": {
    "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
      "box-shadow":
        "0 0 .5rem #fff, inset 0 0 .5rem #fff, 0 0 2rem 10px #08f, inset 0 0 2rem #08f, 0 0 4rem 10px #08f, inset 0 0 4rem #08f"
    }
  }
}));

function Home(props) {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.rightBar}></div>
      <div className={classes.leftBar}></div>
      <div className={classes.slideshowContainer}>
        <SlideShow>
          <Slide
            src={Mountain}
            title="Mount Everest"
            description="Like other high peaks in the region, Mount Everest has long been revered by local peoples. Its most common Tibetan name, Chomolungma, means “Goddess Mother of the World” or “Goddess of the Valley.” The Sanskrit name Sagarmatha means literally “Peak of Heaven.”"
          />
          <Slide
            src={Forest}
            title="Goblin Forest"
            description="A variety of walks begin here, but many visitors come exclusively to walk through the Goblin Forest, otherwise known as the Kamahi Walk. This forest looks like something from a fantasy movie. It is primarily kamahi trees which began life perched on the trunks of other trees."
          />
          <Slide
            src={WaterSparkler}
            title="Celebration"
            description="Out of creative juice for more dummy text tbh..."
          />
        </SlideShow>
      </div>
      <div className={classes.mainContentContainer} /*Main content div*/>
        <div className={classes.mainContentBlock} /* Main Content Block*/>
          <VideoWidget
            title="Youtube"
            linkTitle="RajjProductions"
            linkSrc="https://www.youtube.com/channel/UCuo4oFbb__fyoIDE2z_RdMA"
            videos={youtubeVideoInfo}
          />
          <br />
          <VideoWidget
            title="Twitch"
            linkTitle="rajjpatel"
            linkSrc="https://www.twitch.tv/rajjpatel"
            videos={youtubeVideoInfo}
          />
        </div>
        <div className={classes.socialBarContainer}>
          <SocialBar />
        </div>
      </div>
    </Container>
  );
}

export default Home;
