import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import theme from "../ui/theme";
import img from "../assets/images/MYPIC.jpg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  aboutPaper: {
    backgroundColor: "#000e27",
  },
  aboutmeContainer: {
    minHeight: "100vH",
    fontFamily: "roboto",
    fontSize: "2em",
    color: theme.palette.common.textColor,
    marginBottom: "5em",
    padding: "2em",
  },
  media: {
    maxHeight: "15em",
    maxWidth: "20em",
    opacity: "0.7",
    borderRadius: "100%",
    borderWidth: "1em",
  },
  aboutMe: {
    fontFamily: `"Helvetica", "Arial", sans-serif`,
    fontWeight: "300",
    fontSize: "1em",
    width: "25em",
    color: theme.palette.common.arcOrange,
  },
  btnContainer: {
    marginBottom: "5em",
    marginTop: "1em",
  },
  btn: {
    minWidth: "5em",
    minHeight: "3em",
    fontSize: "2em",
    fontWeight: "100",
  },
}));

export default function AboutMe(props) {
  //
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.aboutPaper}>
        <Grid
          container
          className={classes.aboutmeContainer}
          direction="row"
          alignItems="center"
          justify="space-around"
        >
          <Grid item>
            <img src={img} alt="Gagandeep Raju" className={classes.media} />
          </Grid>
          <Grid item>
            <Typography className={classes.aboutMe}>
              Hello, first of all, thanks for taking your take to look into my
              personal Portfolio. I am pursuing my Software Engineering
              Degree(part-time) from McMaster Univeristy, Hamilton, Canada. I am
              an Entry Level Full-Stack Developer, 3D Artist, and Designer. I am
              been working as an programmer from the last 6 years, before
              pursuing my career as an Software/Application developer I have
              worked as an Embedded System programmer. I have a very strong
              mind-set when it come to programming. I am actively expanding my
              programming knowlegde on daily bases. Apart from being a software
              engineering student, I have enrolled in multiple classes online
              where I can learn just about anything for web development. My long
              term career goal is to work as an software developer, where I will
              be developing complex web application not only using the current
              industrial technology standards but also using the upcoming
              technologies like Augumented Reality.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid
        container
        className={classes.btnContainer}
        direction="column"
        justify="center"
        alignContent="center"
      >
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/mywork"
          className={classes.btn}
          onClick={() => props.setValue(2)}
        >
          Check Out my Work!
        </Button>
      </Grid>
    </React.Fragment>
  );
}
