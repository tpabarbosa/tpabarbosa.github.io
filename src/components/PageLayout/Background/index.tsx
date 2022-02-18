import * as S from "./styles";

export type BackgroundProps = {
    url: string
    size?: string 
    position?: string
}

export const Background = (props: BackgroundProps) => {

    return (
        <S.Background {...props} data-testid="background"/>
    )
}