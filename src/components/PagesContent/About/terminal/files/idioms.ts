export const idioms = (lang: "PT-BR" | "EN") => {
  const text = {
    "PT-BR": [
      "╔═══════════════════════════════════════╗",
      "║                                       ║",
      "║                IDIOMAS                ║",
      `║                                       ║ `,
      "╚═══════════════════════════════════════╝",
      "",
      "<h2>INGLÊS</h2>",
      "",
      "Leitura: ✮✮✮✮✮",
      "Escrita: ✮✮✮✮",
      "Conversação: ✮✮✮✮",
      "",
      "",
      "<h2>ESPANHOL</h2>",
      "",
      "Leitura: ✮✮✮✮",
      "Escrita: ✮✮",
      "Conversação: ✮✮✮",
    ],
    EN: [],
  };
  return text[lang];
};
