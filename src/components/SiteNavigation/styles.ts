import styled from "styled-components";
import media from "../../Theme/media";

type ContainerProps = { 
    type: 'prev' | 'next',
}

export const Container = styled.div<ContainerProps>`
    width:1px;
    height:1px;
    overflow: hidden;
    position: fixed;
    top: 15vh;
    ${props => props.type === 'prev' ? 'left: 0;' : 'right: 0;'};
    z-index: 2;

    a { 
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: none;
        font-size: 3rem;

        span {
            line-height: 3rem;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 100%;
        }

        :hover {
            color: ${props => props.theme.colorTwo};

            span {
                background-color: ${props => props.theme.backgroundTwo};
            }
        }
    }

    ${media.desktop`
        width: 10vw;
        height: 50vh
    `}
`;
