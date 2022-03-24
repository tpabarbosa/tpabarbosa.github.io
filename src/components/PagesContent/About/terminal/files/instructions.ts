import { Command } from "react-dos-terminal";

export const instructions = (lang: "PT-BR" | "EN") => {
  const helpText = {
    "PT-BR": [
      "Este comando exibe algumas instruções sobre como usar o terminal.",
    ],
    EN: [
      "This command shows some instructions about how to interact with this terminal.",
    ],
  };

  const instruction = {
    "PT-BR": [
      "Neste terminal existem alguns arquivos e alguns comandos que você pode utilizar.",
      "",
      "Alguns deles contém partes da história que eu comecei a contar, outros são comandos e arquivos do próprio sistema, e outros são apenas coisas aleatórias.",
      "",
      "Sinta-se à vontade para explorar tudo!!",
      "",
      "Lembre-se, você pode simplesmente desligar o terminal clicando em <strong  style='border:1px solid'> Prefiro ler direto o texto! </strong> que está acima do terminal.",
      "",
      "Para acompanhar o seu progresso utilize o commando &lt;conquistas&gt;",
      "",
    ],
    EN: [
      "Here in this terminal there are some files and some commands that you might use.",
      "",
      "Some of then have parts of the history that I begun to tell you, some of then are built in system capabilities, and others are just random stuff.",
      "",
      "Feel free to explore them!!",
      "",
      "Remember, you can simple turn off terminal just by clicking on <strong style='border:1px solid'>I'd rather to read the text directly!</strong> that is above the terminal.",
      "",
      "To get the details about your progress you can use the command &lt;achievements&gt;",
      "",
    ],
  };

  const run = (): Command => {
    const final = instruction[lang].map((paragraph) => {
      return { action: "add" as const, value: paragraph };
    });

    return {
      output: final,
    };
  };

  return {
    run,
    help: helpText[lang],
  };
};
