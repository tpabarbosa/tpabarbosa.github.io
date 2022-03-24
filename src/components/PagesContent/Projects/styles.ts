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

export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 85%;
  transform: translate3d(0, 0, 0);
  transition: transform 1s cubic-bezier(0.45, 0, 0, 1);
  transition-delay: 0.8s;

  ${media.tablet`
        justify-content: space-between;
    `}

  &.hidden {
    transform: translate3d(200%, 0, 0);
  }
`;
