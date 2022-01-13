import { useRoutes } from 'react-router-dom';

import { routesList } from './routesList';

const AppRoutes = () => {
    const routes = useRoutes(routesList);
    return (
        <>{routes}</>
    );
}

export default AppRoutes;


