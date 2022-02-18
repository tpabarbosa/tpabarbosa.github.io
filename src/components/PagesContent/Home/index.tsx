import { Background } from "../../PageLayout/Background";
import { usePage } from "../../PageLayout";
import * as S from "./styles";
import { data } from "./data";
import background from "../../../assets/images/hNXv7eCDkEA7df22j0bfvVHszpLr3f3BfFcL9Ahr.jpg";
import { Header } from "../../PageLayout/Header";

export const Home = () => {
    const page = usePage();

    return (
        <S.Section >
            <Background 
                url={background} 
                size={'cover'} 
                position={'0 -80px'} 
            />
            <Header 
                isLoaded={page.state==='LOADED' ? true : false} 
                title={data.title[page.lang]} 
                subtitle={data.paragraph[page.lang]} 
                link={
                    {
                        to:'/projects', 
                        text: data.link[page.lang],
                        onClick:() => page.dispatchAction('CHANGE_PAGE'), 
                    }
                } 
            />

        </S.Section>
    )
}