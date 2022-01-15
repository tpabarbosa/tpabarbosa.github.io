import { useContext } from "react";
import { Link } from "react-router-dom";
import useLanguage from "../../../Translation";
import { Background } from "../../Background";
import { PageContext } from "../../PageLayout";
import { Title } from "../../Title";
import * as S from "./styles";
import { data } from "./data";

export const Home = () => {
    const page = useContext(PageContext);
    const [lang] = useLanguage();

    return (
        <S.Section >
            <Background 
                url={'/images/hNXv7eCDkEA7df22j0bfvVHszpLr3f3BfFcL9Ahr.jpg'} 
                size={'cover'} 
                position={'0 0'} 
            />
            <Title isLoaded={page.state==='LOADED' ? true : false} >
                <h1>{data.title[lang]}</h1>
                <p>{data.paragraph[lang]} </p>
                <Link 
                    to='/projects' 
                    onClick={() => page.dispatchAction('CHANGE_PAGE')}
                >
                    <span>{data.link[lang]}</span>
                    <span>{'  >'}</span>
                    <span>{'  >'}</span>
                    <span>{'  >'}</span>
                </Link>
            </Title>
        </S.Section>
    )
}