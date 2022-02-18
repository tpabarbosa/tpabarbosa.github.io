import { Link } from "react-router-dom";
import { usePage } from "../..";
import * as S from "./styles";
import { routes } from "../../../../routes/routesList"

export const MenuNav = () => {
    const page = usePage();

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
                    <span>{route[page.lang]}</span>
                </Link>
            )}
        </S.Nav>
    )
}


