import { Project, Tech } from "../projects";
import * as S from "./styles";
import {techs} from "../projects";
import { Link } from "react-router-dom";

type ProjectCardProps = {
    project: Project;
}

export const ProjectCard = ({project}: ProjectCardProps) => {
    
    return (
        <S.Container>
            <S.Name>{project.name && project.name}</S.Name>
            <S.Image>
                {project.image && 
                    <img 
                        src={project.image} 
                        alt={project.name ?? 'project cover'}
                    />
}
            </S.Image>
            
            
            <S.Abstract><em>{project.abstract}</em></S.Abstract>
            <S.Techs>{ project.techs && project.techs?.map(tech => (
                <S.Tech key={tech} color={techs[parseInt(tech)-1].color ?? 'red'}>
                    <span>{techs[parseInt(tech)-1].icon}</span>
                    <span>{techs[parseInt(tech)-1].name}</span>
                </S.Tech>
            ))}</S.Techs>
            
            <S.Links>
                { project.github && 
                    <a href={project.github} className='text-btn' >Code</a>
                }
                { project.live && 
                    <a href={project.live} className='text-btn' >Visit the website</a>
                }
            </S.Links>

        </S.Container>
    )
}