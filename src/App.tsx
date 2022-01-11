import { Theme } from "./theme/Theme";
import { ThemeTogglerButton } from "./theme/ThemeTogglerButton";

export const App = () => {

  return (
    <Theme >
      <div className="App">
        <ThemeTogglerButton  />
        <h1>Olá, Mundo!!</h1>
      </div>
    </Theme>
  );
}
