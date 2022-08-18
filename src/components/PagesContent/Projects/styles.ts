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

