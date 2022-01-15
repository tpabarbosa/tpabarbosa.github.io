import { createContext } from 'react';
import { Outlet } from 'react-router';
import { Machine, useStateMachine } from '../../stateMachine/useStateMachine';
import { PageButtons } from "./PageButtons"
import { Loader } from "./Loader"
import { MenuNav } from './Navigation/MenuNav';
import { PrevNextNav } from "./Navigation/PrevNextNav";
import * as S from "./styles";

export type PageState = 'UNLOADED' | 'LOADED' | 'TRANSITIONING_PAGES' | 'MENU_NAV_IS_OPEN';

export type PageAction = 'FINISH_LOADING' | 'OPEN_MENU_NAV' | 'CLOSE_MENU_NAV' | 'CHANGE_PAGE' | 'FINISH_TRANSITIONING_PAGES';

export type PageStatus = {
    state: PageState
    dispatchAction: (action: PageAction) => void;
}

export const PageContext = createContext<PageStatus>({} as PageStatus);

export const PageLayout = () => {

    const pageMachine: Machine<PageState, PageAction> = {
        initialState: 'LOADED',
        states: {
            UNLOADED: {
                actions: {
                    FINISH_LOADING: {newState: 'LOADED'}
                }
            }, 
            LOADED: {
                actions: {
                    OPEN_MENU_NAV: {newState: 'MENU_NAV_IS_OPEN'},
                    CHANGE_PAGE: {newState: 'TRANSITIONING_PAGES'},
                }
            },
            MENU_NAV_IS_OPEN: {
                actions: {
                    CLOSE_MENU_NAV: {newState: 'LOADED'},
                    CHANGE_PAGE: {newState: 'TRANSITIONING_PAGES'},
                }
            }, 
            TRANSITIONING_PAGES: {
                actions: {
                    FINISH_TRANSITIONING_PAGES: {newState: 'LOADED'}
                }
            }
        }
    }

    const [state, dispatchAction] = useStateMachine(pageMachine);


    return (
        <PageContext.Provider value={{state, dispatchAction}} >
            <S.Page className="App">
                <S.FadeOut 
                    className={state}
                    onAnimationEnd={ () => dispatchAction('FINISH_TRANSITIONING_PAGES') }
                />

                <MenuNav />
                <PageButtons />
                <PrevNextNav type='prev' />
                <S.FadeIn className={state}>
                    <Outlet />
                </S.FadeIn> 
                <PrevNextNav type='next' />
                {/* <Loader /> */}
            </S.Page>
        </PageContext.Provider>
    )
}

