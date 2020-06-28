import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

//custom components

//material-ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

//navigation background
import navVideo from "../assets/video/Earth.mp4";

const textColor = "#e8ebe9ad";

const useStyles = makeStyles((theme) => ({
  bgVideo: {
    position: "absolute",
    width: "100%",
    left: "50%",
    top: "50%",
    height: "80em",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "5em",
    marginTop: "1em",
    marginLeft: "1em",
  },
  tabContainer: {
    marginLeft: "auto",
    marginRight: "2em",
  },
  tab: {
    color: `${textColor}`,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };

  useEffect(() => {
    if ((window.location.pathname === "/") & (props.value !== 0)) {
      props.setValue(0);
    } else if (
      (window.location.pathname === "/aboutme") &
      (props.value !== 1)
    ) {
      props.setValue(1);
    } else if ((window.location.pathname === "/mywork") & (props.value !== 2)) {
      props.setValue(2);
    } else if (
      (window.location.pathname === "/contact") &
      (props.value !== 3)
    ) {
      props.setValue(3);
    }
  }, [props.value, props]);

  return (
    <React.Fragment>
      <video autoPlay loop muted className={classes.bgVideo}>
        <source src={navVideo} type="video/mp4" />
      </video>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar disableGutters>
          <img className={classes.logo} src={logo} alt="Full-stack Logo" />
          <Tabs
            className={classes.tabContainer}
            textColor="secondary"
            value={props.value}
            onChange={handleChange}
          >
            <Tab className={classes.tab} label="Home" component={Link} to="/" />
            <Tab
              className={classes.tab}
              label="About Me"
              component={Link}
              to="/aboutme"
            />
            <Tab
              className={classes.tab}
              label="My work"
              component={Link}
              to="/mywork"
            />
            <Tab
              className={classes.tab}
              label="Contact"
              component={Link}
              to="/contact"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

/*--  <video autoPlay loop muted className={classes.bgVideo}>
        <source src={navVideo} type="video/mp4" />
      </video>--*/
