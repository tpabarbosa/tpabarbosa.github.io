import { ThemeTogglerButton } from "../../Theme/ThemeTogglerButton"
import { Outlet } from 'react-router';
import { Header } from "../Header"
import { Loader } from "../Loader"

export const PageLayout = () => {
    
    return (
        <div className="App">
            
            <Header />
            <Outlet />
            {/* <Loader /> */}
        </div>
    )
}