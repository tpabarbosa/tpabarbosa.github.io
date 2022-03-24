import { Command, CommandProps } from "react-dos-terminal";
import { getConfigPrompt, setAchieved } from "../helpers";

export const type = (lang: "PT-BR" | "EN") => {
  const middleware = (
    props: CommandProps,
    command: Command | Promise<Command>
  ) => {
    const { args, currentDir } = props;

    if (args.toLowerCase() === "readme.txt" && currentDir === "") {
      setAchieved(1);
    } else if (
      args.toLowerCase() === "soft-skills.txt" &&
      currentDir === "user"
    ) {
      setAchieved(3);
    }

    return { ...command, configTerminal: getConfigPrompt(lang) };
  };

  return {
    middleware,
  };
};
