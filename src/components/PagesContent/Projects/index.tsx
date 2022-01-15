import * as S from "./styles";
import {projects} from "./projects";
import { ProjectCard } from "./ProjectCard";
import { useContext } from "react";
import { PageContext } from "../../PageLayout";

export const Projects = () => {
    const page = useContext(PageContext);
    
    return (
        <S.Section>
            <S.Background />
            <S.Title className={page.state==='LOADED' ? '' : 'hidden'}>
                <h1>Projects</h1>
                <p>Those are some of my projects. </p>
            </S.Title>
            <S.Projects className={page.state==='LOADED' ? '' : 'hidden'}>
                {projects.map(project => 
                    <ProjectCard project={project} key={project.id} />
                )}
            </S.Projects>
        </S.Section>
    )
}
