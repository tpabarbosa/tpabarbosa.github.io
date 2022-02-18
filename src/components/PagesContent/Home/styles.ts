import styled from "styled-components";
import media from "../../../Theme/media";

export const Section = styled.section`
  top: calc(37vh - 3rem);
  position: absolute;

  ${media.tablet`
        top: calc(55vh - 3rem);
    `}
`;
