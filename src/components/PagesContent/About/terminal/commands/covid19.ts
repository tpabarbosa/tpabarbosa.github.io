import { Command, CommandProps } from "react-dos-terminal";
import { getConfigPrompt, getHistory, setAchieved } from "../helpers";

export const covid19 = (lang: "PT-BR" | "EN") => {
  const part = 4;

  const helpText = {
    "PT-BR": ["Este comando exibe a primeira parte da história."],
    EN: ["This command shows the history first part."],
  };

  const text = getHistory(part, lang);

  const run = ({ args }: CommandProps): Command => {
    const final = text.map((paragraph) => {
      return { action: "add" as const, value: paragraph };
    });

    setAchieved(part);

    return {
      output: final,
      configTerminal: getConfigPrompt(lang),
    };
  };

  return {
    run,
    help: helpText[lang],
  };
};
