import { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../PageLayout";
import * as S from "./styles";

export const Home = () => {
    const page = useContext(PageContext);

    return (
        <S.Section >
            <div className={page.state==='LOADED' ? '' : 'hidden'}>
                <h1>Hi, my name is Tatiana Barbosa.</h1>
                <p>I am a self-taught full-stack developer. </p>
                <Link 
                    to='/projects' 
                    onClick={() => page.dispatchAction('CHANGE_PAGE')}
                >
                    <span>Check out some of my projects</span>
                    <span>{'  >'}</span>
                    <span>{'  >'}</span>
                    <span>{'  >'}</span>
                </Link>
            </div>
        </S.Section>
    )
}