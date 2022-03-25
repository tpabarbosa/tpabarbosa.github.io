import styled, { css } from "styled-components";
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

export const Article = styled.article`
  margin: 0 auto;
  width: 85%;
  opacity: 0.9;
  ${media.tablet`
        width: 80%;
    `}

  ${media.desktop`
        width: 60%;
    `}
`;

export const Introduction = styled.section`
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transform: translate3d(0, 0, 0);
  transition: transform 1s cubic-bezier(0.45, 0, 0, 1);
  transition-delay: 0.8s;

  ${media.desktop`
    flex-direction: row;
    flex-wrap: nowrap;
  `}

  &.hidden {
    transform: translate3d(200%, 0, 0);
  }
`;

export const Content = styled.section`
  margin: 2rem auto;
  transform: translate3d(0, 0, 0);
  transition: transform 1s cubic-bezier(0.45, 0, 0, 1);
  transition-delay: 1.8s;

  &.hidden {
    transform: translate3d(-200%, 0, 0);
  }
`;

type PillProps = {
  active: boolean;
};

export const Pills = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `};
`;

export const Text = styled.div`
  /* border: 6px solid ${(props) => props.theme.background}; */
  background-color: ${(props) => props.theme.background};
  /* border-radius: 1rem; */
  opacity: 0.8;
  overflow: hidden;

  p {
    margin: 1rem;
    padding: 0.5rem;
    display: block;
    line-height: 1.8rem;
  }

  code {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
    padding: 0 0.5rem;
  }
`;

export const Pill = styled.div<PillProps>`
  border-radius: 100px;
  border: 1px solid black;
  margin: 0rem auto;
  margin-bottom: 1rem;
  text-align: center;
  width: 180px;
  height: 70px;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  cursor: pointer;
  background: ${(props) => props.theme.backgroundButton};
  color: ${(props) => props.theme.colorButton};

  ${(props) =>
    props.active
      ? css`
          border: 3px solid black;
          background: green;
          color: black;
        `
      : ""};

  p {
    font-size: 0.9rem;
    line-height: 1rem;
    font-weight: bold;
    padding: 0.3rem 1rem;
    margin: 0;
  }

  &:hover {
    ${(props) =>
      !props.active
        ? css`
            background: ${(props) => props.theme.background};
            color: ${(props) => props.theme.color};
          `
        : ""}
  }
`;

type AvatarProps = {
  url: string;
};

export const Avatar = styled.div<AvatarProps>`
  position: relative;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin: 1rem;
  width: 280px;
  height: 280px;
  border-radius: 100%;

  ${media.tablet`
    flex: 0 0 auto;
    margin-top: 0;
  `};

  ${media.desktop`
    right: -5rem
  `};
`;

export const Terminal = styled.div`
  height: 75vh;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: #e7e7e7;
  border: 6px solid ${(props) => props.theme.background};
  overflow-y: hidden;
`;
