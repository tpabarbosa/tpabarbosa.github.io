import styled from "styled-components";

export const Section = styled.section`
    padding-top: 4rem;
    margin: 0 auto;
    width: 90%;
    max-width: 800px;
    height: 100vh;

    img {
        margin: 0 15%;
        width: 70%;
        border-radius: 100%;
    }

    p {
        margin: 2rem;
        line-height: 1.8rem;
        font-size: 1.2rem;
    }

    .special {
        padding: 1rem;
        background-color: ${props => props.theme.backgroundTwo};
        color: ${props => props.theme.colorTwo};
        border: 1px solid ${props => props.theme.colorTwo};
        border-left: 5px;
        margin: 2rem 3.5rem ;
        line-height: 1.5rem;
        font-size: 1.2rem;
    }

    code {
        padding: 0 1rem;
        background-color: ${props => props.theme.backgroundTwo};
        color: ${props => props.theme.colorTwo};
    }

`
