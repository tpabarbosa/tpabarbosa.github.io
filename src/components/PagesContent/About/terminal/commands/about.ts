import { Command } from "react-dos-terminal";
import { getConfigPrompt, getHistory, setAchieved } from "../helpers";

export const about = (lang: "PT-BR" | "EN", partID: number) => {
  const helpText = {
    "PT-BR": ["Este comando exibe a primeira parte da história."],
    EN: ["This command shows the history first part."],
  };

  const text = getHistory(partID, lang);

  const run = (): Command => {
    const final = text.map((paragraph) => {
      return { action: "add" as const, value: paragraph };
    });

    setAchieved(partID);

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
