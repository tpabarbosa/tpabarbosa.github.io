import styled from "styled-components";
import media from "../../../Theme/media";

export const Section = styled.section``

export const Title = styled.div`
    text-align: right;
    position: relative;
    top: calc(55vh - 3rem);
    width: calc(90vw - 2rem);
    opacity: 0.5;
    background-color: ${props => props.theme.background};
    padding: 2rem 3rem;
    transform: translate3d(0,0,0);
    transition: transform 1s cubic-bezier(.45,0,0,1);

    &.hidden {
        transform: translate3d(-200%,0,0);
    }

    p {
        margin: 1.5rem;
        line-height: 1.8rem;
        font-size: 1.2rem;
    }

    a {
        font-weight: bold;
        padding: 0.2rem 0.8rem;
        transition: color 1s, background-color 1s;
        border-radius: 0.5rem;

        :hover {
            background-color: ${props => props.theme.backgroundTwo};
            color: ${props => props.theme.colorTwo};
        }

        span:not(:first-child) {
            animation-name: anime;
            animation-duration: 0.6s;
            animation-iteration-count: infinite;
        }

        span:nth-child(2)  {
            
        }

        span:nth-child(3)  {
            animation-delay: 0.2s;
        }

        span:nth-child(4)  {
            animation-delay: 0.4s;
        }

        @keyframes anime  {
            0% {opacity: 0;}
            25% {opacity: 0.25;}
            50% {opacity: 0.5;}
            100% {opacity: 1;}
        }
    }

    ${media.tablet`
        padding-right: 25%;
    `}
`

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url('/images/hNXv7eCDkEA7df22j0bfvVHszpLr3f3BfFcL9Ahr.jpg') ;
    background-size: cover;
    background-position: 0 0;
    opacity: 0.75;
    width: 100%;
    min-height: 100vh;
`
