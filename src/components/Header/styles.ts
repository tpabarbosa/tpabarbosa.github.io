import styled from "styled-components";
import media from "../../Theme/media";

export const Container = styled.header`
    
    .nav-hidden {
        transform: translate3d(0,-100%,0);

        a {
            transform: translate3d(0,-120px,0);
        }
    }
    
`

export const Nav = styled.nav`
    position: fixed;
    padding: 10vh 0;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: absolute;
    display: block;
    background-color: ${props => props.theme.background};
    transition: transform .45s cubic-bezier(.45,0,0,1);

    a { 
        display: flex;
        align-items: center;
        text-align: center;
        margin: 0rem auto;
        width: 90%; 
        max-width: 600px;
        position: relative;
        overflow: hidden;
        height: calc(80vh / 4);
        text-decoration: none;
        background-color: rgba(0,0,0,.02);
        transition: transform .55s cubic-bezier(0,.35,0,1), color .15s ease-out .1s;
    
        span { 
            width: 100%;
            font-size: 1.5rem;
        }

        :before, :after {
            content: " ";
            height: 75%;
            width: 100%;
            left: 0;
            position: absolute;
            transition: transform .4s cubic-bezier(.65,.15,0,1);
        }

        :before {
            top: 0;
            z-index: -1;
            transform: translate3d(-100%,0,0);
        }

        :after {
            bottom: 0;
            z-index: -2;
            transition-delay: 125ms;
            transform: translate3d(100%,0,0);
        }

        :hover {
            color: ${props => props.theme.colorTwo};

            :before, :after {
                transform: translate3d(0,0,0);
                background-color: ${props => props.theme.backgroundTwo};
            }
        }

        :nth-child(1) {
            transition-delay: .36s;
        }

        :nth-child(2) {
            transition-delay: .24s;
        }

        :nth-child(3) {
            transition-delay: .12s;
        }
    }
`

export const Buttons = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 0;
    bottom: 0;
    z-index: 100;
    height: fit-content;
    
    button:nth-child(1) {
        margin-bottom: 0;
    }

    ${media.tablet`
        flex-direction: row;
        top: 0;
        right: 0;
    `}
`