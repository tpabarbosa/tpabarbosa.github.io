export const techs = (lang: "PT-BR" | "EN") => {
  const techs = [
    "<li>PHP</li>",
    "",
    "<li>Laravel</li>",
    "",
    "<li>HTML</li>",
    "",
    "<li>CSS</li>",
    "",
    "<li>Javascript</li>",
    "",
    "<li>JQuery</li>",
    "",
    "<li>Typescript</li>",
    "",
    "<li>ReactJs</li>",
    "",
    "<li>React Native</li>",
    "",
    "<li>Git</li>",
  ];

  const text = {
    "PT-BR": [
      "╔═══════════════════════════════════════╗",
      "║                                       ║",
      "║              TECNOLOGIAS              ║",
      `║                                       ║ `,
      "╚═══════════════════════════════════════╝",
      "",
      ...techs,
      "",
    ],
    EN: [],
  };
  return text[lang];
};
