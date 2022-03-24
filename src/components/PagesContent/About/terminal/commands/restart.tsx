import { FormEvent } from "react";
import { Command, CommandScreen, Input, useInput, useTerminal } from "react-dos-terminal";
import { clearAchievementsStatus, getConfigPrompt } from "../helpers";

const question = {
    "PT-BR": "Você tem certeza de que gostaria de reiniciar o seu progresso? (S/N)",
    EN: "Are you sure you want to restart your progress? (Y/N)",
  }

export const restart = (lang: "PT-BR" | "EN") => {
  const helpText = {
    "PT-BR": [
      "O commando REINICIAR é utilizado para reiniciar o seu progresso.",
    ],
    EN: ["The RESTART command is used to clear your progress."],
  };

  const run = (): Command => {
    
    return {
      output: [{ action: "add" as const, value: question[lang] }],
      configTerminal: getConfigPrompt(lang),
      dynamic: {
        element: <Restart lang={lang}/>,
      },
    };
  };

  return {
    run,
    help: helpText[lang],
  };
};

type RestartProps = {
  lang: "EN" | "PT-BR"
}

export const Restart = ({lang}: RestartProps) => {
  const input = useInput();
  const terminal = useTerminal()

  const handleInput = (e: FormEvent<HTMLDivElement>) => {
      const ev = e.nativeEvent as InputEvent
      let char = ev.data
      if (char !== null) {
          char = char.toUpperCase()
      } else {
          char = ' '
      }
      if (char === 'y' || char === 'Y' || char === 's' || char === 'S') {
        const restarted = {
          "PT-BR": "Progresso reiniciado.",
          EN: "Progress restarted.",
        }
        e.preventDefault()
        clearAchievementsStatus();
        terminal.output.addToQueue([
            { action: 'add', value: ["", restarted[lang] , ""] },
        ])
        terminal.endRunningCommand()
        return
      }
      if (char === 'n' || char === 'N') {
        const notRestarted = {
          "PT-BR": "Seu progresso foi mantido.",
          EN: "Your progress has been maintained.",
        }
        e.preventDefault()
        terminal.output.addToQueue([
            { action: 'add', value: ["", notRestarted[lang] , ""] },
        ])
        terminal.endRunningCommand()
        return
      }
      e.preventDefault()
      terminal.output.addToQueue([
            { action: 'add', value: ["", question[lang] , ""] },
        ])
  }


  return (
    <CommandScreen>
      <Input
          onInput={(e: FormEvent<HTMLDivElement>) => handleInput(e)}
          id="dynamic_input"
          ref={input.ref}
          prompt=">>>"
      />
    </CommandScreen>
  );
};
