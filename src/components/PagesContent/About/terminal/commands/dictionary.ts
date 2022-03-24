import { Command, CommandProps, commandsHelper } from "react-dos-terminal";

export const dictionary = () => {
  const help = [
    `English dictionary from ${commandsHelper.link(
      "https://dictionaryapi.dev/",
      "Free Dictionary API"
    )}`,
    "",
    "To use the dictionary you must provide a word.",
    "",
    "DICTIONARY [word]",
    "",
  ];

  const run = async ({ args }: CommandProps): Promise<Command> => {
    if (!args) {
      return {
        output: [
          { action: "remove" as const, value: 3 },
          {
            action: "add" as const,
            value: [...help],
          },
        ],
      };
    }
    const words = args.split(" ");
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${words[0]}`
    );

    const data = await response.json();

    if (data[0]) {
      const final = data[0].meanings.map((meaning: any) => {
        const def = meaning.definitions.map((definition: any) => {
          return `    ✔ ${definition.definition}\n\n`;
        });

        const value = [
          `<h3>Part of speech: ${meaning.partOfSpeech}</h3>`,
          "",
          `<h4>Definition(s):</h4>`,
          "",
          ...def,
          "",
          "------------------------------------------------------",
          "",
        ];

        return { action: "add" as const, value };
      });

      return {
        output: [
          { action: "remove" as const, value: 3 },
          { action: "add" as const, value: [""] },
          ...final,
        ],
      };
    }

    return {
      output: [
        { action: "remove" as const, value: 3 },
        {
          action: "add" as const,
          value: [data.message ?? "Error: No Definitions Found", ""],
        },
      ],
    };
  };

  return { run, help };
};
