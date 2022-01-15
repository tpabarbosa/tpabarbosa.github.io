import useTheme from '..';

export const ThemeTogglerButton = () => {
  const [theme, themeToggler] = useTheme();

  return (
        <button onClick={themeToggler} className='icon-btn'>
          {theme === 'light' ? <span >☀</span> : <span >🌙</span>}
        </button>
    );
}

