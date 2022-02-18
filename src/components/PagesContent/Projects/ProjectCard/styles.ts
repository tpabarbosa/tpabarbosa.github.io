import styled from "styled-components";
import media from "../../../../Theme/media";

type TechProps = {
  color: string;
};

export const Container = styled.div`
  margin: 2rem auto;
  opacity: 0.9;
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  border: 6px ridge ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.background};
  padding-bottom: 1px;

  ${media.tablet`
        width: 80%;
    `}

  ${media.desktop`
        width: 60%;
    `}
`;

export const Image = styled.div`
  width: 100%;
  margin: 0 auto;

  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: 0 0;
  }
`;

export const Name = styled.h2`
  background-color: ${(props) => props.theme.backgroundTwo};
  color: ${(props) => props.theme.colorTwo};
  padding: 0.5rem 1rem;
  text-align: center;
  box-shadow: 2px 2px 2px #888888;
`;

export const Abstract = styled.div`
  padding: 0.5rem 0.5rem;
  margin: 0rem 1rem;

  p {
    margin: 1.5rem 0rem;
    display: block;
    line-height: 1.8rem;
  }

  div {
    position: relative;
    text-align: end;
    bottom: 1em;
  }

  span {
    font-weight: bold;
    font-size: 0.9rem;
    padding: 0.2rem 0.8rem;
    transition: color 1s, background-color 1s;
    border-radius: 0.5rem;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.backgroundTwo};
      color: ${(props) => props.theme.colorTwo};
    }
  }
`;

export const Techs = styled.div`
  margin: 2rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const Tech = styled.div<TechProps>`
  font-size: 0.7rem;
  font-weight: bold;
  margin: 0.2rem;
  padding: 0.2rem 1rem;
  border-radius: 0.6rem;
  border: 1px dotted;
  opacity: 0.7;
`;
export const Links = styled.div`
  margin: 0.5rem 0;
  padding-bottom: 1px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    margin: 0.5rem;
  }
`;
