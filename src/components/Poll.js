import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Radio, RadioGroup, Button, Typography, Grid } from "@material-ui/core";
import { VictoryPie, VictoryLabel } from "victory";
import { subscribeToResults, unsubscribeToResults } from "../api/socketio";
import OverDrive from "react-overdrive";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 10,
    padding: 25
  },
  text: {
    //margin: theme.spacing(3)
    color: "white"
  },
  radio: {
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.25) !important"
    }
  },
  button: {
    color: "white",
    marginTop: 15
  },
  buttonText: {
    color: "black"
  }
}));

const useStyles2 = makeStyles(theme => ({
  root: { position: "relative", minHeight: 600 },
  text: { color: "white" },
  pieContainer: {
    width: "50%",
    //height: 400,
    overflow: "visible",
    position: "absolute",
    right: 0
  },
  resultsContainer: {},
  result: {
    width: "100%",
    transition: "all 0.5s"
  },
  bar: {
    display: "block",
    height: "100%",
    "border-top-right-radius": 8,
    "border-bottom-right-radius": 8,
    "border-top-left-radius": 20,
    "border-bottom-left-radius": 20,
    "background-color": "rgb(40, 209, 186)",
    "background-image":
      "linear-gradient(center bottom, rgb(40, 209, 186) 37%, rgb(84, 240, 219) 69%)",
    "box-shadow":
      "inset 0 2px 9px  rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.4)",
    position: "relative",
    overflow: "hidden",
    transition: "width 0.25s"
  },
  barContainer: {
    height: 50 /* Can be anything */,
    position: "relative",
    background: "#555",
    "-moz-border-radius": 25,
    "-webkit-border-radius": 25,
    "border-radius": 25,
    padding: 10,
    "box-shadow": "inset 0 -1px 1px rgba(255,255,255,0.3)"
  }
}));

function Poll(props) {
  const classes = useStyles();
  const [pollState, setPollState] = useState(undefined);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPollInfo(props.id).then(state => setPollState(state));
  }, [setPollState, props.id]);

  if (!pollState) return <React.Fragment />;

  if (submitted) return <PollResults pollState={pollState} id={props.id} />;

  return (
    <div className={classes.root}>
      <FormLabel style={{ color: "white" }} component="legend">
        {pollState.title}
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        //value={value}
        //onChange={handleChange}
      >
        {pollState.options.map((option, index) => {
          return (
            <FormControlLabel
              key={option}
              control={
                <Radio
                  checked={selectedIndex === index}
                  onChange={() => {
                    setSelectedIndex(index);
                  }}
                  className={classes.radio}
                  style={{ color: "white" }}
                />
              }
              style={{ color: "white" }}
              label={option}
            />
          );
        })}
      </RadioGroup>
      <FormHelperText className={classes.text}>
        Make sure to vote for who to keep not kick!!!
      </FormHelperText>
      <Button
        className={classes.button}
        onClick={() => {
          if (selectedIndex > 0) setSubmitted(true);
          else setError(true);
        }}
        variant="contained"
      >
        <Typography className={classes.buttonText}>Submit</Typography>
      </Button>
    </div>
  );
}

function PollResults(props) {
  const classes = useStyles2();
  const [data, setData] = useState([]);

  useEffect(() => {
    subscribeToResults(props.id, data => {
      //console.log(data);
      setData(data);
    });
    return () => {
      unsubscribeToResults(props.id);
    };
  }, [props.id, setData]);
  var totalVotes = 0;
  for (var i = 0; i < data.length; i++) {
    totalVotes += data[i].y;
  }
  data.sort(compare);
  return (
    <Grid
      container
      direction="row"
      jutsify="space-between"
      className={classes.root}
    >
      <div className={classes.resultsContainer}>
        {data.map(dataObj => {
          return (
            <OverDrive key={dataObj.label} id={dataObj.label}>
              <div className={classes.result}>
                <Typography variant="h4">{dataObj.label}:</Typography>
                <Typography variant="h6">Votes: {dataObj.y}</Typography>
                <div className={classes.barContainer}>
                  <span
                    style={{
                      width: (dataObj.y / totalVotes) * 100 + "%"
                    }}
                    className={classes.bar}
                  ></span>
                </div>
              </div>
            </OverDrive>
          );
        })}
      </div>
      <div className={classes.pieContainer}>
        <VictoryPie
          labelComponent={
            <VictoryLabel className={classes.text} renderInPortal />
          }
          style={{ labels: { fill: "white" } }}
          animate
          colorScale="qualitative"
          data={data}
        />
      </div>
    </Grid>
  );
}

function compare(a, b) {
  var comparison = 0;
  if (a.y > b.y) comparison = 1;
  if (b.y > a.y) comparison = -1;
  return comparison * -1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    var pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  //console.log(arr);
  //return arr;
}

function partition(arr, low, high) {
  var pivot = arr[high];
  var i = low - 1;
  for (var j = 0; j < high - 1; j++) {
    if (arr[j].y < pivot.y) {
      i++;
      arr = swap(arr, i, j);
    }
  }
  arr = swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

async function getPollInfo(id) {
  return {
    title: "This is a test question?",
    options: [
      "Dummy Option 1",
      "Dummy Option 2",
      "Dummy Option 3",
      "Dummy Option 4",
      "Dummy Option 5"
    ]
  };
}

export default Poll;
