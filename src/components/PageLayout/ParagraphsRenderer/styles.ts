import styled from "styled-components";
import media from "../../../Theme/media";

export const Content = styled.div`
  /* padding: 0.5rem 0.5rem;
  margin: 0rem 1rem; */
  /* border: 6px ridge ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.background};
  border-radius: 1rem; */

  p {
    /* margin: 1.5rem 1rem; */
    display: block;
    line-height: 1.8rem;
  }

  code {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
    padding: 0 0.5rem;
  }

  ${media.desktop`
        margin: 2rem auto;
    `}
`;
