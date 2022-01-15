import { useContext } from "react";
import { ThemeTogglerButton } from "../../../Theme/ThemeTogglerButton";
import { PageContext } from "..";
import * as S from "./styles";

export const PageButtons = () => {
    const page = useContext(PageContext);
    
    const handleClick = () => {
        const action = page.state === 'MENU_NAV_IS_OPEN' ? 
            'CLOSE_MENU_NAV' : 
            'OPEN_MENU_NAV';
        page.dispatchAction(action);
    }

    const renderIcon = () => {
        return page.state === 'MENU_NAV_IS_OPEN' ? 
                <span>X</span> : 
                <span>&#9776;</span>
    }

    return (
        <S.Container>
            <ThemeTogglerButton />
            <button onClick={handleClick} className='icon-btn'>    
                {renderIcon()}
            </button>
        </S.Container>
    )
}