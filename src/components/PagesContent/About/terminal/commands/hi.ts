import { Command } from "react-dos-terminal";
import { data } from "../../../Home/data";

export const hi = (lang: "PT-BR" | "EN") => {
  const helpText = {
    "PT-BR": ["Este comando exibe uma mensagem de..."],
    EN: ["This command prints a hello message"],
  };

  const run = (): Command => {
    const hint = {
      "PT-BR": [
        "Tente alguns outros comandos: &lt;projetos&gt;, &lt;contato&gt;",
        "",
      ],
      EN: ["Try some other commands: &lt;projects&gt;, &lt;contact&gt;", ""],
    };

    return {
      output: [
        {
          action: "add",
          value: [data.title[lang], ""],
        },
        {
          action: "add",
          value: [data.paragraph[lang], ""],
        },
        {
          action: "add",
          value: hint[lang],
        },
      ],
    };
  };

  return { run, help: helpText[lang] };
};
