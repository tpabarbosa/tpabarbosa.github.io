import styled from "styled-components";
import media from "../../../Theme/media";

export const Container = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  bottom: 0;
  z-index: 1000;
  height: fit-content;

  button:not(:last-child) {
    margin-bottom: 0;
  }

  ${media.tablet`
        flex-direction: row;
        top: 0;
        right: 0;
    `}
`;
