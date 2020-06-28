import React from "react";

import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import theme from "../ui/theme";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import vidly from "../assets/images/vidly.png";
import MERN from "../assets/images/MERN.png";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  myworkContainer: {
    minHeight: "100vH",
    fontFamily: "roboto",
    fontSize: "2em",
    backgroundColor: theme.palette.common.textColor,
  },
  workHeading: {
    fontFamily: "roboto",
    fontSize: "2em",
    fontWeight: "300",
    textTransform: "uppercase",
    paddingBottom: "1em",
  },
  cardItem: {},
  cardImg: {},
}));

export default function MyWork(props) {
  //
  const classes = useStyles();

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Grid
        container
        className={classes.myworkContainer}
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <Typography
            variant="h3"
            color="secondary"
            className={classes.workHeading}
          >
            My Work so far...
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={matches ? 10 : 5}>
              <Card className={classes.cardItem} raised>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardImg}
                    component="img"
                    alt="Vidly Full-Stack Application"
                    height="140"
                    image={vidly}
                    title="Vidly Web Application"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Vidly Full-Stack Application
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Vidly is an web based full-stack application for Movie
                      Rental shops. Admin can login and add or delete any movie
                      change the price. Where use can search movies by serach or
                      sorting.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    component="a"
                    href="https://intense-reef-84912.herokuapp.com/movies"
                    target="_blank"
                  >
                    Preview
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={matches ? 10 : 5}>
              <Card className={classes.cardItem} raised>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardImg}
                    component="img"
                    alt="Mern Full-Stack Application"
                    height="140"
                    image={MERN}
                    title="Social Media Application"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Social Media Platform
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Social Media Application is like any other social
                      media(twitter) platform where users interact with each
                      other, uploading content, comments, likes, follow,
                      unfollow etc.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    component="a"
                    href="https://arcane-temple-40357.herokuapp.com/homepage"
                    target="_blank"
                  >
                    Preview
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={matches ? 10 : 5}>
              <Card className={classes.cardItem} raised>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardImg}
                    component="img"
                    alt="Insulation Business Website"
                    height="140"
                    image={MERN}
                    title="Iron Eagle Insulation"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Business Website Project
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Staic Website for Insulation Company
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    component="a"
                    href="https://arcane-temple-40357.herokuapp.com/homepage"
                    target="_blank"
                  >
                    Preview
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
