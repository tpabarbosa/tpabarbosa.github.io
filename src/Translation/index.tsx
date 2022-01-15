import { createContext, useContext, useState } from "react";
import localStorage from '../localStorage';

type LanguageContextType = {
    language: Language;
    dispatchLanguage: (lang: Language) => void;
}

export type Language = 'PT-BR' | 'EN';

const LanguageContext  = createContext<LanguageContextType>({} as LanguageContextType)

export const TranslatedApp: React.FC = ({children})=> {
    const lang = localStorage.get('config')?.lang as Language;
    const [language, setLanguage] = useState(lang ?? 'EN');

    const dispatchLanguage = (lang: Language) => {
        localStorage.set('config', {lang});
        setLanguage(lang);
    }

    return (
        <LanguageContext.Provider value={{language, dispatchLanguage}} >
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = (): [Language, () => void] => {
    const ctx = useContext(LanguageContext);

    const languageToggler = () => (
        ctx.language === 'PT-BR' ? ctx.dispatchLanguage('EN') : ctx.dispatchLanguage('PT-BR')
    );

    return [ctx.language, languageToggler];
};

export default useLanguage;