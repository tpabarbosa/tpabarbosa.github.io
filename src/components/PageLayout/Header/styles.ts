import styled from "styled-components";
import media from "../../../Theme/media";

export const Container = styled.div`
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