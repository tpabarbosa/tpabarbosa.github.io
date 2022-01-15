import styled from "styled-components";

type TechProps = {
    color:string;
}

export const Container = styled.div`
    margin: 2rem auto;
    /* box-shadow: 2px 2px 2px #888888; */
    opacity: 0.9;
    border-radius: 1rem;
    overflow: hidden;
    max-width: 450px;
    border: 10px ridge ${props => props.theme.color};
    background-color: ${props => props.theme.background};
    padding-bottom: 1px;
`;

export const Image = styled.div`
    width: 100%;
    
    margin: 0 auto;
    /* background-color: ${props => props.theme.backgroundTwo}; */

    img {
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
        object-position: 0 0;
    }
    
`

export const Name = styled.h2`
    background-color: ${props => props.theme.backgroundTwo};
    color: ${props => props.theme.colorTwo};
    padding: 0.5rem 1rem;
    text-align: center;
    box-shadow: 2px 2px 2px #888888;
`

export const Abstract = styled.p`
    padding: 0.5rem 1rem;
    margin: 2rem 0.5rem;
    line-height: 1.5rem;
`

export const Techs = styled.div`
    margin: 2rem 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
`

export const Tech = styled.div<TechProps>`
    font-size: 0.7rem;
    font-weight: bold;
    margin: 0.2rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    box-shadow: 2px 2px 2px #888888;
    opacity: 0.6;
`
export const Links = styled.div`
    margin: 2rem 0;
    padding-bottom: 1px;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;

    a {
        margin: 0.5rem;
    }
`