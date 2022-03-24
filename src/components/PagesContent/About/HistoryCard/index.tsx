import useLanguage, { Language } from "../../../../Translation";
import { ParagraphsRenderer } from "../../../PageLayout/ParagraphsRenderer"
import * as S from "./styles";

type HistoryCardProps = {
    history: {
        title:{ [lang in Language]: string }
        content: { [lang in Language]: string[] }
    }
}

export const HistoryCard = ({history}: HistoryCardProps) => {
    const [lang] = useLanguage();

    return (
        <>
            <S.Name><h2>{history.title[lang]}</h2></S.Name>
            <ParagraphsRenderer data={history.content[lang]} noEmptyLines />
        </>
    )
}