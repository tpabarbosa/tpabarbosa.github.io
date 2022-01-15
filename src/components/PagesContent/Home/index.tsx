import { useContext } from "react";
import { Link } from "react-router-dom";
import { Background } from "../../Background";
import { PageContext } from "../../PageLayout";
import { Title } from "../../Title";
import * as S from "./styles";

export const Home = () => {
    const page = useContext(PageContext);

    return (
        <S.Section >
            <Background 
                url={'/images/hNXv7eCDkEA7df22j0bfvVHszpLr3f3BfFcL9Ahr.jpg'} 
                size={'cover'} 
                position={'0 0'} 
            />
            <Title isLoaded={page.state==='LOADED' ? true : false} >
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
            </Title>
        </S.Section>
    )
}