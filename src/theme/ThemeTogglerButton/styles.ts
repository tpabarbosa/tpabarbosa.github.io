import styled from 'styled-components';
import media from '../media';

export const Container = styled.div`
  position: fixed;
  right: 1rem;
  top: 0.2rem;
  text-align: right;
  z-index:100;

  ${media.tablet`
    right: 4.5rem;
  `}

`;
