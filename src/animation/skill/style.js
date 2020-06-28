import { animated } from "react-spring";
import styled from "styled-components";

//  align-items:center
const Container = styled(animated.div)`
  position: relative;
  display: grid;

  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 2em;
  padding: 2em;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`;

const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
`;

export { Container, Item };
