import { Link, useLocation } from "react-router-dom";
import { routesArray } from "../../routes/routesList";
import * as S from "./styles";

type SiteNavigationProps = {
    type: 'prev' | 'next',
}

export const SiteNavigation = ({type}: SiteNavigationProps) => {
    const location = useLocation();

    const getLinkTo = () => {    
        const routes = routesArray;
        const index = routes.findIndex(value => value === location.pathname);
        if (type==='prev') {
            return index === 0 ? routes[routes.length-1] : routes[index-1];
        }
        return index === routes.length-1 ? routes[0] : routes[index+1];
    }

    return (
        <S.Container type={type}>
            <Link to={getLinkTo()} >
                {type==='prev' ? <span>&lsaquo;</span> : <span>&rsaquo;</span> }
            </Link>
        </S.Container>
    )
}