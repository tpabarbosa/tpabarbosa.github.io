import React from "react";
import * as S from "./styles";

type ParagraphsRendererProps = {
    data: string[]
    onlyFirst?: boolean
    noEmptyLines?: boolean
}

export const ParagraphsRenderer = ({data, onlyFirst=false, noEmptyLines=false}: ParagraphsRendererProps) => {
    return (
        <S.Content>
        {!onlyFirst && data.map((paragraph, index) => {
            if (paragraph!=='' || !noEmptyLines) {
                return <p key={`${index}|${paragraph}`} dangerouslySetInnerHTML={{__html: paragraph}} />  
            }
            return <React.Fragment key={`${index}|${paragraph}`}></React.Fragment>
        }
        )}
        {onlyFirst && 
            <p dangerouslySetInnerHTML={{ __html: data[0] }} />
        }
        </S.Content>
    )
}