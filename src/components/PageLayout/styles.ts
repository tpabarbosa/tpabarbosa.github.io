import styled from "styled-components";

export const Page = styled.div`
  .TRANSITIONING_PAGES {
    animation-duration: 1s;
    animation-iteration-count: 1;
  }
`;

export const FadeOut = styled.div`
  position: fixed;
  width: 1px;
  height: 100vh;
  transition: width 0.5s;
  opacity: 1;

  &.TRANSITIONING_PAGES {
    width: 100vw;
    animation-name: fadeOut;
    background-color: ${(props) => props.theme.backgroundTwo};
  }

  @keyframes fadeOut {
    0% {
      transform: rotateY(0deg);
      opacity: 1;
    }
    50% {
      transform: rotateY(-90deg);
      opacity: 0.8;
    }
    75% {
      transform: rotateY(0deg);
      opacity: 0.5;
    }
    100% {
      transform: rotateY(0deg);
      opacity: 0;
    }
  }
`;

export const FadeIn = styled.div`
  &.TRANSITIONING_PAGES {
    animation-name: fadeIn;
  }

  @keyframes fadeIn {
    0% {
      transform: rotateY(0deg);
      background-image: none;
      opacity: 0;
    }
    50% {
      transform: rotateY(90deg);
      opacity: 0;
    }
    75% {
      transform: rotateY(0deg);
      opacity: 0.5;
    }
    100% {
      transform: rotateY(0deg);
      opacity: 1;
    }
  }
`;
