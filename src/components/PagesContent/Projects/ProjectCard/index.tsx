import { Project } from "../projects";
import * as S from "./styles";
import {techs} from "../projects";
import useLanguage from "../../../../Translation";
import { data } from "../data";
import { useToggler } from "../../../../toggler/useToggler";

type ProjectCardProps = {
    project: Project;
}


export const ProjectCard = ({project}: ProjectCardProps) => {
    const [lang] = useLanguage();
    const [isOpen, toggle] = useToggler(false);
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
            
            
            <S.Abstract>
                { isOpen && 
                    <>
                    { project.abstract[lang].map(paragraph => 
                    <p key={paragraph} dangerouslySetInnerHTML={{__html: paragraph}} />
                    )}
                    <div><span onClick={toggle}>{data.less[lang]}</span></div>
                    </>
                }
                { !isOpen &&
                <>
                    <p dangerouslySetInnerHTML={{ __html: project.abstract[lang][0] }} />
                    { project.abstract[lang].length > 1 && 
                        <div><span onClick={toggle}>{data.readmore[lang]}</span></div>
                    }
                </>
                }
                
            </S.Abstract>
            <S.Techs>{ project.techs && project.techs?.map(tech => (
                <S.Tech key={tech} color={techs[parseInt(tech)-1].color ?? 'red'}>
                    <span>{techs[parseInt(tech)-1].icon}</span>
                    <span>{techs[parseInt(tech)-1].name}</span>
                </S.Tech>
            ))}</S.Techs>
            
            <S.Links>
                { project.github && 
                    <a href={project.github} className='text-btn' target="_blank" rel="noreferrer">{data.code[lang]}</a>
                }
                { project.live && 
                    <a href={project.live} className='text-btn' target="_blank" rel="noreferrer">{data.live[lang]}</a>
                }
            </S.Links>

        </S.Container>
    )
}