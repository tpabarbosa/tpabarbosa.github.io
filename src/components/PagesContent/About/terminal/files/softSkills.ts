import { getHistory } from "../helpers";

export const softSkills = (lang: "PT-BR" | "EN") => {
  const part = 3;
  return getHistory(part, lang);
};
