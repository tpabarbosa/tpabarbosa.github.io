import * as S from "./styles";
import {projects} from "./projects";
import { ProjectCard } from "./ProjectCard";
import { useContext } from "react";
import { PageContext } from "../../PageLayout";
import { Background } from "../../Background";
import { Title } from "../../Title";

export const Projects = () => {
    const page = useContext(PageContext);
    
    return (
        <S.Section>
            <Background 
                url={'/images/headlights-g1fe75e9e5_1920.jpg'} 
                position={'90% 0'} 
            />
            <Title isLoaded={page.state==='LOADED' ? true : false}>
                <h1>Projects</h1>
                <p>Those are some of my projects. </p>
            </Title>
            <S.Projects className={page.state==='LOADED' ? '' : 'hidden'}>
                {projects.map(project => 
                    <ProjectCard project={project} key={project.id} />
                )}
            </S.Projects>
        </S.Section>
    )
}
