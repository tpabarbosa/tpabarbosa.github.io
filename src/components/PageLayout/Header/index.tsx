import { Link } from "react-router-dom";
import * as S from "./styles";

type HeaderProps = {
    isLoaded?: boolean;
    title?: string;
    subtitle?: string;
    link?: {to: string, text: string, onClick: () => void};
    children?: React.ReactNode;
}

export const Header = ({isLoaded=true, title, subtitle, link, children}: HeaderProps) => {
    return (
        <S.Header className={isLoaded ? '' : 'hidden'} >
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
            {link && 
                <Link 
                    to={link.to} 
                    onClick={link.onClick}
                >
                    <span>{link.text}</span>
                    <span>{'  >'}</span>
                    <span>{'  >'}</span>
                    <span>{'  >'}</span>
                </Link>
            }   
            {children && children}
        </S.Header>
    )
}