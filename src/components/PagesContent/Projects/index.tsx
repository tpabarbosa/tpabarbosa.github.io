import * as S from "./styles";
import {projects} from "./projects";
import { ProjectCard } from "./ProjectCard";
import { usePage } from "../../PageLayout";
import { Background } from "../../PageLayout/Background";
import { data } from "./data";
import background from "../../../assets/images/headlights-g1fe75e9e5_1920.jpg";
import { Header } from "../../PageLayout/Header";

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

            <S.Projects className={page.state==='LOADED' ? '' : 'hidden'}>
                {projects.map(project => 
                    <ProjectCard project={project} key={project.id} />
                )}
            </S.Projects>

        </S.Main>
    )
}
