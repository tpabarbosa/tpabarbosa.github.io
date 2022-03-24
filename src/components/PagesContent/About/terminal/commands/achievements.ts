import { Command } from "react-dos-terminal";
import { data } from "../../data";
import { isAchieved } from "../helpers";

export const achievements = (lang: "PT-BR" | "EN") => {
  const helpText = {
    "PT-BR": ["Este comando exibe as suas conquistas dentro do terminal."],
    EN: ["This command shows your achievements inside this terminal."],
  };

  const achieved = "<span style='font-size:24px'>🗹</span>";
  const notAchieved = "<span style='font-size:24px'>🗷</span>";

  const run = (): Command => {
    const final = data.mainHistory.map((part, index) => {
      return {
        action: "add" as const,
        value: [
          "-------------------------------------------------------------",
          `<h4>     ${isAchieved(index) ? achieved : notAchieved}      ${
            part.title[lang]
          }</h4>`,
          `     <em>${part.hint[lang]}</em>`,
          "",
        ],
      };
    });

    return {
      output: [
        ...final,
        {
          action: "add" as const,
          value: [
            "-------------------------------------------------------------",
            "",
          ],
        },
      ],
    };
  };

  return {
    run,
    help: helpText[lang],
  };
};
