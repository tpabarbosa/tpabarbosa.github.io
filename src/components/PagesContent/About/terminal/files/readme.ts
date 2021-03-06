import { getHistory } from "../helpers";

export const readme = (lang: "PT-BR" | "EN", partID: number) => {
  return getHistory(partID, lang);
};
