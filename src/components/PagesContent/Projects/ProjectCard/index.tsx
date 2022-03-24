import { Project } from "../projects";
import * as S from "./styles";
import {techs} from "../projects";
import useLanguage from "../../../../Translation";
import { data } from "../data";
import { useToggler } from "../../../../toggler/useToggler";
import { ConditionalSpanTextButton } from "../../../PageLayout/ConditionalSpanTextButton";
import { ParagraphsRenderer } from "../../../PageLayout/ParagraphsRenderer";

type ProjectCardProps = {
    project: Project;
}


export const ProjectCard = ({project}: ProjectCardProps) => {
    const [lang] = useLanguage();
    const [isOpen, toggle] = useToggler(false);
    return (
        <S.Container>
            <S.Name><h2>{project.name && project.name[lang]}</h2></S.Name>
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
                <ParagraphsRenderer data={project.abstract[lang]} />
                }
                { !isOpen &&
                <ParagraphsRenderer data={project.abstract[lang]} onlyFirst/>
                }
                <ConditionalSpanTextButton 
                    conditionA={isOpen} 
                    textConditionA={data.less[lang]} 
                    conditionB={!isOpen && project.abstract[lang].length > 1} 
                    textConditionB={data.readmore[lang]} 
                    toggler={toggle} 
                />
                
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