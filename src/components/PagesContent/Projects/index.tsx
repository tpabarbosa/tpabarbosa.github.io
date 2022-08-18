import * as S from "./styles";
import {games} from "./projectsDetails/games";
import { usePage } from "../../PageLayout";
import { Background } from "../../PageLayout/Background";
import { data } from "./data";
import background from "../../../assets/images/headlights-g1fe75e9e5_1920.jpg";
import { Header } from "../../PageLayout/Header";
import { websites } from "./projectsDetails/websites";
import { packages } from "./projectsDetails/packages";
import { mobile } from "./projectsDetails/mobile";
import { ProjectsList } from "./ProjectsList";
import { webapps } from "./projectsDetails/webapps";

export const Projects = () => {
    const page = usePage();
    
    return (
        <S.Main>
            <Background 
                url={background} 
                position={'0% 100%'} 
            />

            <Header 
                isLoaded={page.state==='LOADED' ? true : false} 
                title={data.title[page.lang]} 
                subtitle={data.paragraph[page.lang]} 
            />

            <ProjectsList 
                title={data.websites[page.lang]}
                projects={websites} 
            />

            <ProjectsList 
                title={data.webapps[page.lang]}
                projects={webapps} 
            />

            <ProjectsList 
                title={data.mobile[page.lang]}
                projects={mobile} 
            />

            <ProjectsList 
                title={data.packages[page.lang]}
                projects={packages} 
            />

            <ProjectsList 
                title={data.games[page.lang]}
                projects={games} 
            />

        </S.Main>
    )
}
