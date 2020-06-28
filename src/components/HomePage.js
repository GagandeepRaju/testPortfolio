import React from "react";

//components
import Intro from "../components/intro";
import Showcase from "../animation/showcases/showcase";
import Skills from "../animation/skill/skills";

export default function HomePage(props) {
  //

  return (
    <React.Fragment>
      <Intro />
      <Showcase />
      <Skills />
    </React.Fragment>
  );
}
