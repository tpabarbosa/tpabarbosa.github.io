import { ThemeTogglerButton } from "../../../Theme/ThemeTogglerButton";
import { usePage } from "..";
import * as S from "./styles";
import { LanguageTogglerButton } from "../../../Translation/LanguageTogglerButton";

export const PageButtons = () => {
    const page = usePage();
    
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
            <LanguageTogglerButton />
            <ThemeTogglerButton />
            <button onClick={handleClick} className='icon-btn'>    
                {renderIcon()}
            </button>
        </S.Container>
    )
}