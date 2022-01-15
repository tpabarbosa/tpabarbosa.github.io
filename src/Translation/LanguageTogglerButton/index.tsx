import useLanguage from '..';

export const LanguageTogglerButton = () => {
  const [language, languageToggler] = useLanguage();

  return (
        <button onClick={languageToggler} className='icon-btn'>
          {language === 'PT-BR' ? <span >PT</span> : <span >EN</span>}
        </button>
    );
}



