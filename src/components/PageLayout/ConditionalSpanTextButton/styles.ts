import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  text-align: end;
  bottom: 1em;

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
