import styled from "styled-components";
import media from "../../../Theme/media";

export const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    margin-bottom: 2rem;
    padding-bottom: 1px;
    padding-top: 2rem;
    overflow: hidden;

    ${media.tablet`
        padding: 4rem 0;
    `}
`

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url('/images/headlights-g1fe75e9e5_1920.jpg') ;
    background-position: 90% 0;
    opacity: 0.75;
    width: 100%;
    min-height: 100vh;
`

export const Title = styled.div`
    max-width: 1000px;
    text-align: right;
    position: relative;
    top: 1rem;
    width: calc(90vw - 2rem);
    opacity: 0.5;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    padding: 2rem 3rem;
    transform: translate3d(0,0,0);
    transition: transform 1s cubic-bezier(.45,0,0,1);
    margin-bottom: 2rem;

    p {
        margin: 1.5rem;
        line-height: 1.8rem;
        font-size: 1.2rem;
    }

    &.hidden {
        transform: translate3d(-200%,0,0);
    }

    ${media.tablet`
        padding-right: 25%;
    `}
`

export const Projects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    width: 85%;
    transform: translate3d(0,0,0);
    transition: transform 1s cubic-bezier(.45,0,0,1);
    transition-delay: 0.8s;

    ${media.tablet`
        justify-content: space-between;
    `}

    &.hidden {
        transform: translate3d(200%,0,0);
    }
`;