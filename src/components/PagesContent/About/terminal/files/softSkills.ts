import { getHistory } from "../helpers";

export const softSkills = (lang: "PT-BR" | "EN", partID: number) => {
  return getHistory(partID, lang);
};
