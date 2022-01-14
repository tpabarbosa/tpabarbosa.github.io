import { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../..";
import * as S from "./styles";

export const MenuNav = () => {
    const page = useContext(PageContext);

    const handleLinkClick = () => {
        page.state === 'MENU_NAV_IS_OPEN' && page.dispatchAction('CHANGE_PAGE');
    }

    return (
        <S.Nav className={page.state === 'MENU_NAV_IS_OPEN' ? '' : 'hidden'}>
            <Link to='/' onClick={handleLinkClick}><span>home</span></Link>
            <Link to='/projects' onClick={handleLinkClick}><span>projects</span></Link>
            <Link to='/contact' onClick={handleLinkClick}><span>contact</span></Link>
            <Link to='/about' onClick={handleLinkClick}><span>about me</span></Link>
        </S.Nav>
    )
}

