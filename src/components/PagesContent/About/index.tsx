import { Background } from "../../PageLayout/Background";
import * as S from "./styles";
import { data } from "./data";
import background from "../../../assets/images/hNXv7eCDkEA7df22j0bfvVHszpLr3f3BfFcL9Ahr.jpg";
import { Header } from "../../PageLayout/Header";
import { usePage } from "../../PageLayout";
import avatar from "../../../assets/images/hNXv7eCDkEA7df22j0bfvVHszpLr3f3BfFcL9Ahr.png";
import { Terminal } from "react-dos-terminal";
import { terminalConfig } from "./terminal/terminalConfig";
import { useToggler } from "../../../toggler/useToggler";
import { ParagraphsRenderer } from "../../PageLayout/ParagraphsRenderer";
import { HistoryCard } from "./HistoryCard";
import { useEffect, useRef } from "react";

export const About = () => {
    const page = usePage();
    const [hasChosen, toggleHasChosen] = useToggler(false)
    const [showTerminal, toggleShowTerminal] = useToggler(false)

    const pillsRef = useRef<HTMLDivElement | null>(null);

    const handlePillsClick = () => {
        !hasChosen && toggleHasChosen()
    }

    useEffect(() => {
        if(pillsRef.current && hasChosen) {
            pillsRef.current.scrollIntoView(true)
        }
    }, [pillsRef, hasChosen, showTerminal])

    return (
        <S.Main>
            <Background 
                url={background} 
                // size={'cover'} 
                position={'100% 100%'}  
            />
            <Header 
                isLoaded={page.state==='LOADED' ? true : false} 
                title={data.title[page.lang]} 
                subtitle={data.subtitle[page.lang]} 
                link={
                    {
                        to:'/contact', 
                        text: data.link[page.lang],
                        onClick:() => page.dispatchAction('CHANGE_PAGE'), 
                    }
                } 
            />
            <S.Article>
                <S.Introduction className={page.state==='LOADED' ? '' : 'hidden'}>
                    
                    <S.Text >
                        <ParagraphsRenderer data={data.introduction[page.lang]}/>
                    </S.Text>
                    <figure>
                        <S.Avatar url={avatar} />
                    </figure>
                    
                </S.Introduction>

                <S.Content className={page.state==='LOADED' ? '' : 'hidden'}>
                    <S.Text>
                        <ParagraphsRenderer data={data.firstCommands[page.lang]}/>
                    </S.Text>
                    
                </S.Content>

                <S.Content ref={pillsRef}>
                    <S.Text>
                        <ParagraphsRenderer data={data.invitation[page.lang]} />
                        <S.Pills onClick={handlePillsClick}>
                            <S.Pill active={hasChosen && !showTerminal} onClick={() => showTerminal && toggleShowTerminal()} >
                                <p>{data.toggleToTerminal[page.lang]}</p>
                            </S.Pill>
                            <S.Pill active={hasChosen && showTerminal} onClick={() => !showTerminal && toggleShowTerminal()} >
                                <p>{data.toggleToText[page.lang]}</p>
                            </S.Pill>
                        </S.Pills>
                    </S.Text>
                </S.Content>

                { hasChosen && !showTerminal && page.lang==='EN' &&
                    <S.Terminal>
                        <Terminal config={terminalConfig(page.lang)} id='TatiPortfolio'/>
                    </S.Terminal>
                }
                { hasChosen && !showTerminal && page.lang === 'PT-BR' &&
                    <S.Terminal>
                        <Terminal config={terminalConfig(page.lang)} id='TatiPortfolio'/>
                    </S.Terminal>
                }

                {showTerminal && 
                <>
                    
                        {data.mainHistory.map(history => 
                            <S.Content>
                                <S.Text>
                                    <HistoryCard key={history.id} history={history} />
                                </S.Text>
                            </S.Content>
                        )}
                        </>
                }
                    
            </S.Article>
        </S.Main>
    )
}