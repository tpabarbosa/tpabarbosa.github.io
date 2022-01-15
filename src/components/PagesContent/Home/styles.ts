import styled from "styled-components";
import media from "../../../Theme/media";

export const Section = styled.section`
    top: calc(55vh - 3rem);
    position: absolute;

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
`
