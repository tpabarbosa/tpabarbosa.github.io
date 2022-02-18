import styled from "styled-components";
import { BackgroundProps } from ".";

export const Background = styled.div<BackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url(${(props) => props.url});
  ${(props) => (props.size ? `background-size: ${props.size}` : "")};
  ${(props) =>
    props.position ? `background-position: ${props.position}` : ""};
  opacity: 0.7;
  width: 100%;
  min-height: 100vh;
`;
