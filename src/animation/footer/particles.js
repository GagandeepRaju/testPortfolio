import React from "react";

import Particles from "react-particles-js";

import react from "./react.svg";
import VS from "./visual_studio_code.svg";
import express from "./expressjs.svg";
import node from "./node.svg";
import mongodb from "./mongodb.svg";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  particles: {
    width: "100%",
    height: "54vH",
    position: "absolute",
    zIndex: "-1",
    backgroundColor: "#000e27",
    borderRadius: "1em",
    padding: "0em",
    margin: "0em",
  },
});

export default function Particle(props) {
  const classes = useStyles();
  return (
    <Particles
      className={classes.particles}
      params={{
        particles: {
          number: {
            value: 24,
            density: {
              enable: true,
              value_area: 500,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 2,
            out_mode: "out",
          },
          shape: {
            type: ["image"],
            image: [
              {
                src: `${react}`,
                height: 20,
                width: 20,
              },
              {
                src: `${VS}`,
                height: 20,
                width: 20,
              },
              {
                src: `${express}`,
                height: 20,
                width: 20,
              },
              {
                src: `${node}`,
                height: 20,
                width: 20,
              },
              {
                src: `${mongodb}`,
                height: 20,
                width: 20,
              },
            ],
          },
          color: {
            value: "#CCC",
          },
          size: {
            value: 60,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
}
