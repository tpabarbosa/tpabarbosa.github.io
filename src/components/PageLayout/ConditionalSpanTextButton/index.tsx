import * as S from "./styles";

type ConditionalTextProps = {
    textConditionA: string
    textConditionB: string
    toggler: () => void
    conditionA: boolean
    conditionB: boolean
}


export const ConditionalSpanTextButton = ({textConditionA, textConditionB, toggler, conditionA, conditionB}: ConditionalTextProps) => {
    return (
        <>
        {(conditionA || conditionB) &&
            <S.Container>
            {conditionA &&
                <span onClick={toggler}>{textConditionA}</span> 
            }
            {conditionB &&
                <span onClick={toggler}>{textConditionB}</span>
            }
            </S.Container>
        }
        </>
    )
}