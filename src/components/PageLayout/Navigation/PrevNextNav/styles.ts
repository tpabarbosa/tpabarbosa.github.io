import styled from "styled-components";
import media from "../../../../Theme/media";

type ContainerProps = {
  type: "prev" | "next";
};

export const Container = styled.nav<ContainerProps>`
  //width: 10vw;
  height: 50vh;
  overflow: hidden;
  position: fixed;
  top: 15vh;
  ${(props) => (props.type === "prev" ? "left: -30px;" : "right: -30px;")};
  z-index: 2;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;

    :hover {
      color: ${(props) => props.theme.colorTwo};

      div {
        background-color: ${(props) => props.theme.backgroundTwo};
      }
    }
  }

  ${media.desktop`
        ${(props: any) =>
          props.type === "prev" ? "left: 0px;" : "right: 0px;"};
        height: 50vh;
    `}
`;
