import styled from "styled-components";
import media from "../../../Theme/media";

export const Main = styled.main`
  top: calc(37vh - 3rem);
  position: absolute;

  ${media.tablet`
        top: calc(55vh - 3rem);
    `}
`;
