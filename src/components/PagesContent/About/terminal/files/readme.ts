import { getHistory } from "../helpers";

export const readme = (lang: "PT-BR" | "EN") => {
  const part = 1;
  return getHistory(part, lang);
};
