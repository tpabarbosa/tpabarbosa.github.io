import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../../../routes/routesList";
import { PageContext } from "../..";
import * as S from "./styles";

type PrevNextNavProps = {
    type: 'prev' | 'next',
}

export const PrevNextNav = ({type}: PrevNextNavProps) => {
    const page = useContext(PageContext);

    const location = useLocation();

    const getLinkTo = () => {    
        const index = routes.findIndex(value => value.path === location.pathname);
        if (type==='prev') {
            return index === 0 ? 
                routes[routes.length-1].path : 
                routes[index-1].path;
        }
        return index === routes.length-1 ? 
            routes[0].path : 
            routes[index+1].path;
    }

    return (
        <S.Container type={type}>
            <Link 
                to={getLinkTo()} 
                onClick={() => page.dispatchAction('CHANGE_PAGE')}>
                <div className='icon-btn'>
                    { type==='prev' ? 
                        <span>&lsaquo;</span> : 
                        <span>&rsaquo;</span> 
                    }
                </div>
                
            </Link>
        </S.Container>
    )
}