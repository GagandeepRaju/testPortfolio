import React from "react";

import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import theme from "../ui/theme";

const useStyles = makeStyles((theme) => ({
  notfound: {
    minHeight: "100vH",
    color: theme.palette.common.textColor,
  },
}));

export default function NotFound(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.notfound}>
      Page not Found
    </Grid>
  );
}
