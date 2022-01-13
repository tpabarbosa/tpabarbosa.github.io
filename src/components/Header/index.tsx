import { Link } from "react-router-dom";
import { ThemeTogglerButton } from "../../Theme/ThemeTogglerButton";
import { useToggler } from "../../toggler/useToggler";
import * as S from "./styles";

export const Header = () => {
    const [isOpen, toggleIsOpen] = useToggler();

    const handleLinkClick = () => {
        isOpen && toggleIsOpen();
    }

    return (
        <S.Container>
            <S.Nav className={isOpen ? '' : 'nav-hidden'}>
                <Link to='/' onClick={handleLinkClick}><span>home</span></Link>
                <Link to='/projects' onClick={handleLinkClick}><span>projects</span></Link>
                <Link to='/contact' onClick={handleLinkClick}><span>contact</span></Link>
                <Link to='/about' onClick={handleLinkClick}><span>about me</span></Link>
            </S.Nav>
            <S.Buttons>
                <ThemeTogglerButton />
                <button onClick={toggleIsOpen} className='icon-btn'>    
                    {isOpen ? <span>X</span> : <span>&#9776;</span>}
                </button>
            </S.Buttons>
        </S.Container>
    )
}