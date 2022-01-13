import { Outlet } from 'react-router';
import { Header } from "../Header"
import { Loader } from "../Loader"
import { SiteNavigation } from "../SiteNavigation";

export const PageLayout = () => {


    return (
        <div className="App">
            <SiteNavigation type='prev' />
            <Header />
            <Outlet />
            <SiteNavigation type='next' />
            {/* <Loader /> */}
        </div>
    )
}