import { getHistory } from "../helpers";

export const objectives = (lang: "PT-BR" | "EN", partID: number) => {
  return getHistory(partID, lang);
};
