import { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../..";
import useLanguage from "../../../../Translation";
import * as S from "./styles";
import { routes } from "../../../../routes/routesList"

export const MenuNav = () => {
    const page = useContext(PageContext);
    const [lang] = useLanguage();

    const handleLinkClick = () => {
        page.state === 'MENU_NAV_IS_OPEN' && page.dispatchAction('CHANGE_PAGE');
    }

    return (
        <S.Nav className={page.state === 'MENU_NAV_IS_OPEN' ? '' : 'hidden'}>
            {routes.map(route => 
                <Link 
                    to={route.path} 
                    onClick={handleLinkClick} 
                    key={route.path}
                >
                    <span>{route[lang]}</span>
                </Link>
            )}
        </S.Nav>
    )
}


