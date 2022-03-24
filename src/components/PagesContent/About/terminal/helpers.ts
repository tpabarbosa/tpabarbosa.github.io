import localStorage from "../../../../localStorage";
import { data } from "../data";

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
    achievements &&
    achievements.status &&
    typeof achievements.status === "string"
  ) {
    return achievements.status;
  }
  return "00000";
};

export const isAchieved = (goal: number) => {
  const achievements = getAchievementsStatus();
  return achievements[goal] === "1";
};

export const setAchieved = (goal: number) => {
  if (!isAchieved(goal)) {
    const achievements = getAchievementsStatus();
    localStorage.set("achievements", {
      status: setCharAt(achievements, goal, "1"),
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
  return `${lang === "EN" ? "Your progress:" : "Seu progresso:"} %count/5 ${
    count === 5 ? `$_${getEndGameText(lang)}` : ""
  }$_$p$g`;
};

export const clearAchievementsStatus = () => {
  localStorage.set("achievements", {
    status: "00000",
  });
};

export const getHistory = (part: number, lang: "PT-BR" | "EN") => {
  const space = " ";
  const title = data.mainHistory[part].title[lang];

  const hint = {
    "PT-BR":
      part < 4
        ? [
            "► CONTINUA...",
            `<strong>Dica</strong>: <em>${
              data.mainHistory[part + 1].hint[lang]
            }</em>`,
          ]
        : [],
    EN:
      part < 4
        ? [
            "► TO BE CONTINUED...",
            `<strong>Hint</strong>: <em>${
              data.mainHistory[part + 1].hint[lang]
            }</em>`,
          ]
        : [],
  };

  const text = {
    "PT-BR": [
      "╔══════════════════════════════════════════════╗",
      `║ CONTINUANDO A HISTÓRIA - PARTE ${part + 1}             ║`,
      "║                                              ║",
      `║ ${title}${space.repeat(45 - title.length)}║ `,
      "╚══════════════════════════════════════════════╝",
      "",
      ...data.mainHistory[part].content[lang],
      "",
      ...hint[lang],
      "",
    ],
    EN: [
      "╔══════════════════════════════════════════════╗",
      `║ CONTINUING THE HISTORY - PART ${part + 1}              ║`,
      "║                                              ║",
      `║ ${title}${space.repeat(45 - title.length)}║ `,
      "╚══════════════════════════════════════════════╝",
      "",
      ...data.mainHistory[part].content[lang],
      "",
      ...hint[lang],
      "",
    ],
  };
  return text[lang];
};
