import React from "react";
import Typical from "react-typical";
import Typography from "@material-ui/core/Typography";

//Material-UI
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const textColor = "#e8ebe9ad";

const useStyles = makeStyles((theme) => ({
  //
  container: {
    alignItems: "center",
    marginTop: "20em",
  },
  intro: {
    fontFamily: "Roboto",
    width: "100%",
    height: "100%",
    display: "block",
    color: `${textColor}`,
  },
  type: {
    marginTop: ".1em",
    fontSize: "5em",
    fontWeight: "bold",
    color: "#FFF",
  },
  introItem: {},
}));

export default function Intro() {
  //
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.container} direction="column">
        <Grid item className={classes.introItem}>
          <Typography variant="h3" className={classes.intro}>
            Hi, I am Gagan
          </Typography>
        </Grid>
        <Grid item className={classes.introItem}>
          <Typography variant="h3" className={classes.intro}>
            I am Entry Level
          </Typography>
        </Grid>
        <Grid item className={classes.introItem}>
          <Typical
            className={classes.type}
            steps={[
              "Designer",
              1000,
              "FULL-STACK  DEVELOPER",
              1000,
              "3D Artist",
              1000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
