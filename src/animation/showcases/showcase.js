import React from "react";
import { useSpring, animated } from "react-spring";
import range from "lodash-es/range";

import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

// import Link from "@material-ui/core/Link";
// import { Link as RouterLink } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

const primary = "#000e27";
const textColor = "#e8ebe9ad";

const useStyles = makeStyles({
  show: {
    marginTop: "10em",
    background: "#FFF",
    width: "100px",
    height: "300px",
    willChange: "transform",
    "&:hover": {
      background: "#ff66b3",
      cursor: "pointer",
    },
  },
  showContainer: {
    //
    paddingBottom: "10em",
    background: `${primary}`,
  },
  showHeading: {
    color: `${textColor}`,
    marginTop: "1em",
    textTransform: "uppercase",
    fontSize: "2em",
    fontWeight: "bold",
    letterSpacing: "1em",
  },
});

const items = range(4);
const interp = (i) => (r) =>
  `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

export default function Showcase(props) {
  const classes = useStyles();
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  });
  return (
    <React.Fragment>
      <Grid
        container
        className={classes.showContainer}
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.showHeading}>
            Projects I worked on
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {items.map((i) => (
            <animated.div
              key={i}
              className={classes.show}
              style={{ transform: radians.interpolate(interp(i)) }}
            />
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

// <Link component={RouterLink} to="/">
//           With prop forwarding
//         </Link>
