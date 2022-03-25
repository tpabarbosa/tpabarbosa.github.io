import localStorage from "../../../../localStorage";
import { data } from "../data";

const NUM_OF_ACHIEVEMENTS = 6;
const EMPTY_ACHIEVEMENTS_STATUS = "0".repeat(NUM_OF_ACHIEVEMENTS);

const setCharAt = (str: string, index: number, chr: string) => {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
};

export const createAchievementsStatus = () => {
  const achievements = localStorage.get("achievements");
  if (!achievements) {
    clearAchievementsStatus();
  }
};

const getAchievementsStatus = () => {
  const achievements = localStorage.get("achievements");
  if (
    !achievements ||
    !achievements.status ||
    typeof achievements.status !== "string"
  ) {
    return EMPTY_ACHIEVEMENTS_STATUS;
  }

  return achievements.status;
};

export const isAchieved = (partID: number) => {
  const achievements = getAchievementsStatus();
  return achievements[partID - 1] === "1";
};

export const setAchieved = (partID: number) => {
  if (!isAchieved(partID)) {
    const achievements = getAchievementsStatus();
    localStorage.set("achievements", {
      status: setCharAt(achievements, partID - 1, "1"),
    });
  }
};

export const getAchievementsCount = () => {
  const achievements = getAchievementsStatus();
  return achievements.split("1").length - 1;
};

export const getConfigPrompt = (lang: "PT-BR" | "EN") => {
  return {
    config: "setPrompt" as const,
    value: getPromptText(lang),
  };
};

const getEndGameText = (lang: "PT-BR" | "EN") => {
  return lang === "EN"
    ? "$_✌ You found all missing parts!!$_$_Use < RESTART > command to clear your progress.$_"
    : "$_✌ Você encontrou todas as partes que faltavam!!$_$_Utilize o commando < REINICIAR > para apagar o seu progresso.$_";
};

export const getPromptText = (lang: "PT-BR" | "EN") => {
  const count = getAchievementsCount();
  return `${
    lang === "EN" ? "Your progress:" : "Seu progresso:"
  } %count/${NUM_OF_ACHIEVEMENTS} ${
    count === NUM_OF_ACHIEVEMENTS ? `$_${getEndGameText(lang)}` : ""
  }$_$p$g`;
};

export const clearAchievementsStatus = () => {
  localStorage.set("achievements", {
    status: EMPTY_ACHIEVEMENTS_STATUS,
  });
};

export const getHistory = (partID: number, lang: "PT-BR" | "EN") => {
  const space = " ";
  const title = data.mainHistory[partID - 1].title[lang];

  const hint = {
    "PT-BR":
      partID < NUM_OF_ACHIEVEMENTS
        ? [
            "",
            "► CONTINUA...",
            "",
            `  <strong>Dica para ajudar a encontrar a próxima parte</strong>:`,
            `     <em>${data.mainHistory[partID].hint[lang]}</em>`,
          ]
        : [],
    EN:
      partID < NUM_OF_ACHIEVEMENTS
        ? [
            "",
            "► TO BE CONTINUED...",
            "",
            `  <strong>Hint to help you find out the next part</strong>:`,
            `     <em>${data.mainHistory[partID].hint[lang]}</em>`,
          ]
        : [],
  };

  const text = {
    "PT-BR": [
      "╔══════════════════════════════════════════════╗",
      `║ CONTINUANDO A HISTÓRIA - PARTE ${partID}             ║`,
      "║                                              ║",
      `║ ${title}${space.repeat(45 - title.length)}║ `,
      "╚══════════════════════════════════════════════╝",
      "",
      ...data.mainHistory[partID - 1].content[lang],
      "",
      ...hint[lang],
      "",
    ],
    EN: [
      "╔══════════════════════════════════════════════╗",
      `║ CONTINUING THE HISTORY - PART ${partID}              ║`,
      "║                                              ║",
      `║ ${title}${space.repeat(45 - title.length)}║ `,
      "╚══════════════════════════════════════════════╝",
      "",
      ...data.mainHistory[partID - 1].content[lang],
      "",
      ...hint[lang],
      "",
    ],
  };
  return text[lang];
};
