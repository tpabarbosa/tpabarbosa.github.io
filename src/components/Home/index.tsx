import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useToggler } from "../../toggler/useToggler";
import * as S from "./styles";

export const Home = () => {
    const [isOpen, toggleIsOpen] = useToggler();

    useEffect(() => {
        toggleIsOpen();
    },[])

    return (
        <S.Container>
            <div className={isOpen ? '' : 'hidden'}>
                <h1>Hi, my name is Tatiana Barbosa.</h1>
                <p>I am a self-taught full-stack developer. </p>
                <Link to='/projects'>
                    <span>Check out some of my projects</span>
                    <span>{'  >'}</span>
                    <span>{'  >'}</span>
                    <span>{'  >'}</span>
                </Link>
            </div>
        </S.Container>
    )
}