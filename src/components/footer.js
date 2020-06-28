import React from "react";
import { Link } from "react-router-dom";

//Material-UI
import { makeStyles } from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import theme from "../ui/theme";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
//svgs logos
import LiknedIn from "../assets/linkedin.svg";
import Skillshare from "../assets/skillshare.svg";
import twitter from "../assets/twitter.svg";

// import Particles from "react-particles-js";
import Particle from "../animation/footer/particles";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    marginTop: "2em",
    marginBottom: "2em",
  },
  divider: {
    marginTop: "5em",
    marginLeft: "20em",
    marginRight: "20em",
    border: "5px",
    backgroundColor: theme.palette.common.textColor,
  },
  footerTypo: {
    textAlign: "center",
    fontSize: "1.5em",
    color: theme.palette.common.textColor,
  },
  footerLinks: {
    fontSize: "2em",
    color: theme.palette.common.textColor,
    textTransform: "uppercase",
  },
  footerLists: {
    color: "#023",
  },
  footerHeading: {
    fontSize: "1.5em",
    fontFamily: "roboto",
    fontWeight: "700",
  },
  LinkedIcon: {
    height: "1em",
    width: "5em",
  },
  SkillshareIcon: {
    height: "1em",
    width: "5em",
    backgroundColor: "#f5f5f5",
    paddingTop: ".2em",
    paddingBottom: ".2em",
    borderRadius: "1em",
    alignItems: "center",
  },
  twitterIcon: {
    height: "1em",
    width: "5em",
  },
  exploreLinks: {
    fontSize: "1em",
    fontFamily: "roboto",
    fontWeight: "300",
    color: theme.palette.common.textColor,
    textDecoration: "none",
  },
}));

export default function Footer(props) {
  //
  const classes = useStyles();

  return (
    <React.Fragment>
      <Particle />
      <Grid
        container
        className={classes.footerContainer}
        direction="row"
        justify="space-evenly"
        alignItems="flex-end"
      >
        <Grid item className={classes.footerLinks}>
          <span className={classes.footerHeading}>Explore</span>
          <Grid container className={classes.footerLists} direction="column">
            <Grid
              item
              className={classes.exploreLinks}
              component={Link}
              to="/"
              onClick={() => props.setValue(0)}
            >
              Home
            </Grid>
            <Grid
              item
              className={classes.exploreLinks}
              component={Link}
              to="/aboutme"
              onClick={() => props.setValue(1)}
            >
              About me
            </Grid>
            <Grid
              item
              className={classes.exploreLinks}
              component={Link}
              to="/mywork"
              onClick={() => props.setValue(2)}
            >
              My work
            </Grid>
            <Grid
              item
              className={classes.exploreLinks}
              component={Link}
              to="/contact"
              onClick={() => props.setValue(3)}
            >
              Contact
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.footerLinks}>
          <span className={classes.footerHeading}>Social Media</span>
          <Grid
            container
            className={classes.footerLists}
            direction="column"
            justify="space-evenly"
          >
            <Grid item>
              <IconButton
                href="https://twitter.com/GagandeepRaju"
                target="_blank"
              >
                <img
                  src={LiknedIn}
                  alt="LinkedIn Logo"
                  className={classes.LinkedIcon}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://www.skillshare.com/profile/Gagandeep-Raju/513443456"
                target="_blank"
              >
                <img
                  src={Skillshare}
                  alt="Skillshare Logo"
                  className={classes.SkillshareIcon}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://twitter.com/raju_gagandeep"
                target="_blank"
              >
                <img
                  src={twitter}
                  alt="Twitter Logo"
                  className={classes.twitterIcon}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Divider className={classes.divider} />
        <Typography className={classes.footerTypo}>
          Copyright ©2020 All rights reserved
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
