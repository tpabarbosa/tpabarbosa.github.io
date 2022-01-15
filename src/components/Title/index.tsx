import * as S from "./styles";

type TitleProps = {
    isLoaded: boolean;
    children: React.ReactNode;
}

export const Title = ({isLoaded, children}: TitleProps) => {
    return (
        <S.Title className={isLoaded ? '' : 'hidden'} >
            {children}
        </S.Title>
    )
}