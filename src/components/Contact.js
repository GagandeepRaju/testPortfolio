import React from "react";

import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import theme from "../ui/theme";
import IconButton from "@material-ui/core/IconButton";

import LiknedIn from "../assets/linkedin.svg";
import Skillshare from "../assets/skillshare.svg";
import twitter from "../assets/twitter.svg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  contactContainer: {
    minHeight: "100vH",
    fontFamily: "roboto",
    fontSize: "2em",
    color: theme.palette.common.textColor,
  },
  contactLogo: {
    height: "10em",
    width: "10em",
  },
});

export default function Contact(props) {
  //
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.contactContainer}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <IconButton
          href="https://www.linkedin.com/in/gagandeepr/"
          target="_blank"
        >
          <img
            src={LiknedIn}
            alt="Linked In Profile"
            className={classes.contactLogo}
          />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton href="https://twitter.com/raju_gagandeep" target="_blank">
          <img
            src={twitter}
            alt="Twitter Profile"
            className={classes.contactLogo}
          />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography variant="h2" color="secondary">
          Cell: +1(647)-701-6107
        </Typography>
      </Grid>
    </Grid>
  );
}

// https://twitter.com/raju_gagandeep
