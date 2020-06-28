import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

//theme import
import theme from "./ui/theme";
//material-ui imports
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import "./app.css";

const useStyles = makeStyles({
  test: {
    position: "relative",
    minHeight: "5em",
    background: "#000",
    color: "#FFF",
  },
});

export default function App(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <HomePage value={value} setValue={setValue} />}
          />
          <Route
            exact
            path="/aboutme"
            component={() => <AboutMe setValue={setValue} />}
          />
          <Route exact path="/mywork" component={() => <MyWork />} />
          <Route exact path="/contact" component={() => <Contact />} />
          <Route path="*" component={() => <NotFound />} />
        </Switch>
        <Footer classes={classes.test} value={value} setValue={setValue} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

// <div className={classes.test}>Test</div>
