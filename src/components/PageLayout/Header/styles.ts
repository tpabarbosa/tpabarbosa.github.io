import styled from "styled-components";
import media from "../../../Theme/media";

export const Header = styled.div`
  text-align: right;
  position: relative;
  top: 0;
  width: calc(90vw - 2rem);
  /* opacity: 0.5; */
  background-color: ${(props) => props.theme.background}33;
  padding: 2rem 3rem;
  transform: translate3d(0, 0, 0);
  transition: transform 1s cubic-bezier(0.45, 0, 0, 1);
  backdrop-filter: blur(5px);

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 1.8rem;
    margin: 1rem 0rem;
    line-height: 2.2rem;
  }

  a {
    font-size: 1rem;
    font-weight: bold;
    padding: 0.2rem 0.8rem;
    transition: color 1s, background-color 1s;
    border-radius: 0.5rem;

    :hover {
      background-color: ${(props) => props.theme.backgroundTwo};
      color: ${(props) => props.theme.colorTwo};
    }

    span:not(:first-child) {
      animation-name: anime;
      animation-duration: 0.6s;
      animation-iteration-count: infinite;
    }

    span:nth-child(2) {
    }

    span:nth-child(3) {
      animation-delay: 0.2s;
    }

    span:nth-child(4) {
      animation-delay: 0.4s;
    }

    @keyframes anime {
      0% {
        opacity: 0;
      }
      25% {
        opacity: 0.25;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }

  &.hidden {
    transform: translate3d(-200%, 0, 0);
  }

  ${media.tablet`
        padding-right: 25%;
    `}
`;
