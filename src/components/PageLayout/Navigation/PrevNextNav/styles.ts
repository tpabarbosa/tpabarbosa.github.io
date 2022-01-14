import styled from "styled-components";
import media from "../../../../Theme/media";

type ContainerProps = { 
    type: 'prev' | 'next',
}

export const Container = styled.nav<ContainerProps>`
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
        height: 100%;
        
        :hover {
            color: ${props => props.theme.colorTwo};

            div {
                background-color: ${props => props.theme.backgroundTwo};
            }
        }
    }

    ${media.desktop`
        width: 10vw;
        height: 50vh
    `}
`;
