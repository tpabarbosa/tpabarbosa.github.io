import { usePage } from "../../../PageLayout";
import { Header } from "../../../PageLayout/Header";
import { ProjectCard } from "../ProjectCard";
import { Project } from "../projectsDetails/data";
import * as S from "./styles";

type ProjectsListProps = {
    title: string;
    projects: Project[];
}

export const ProjectsList = ({projects, title}:ProjectsListProps) => {
    const page = usePage();
    return (
        <S.ListWrapper>
            <Header 
                isLoaded={page.state==='LOADED' ? true : false} 
                title={title} 
            />
            <S.Projects className={page.state==='LOADED' ? '' : 'hidden'}>
                {projects.map(project => 
                    <ProjectCard project={project} key={`${title}-${project.id}`} />
                )}
            </S.Projects>
        </S.ListWrapper>
    )
}