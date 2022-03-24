import {
  colorsHelper,
  FakeCommand,
  FakeFile,
  fileSystemHelper,
} from "react-dos-terminal";
import { Hangman, hangman } from "./commands/Hangman/hangman";
import { about } from "./commands/about";
import { instructions } from "./files/instructions";
import { readme } from "./files/readme";
import { achievements } from "./commands/achievements";
import {
  createAchievementsStatus,
  getAchievementsCount,
  getPromptText,
} from "./helpers";
import { type } from "./commands/type";
import { breakout } from "./commands/break";
import { idioms } from "./files/idioms";
import { techs } from "./files/techs";
import { dictionary } from "./commands/dictionary";
import { softSkills } from "./files/softSkills";
import { covid19 } from "./commands/covid19";
import { restart } from "./commands/restart";

const initialOutput = {
  "PT-BR": [
    "Bem-vindo ao meu terminal",
    "",
    "Aqui você pode continuar lendo esta história, você só precisa descobrir como...",
    "",
  ],
  EN: [
    "Welcome to my terminal",
    "",
    "Here you can keep reading this history, you just have to find out how...",
    "",
  ],
};

const customCommands = (lang: "PT-BR" | "EN"): FakeCommand[] => {
  return [
    // {
    //   name: lang === "EN" ? "hi" : "ola",
    //   alias: ["hello"],
    //   action: hi(lang).run,
    //   help: hi(lang).help,
    // },
    {
      name: lang === "EN" ? "instructions" : "instrucoes",
      action: instructions(lang).run,
      help: instructions(lang).help,
    },
    {
      name: lang === "EN" ? "about" : "sobre",
      action: about(lang).run,
      help: about(lang).help,
    },
    {
      name: lang === "EN" ? "achievements" : "conquistas",
      action: achievements(lang).run,
      help: achievements(lang).help,
    },
    {
      name: "type",
      alias: ["cat", "open"],
      beforeFinishMiddleware: type(lang).middleware,
    },
    {
      name: lang === "EN" ? "restart" : "reiniciar",
      action: restart(lang).run,
      help: restart(lang).help,
    },
  ];
};

const customFiles = (lang: "PT-BR" | "EN"): FakeFile[] => {
  return [
    {
      name: "readme.txt",
      type: "text/plain",
      content: { text: readme(lang) },
      attributes: "p",
    },
    {
      name: "user",
      type: "directory",
      attributes: "p",
      content: [
        {
          name: "skills.txt",
          type: "text/plain",
          content: { text: softSkills(lang) },
          attributes: "ph",
          size: fileSystemHelper.getFakeFileSize([softSkills]),
        },
        {
          name: "idioms.rtf",
          type: "text/plain",
          content: { text: idioms(lang) },
          attributes: "p",
          size: fileSystemHelper.getFakeFileSize([idioms]),
        },
        {
          name: "techs.rtf",
          type: "text/plain",
          content: { text: techs(lang) },
          attributes: "p",
          size: fileSystemHelper.getFakeFileSize([techs]),
        },
      ],
    },
    {
      name: "utils",
      type: "directory",
      attributes: "p",
      content: [
        {
          name: "dictionary.exe",
          type: "application/executable",
          content: {
            action: dictionary().run,
            async: {
              waitingMessage: [
                "Loading dictionary data. Please wait...",
                "",
                "",
              ],
            },
            help: dictionary().help,
          },
          attributes: "p",
          size: fileSystemHelper.getFakeFileSize([dictionary]),
        },
        {
          name: "covid19.exe",
          type: "application/executable",
          content: {
            action: covid19(lang).run,
          },
          attributes: "p",
          size: fileSystemHelper.getFakeFileSize([covid19]),
        },
      ],
    },
    {
      name: "games",
      type: "directory",
      attributes: "p",
      content: [
        {
          name: "hangman.exe",
          type: "application/executable",
          content: {
            action: hangman,
            help: ["Just a hangman game"],
          },
          attributes: "p",
          size: fileSystemHelper.getFakeFileSize([Hangman]),
        },
        {
          name: "breakout.exe",
          type: "application/executable",
          content: {
            action: breakout(lang).run,
            //help: ["Just a hangman game"],
          },
          attributes: "p",
          size: fileSystemHelper.getFakeFileSize([Hangman]),
        },
      ],
    },
  ];
};

export const terminalConfig = (lang: "PT-BR" | "EN") => {
  createAchievementsStatus();
  return {
    commands: {
      customCommands: customCommands(lang),
    },
    fileSystem: {
      customFiles: customFiles(lang),
      systemPaths: ["", "system", "games"],
    },
    loadingScreen: {
      showLoadingScreen: "never" as const,
    },
    terminal: {
      colors: {
        background: colorsHelper.getColorByName("black"),
        color: colorsHelper.getColorByName("green"),
      },
      initialOutput: initialOutput[lang],
      autoFocus: false,
      defaultPrompt: getPromptText(lang),
      promptCallback: (prompt: string) => {
        return prompt.replace(/%count/gi, getAchievementsCount().toString());
      },
      shouldTypewrite: true,
    },
    shouldPersistUserData: true,
  };
};
