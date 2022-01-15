import { Project } from "../projects";
import * as S from "./styles";
import {techs} from "../projects";
import useLanguage from "../../../../Translation";
import { data } from "../data";

type ProjectCardProps = {
    project: Project;
}

export const ProjectCard = ({project}: ProjectCardProps) => {
    const [lang] = useLanguage();

    return (
        <S.Container>
            <S.Name>{project.name && project.name[lang]}</S.Name>
            <S.Image>
                {project.image && 
                    <img 
                        src={project.image} 
                        alt={project.name[lang] ?? 'project cover'}
                    />
}
            </S.Image>
            
            
            <S.Abstract><em>{project.abstract[lang]}</em></S.Abstract>
            <S.Techs>{ project.techs && project.techs?.map(tech => (
                <S.Tech key={tech} color={techs[parseInt(tech)-1].color ?? 'red'}>
                    <span>{techs[parseInt(tech)-1].icon}</span>
                    <span>{techs[parseInt(tech)-1].name}</span>
                </S.Tech>
            ))}</S.Techs>
            
            <S.Links>
                { project.github && 
                    <a href={project.github} className='text-btn' >{data.code[lang]}</a>
                }
                { project.live && 
                    <a href={project.live} className='text-btn' >{data.live[lang]}</a>
                }
            </S.Links>

        </S.Container>
    )
}