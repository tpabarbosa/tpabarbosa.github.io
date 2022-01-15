import styled from "styled-components";
import media from "../../Theme/media";


export const Title = styled.div`
    text-align: right;
    position: relative;
    top: 0;
    width: calc(90vw - 2rem);
    opacity: 0.5;
    background-color: ${props => props.theme.background};
    padding: 2rem 3rem;
    transform: translate3d(0,0,0);
    transition: transform 1s cubic-bezier(.45,0,0,1);

    &.hidden {
        transform: translate3d(-200%,0,0);
    }

    ${media.tablet`
        padding-right: 25%;
    `}
`;