import styled from "styled-components";
import media from "../../../Theme/media";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  margin-bottom: 2rem;
  padding-bottom: 1px;
  padding-top: 2rem;
  overflow: hidden;

  ${media.tablet`
        padding: 5rem 0;
    `}
`;

export const Links = styled.article`
  margin: 2rem auto;
  opacity: 0.9;
  overflow: hidden;
  width: 100%;
  background-color: ${(props) => props.theme.background};
  padding-bottom: 1px;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translate3d(0, 0, 0);
  transition: transform 1s cubic-bezier(0.45, 0, 0, 1);
  transition-delay: 0.8s;

  a {
    width: 400px;
    max-width: 100%;
  }

  ${media.tablet`
        width: 80%;
    `}

  ${media.desktop`
        width: 60%;
    `}

    &.hidden {
    transform: translate3d(200%, 0, 0);
  }
`;

export const Link = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
    margin-right: 1rem;
  }
`;
