import { Language } from "../../../Translation";
import cursinhonucleo from "../../../assets/images/cursinhonucleo.png";
import react_dos_terminal from "../../../assets/images/react-dos-terminal.png";
import gamescreenshot from "../../../assets/images/game-screenshot.png";

export type Tech = {
  id: string;
  name: string;
  color?: string;
  icon?: string;
};

export type Project = {
  id: string;
  name: { [lang in Language]: string };
  image?: string;
  abstract: { [lang in Language]: string[] };
  techs?: string[];
  github?: string;
  live?: string;
};

export const techs: Tech[] = [
  {
    id: "1",
    name: "Javascript",
  },
  {
    id: "2",
    name: "Typescript",
  },
  {
    id: "3",
    name: "HTML5",
  },
  {
    id: "4",
    name: "CSS",
  },
  {
    id: "5",
    name: "Git",
  },
  {
    id: "6",
    name: "ReactJs",
  },
  {
    id: "7",
    name: "react-router V6",
  },
  {
    id: "8",
    name: "styled-components",
  },
  {
    id: "9",
    name: "HTML Canvas elements",
  },
  {
    id: "10",
    name: "PHP",
  },
  {
    id: "11",
    name: "JQuery",
  },
  {
    id: "12",
    name: "Moodle",
  },
  {
    id: "13",
    name: "rollup",
  },
  {
    id: "14",
    name: "npm",
  },
  {
    id: "15",
    name: "dompurify",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    name: {
      "PT-BR": "Biblioteca react-dos-terminal",
      EN: "react-dos-terminal Package",
    },
    image: react_dos_terminal,
    abstract: {
      "PT-BR": [
        "Esta é uma biblioteca de Componentes React, publicado na plataforma <strong>npm</strong>, que simula um terminal de linha de comando - <em>prompt</em> - do sistema operacional DOS.",
        "Além do componente principal, o pacote expõe uma série de componentes auxiliares, hooks e métodos que tem como finalidade facilitar a criação de commandos e de um sistema de arquivos que o desenvolvedor queira disponibilizar aos usuários do seu terminal.",
        "Foi escrito em Typescript e para compilação em Javascript foi utilizado o pacote <strong>rollup</strong> com alguns plugins.",
        "Por ter sido a minha primeira biblioteca publicada tive que entender todo o processo da criação dos pacotes para a distribuição, o que consumiu um certo tempo de estudo.",
        "Neste contexto alguns problemas inesperados surgiam, como por exemplo, qual seria a melhor maneira de disponibilizar e consumir um arquivo <strong>.woff</strong> junto aos outros arquivos <em>js</em> do pacote. Outra dificuldade inicial foi como unificar todos os arquivos de declaração de tipos em um só <em>index.d.ts</em>. Com isso precisei me envolver com os plugins do rollup para encontrar uma solução para cada um dos problemas.",
        "Em relação à API do react eu já estava bastante confortável, mas precisei estudar alguns conceitos que ainda não conhecia, como por exemplo <em>createRef</em>, <em>createElement</em> e <em>dangerouslySetInnerHTML</em>.",
        "Ainda há muito trabalho a ser realizado neste projeto, tenho muitas ideias de melhorias, mas as prioridades são: incluir testes unitários e de integração e automatizar a documentação.",
      ],
      EN: [
        "This is a library of React Components, published in <strong>npm</strong> platform. It mocks a terminal command line - <em>prompt</em> - of a DOS operational system.",
        "In addition to the main component, the package exposes a series of auxiliaries components, hooks and helper methods. Those should make easier to create custom commands and a custom filesystem that the developer might want to make available to final users of the terminal.",
        "It was coded in Typescript and compiled to Javascript with <strong>rollup</strong> library and some of it's plugins. Because this was my first published library, I had to understand the whole process of bundle files to distribuition, what took me some time of study.",
        "In this context, some unexpected problems were encountered, as an example, how would be the best way to provide and consume a <strong>.woff</strong> file. Another initial dificult was to unify all type declarations in a single <em>index.d.ts</em>. To solve those kind of problems I had to get envolved with some of the rollup plugins.",
        "At this time, I was very confortable with React API, even thought I found some concepts that I didn't know yet, like <em>createRef</em>, <em>createElement</em> and <em>dangerouslySetInnerHTML</em>.",
        "I recognize that there is a lot of work to be done in this project, I am full of ideas to improve it, but my priorities are: to include unity and integration tests and also to automate documentation proccess.",
      ],
    },
    techs: ["2", "6", "8", "13", "14", "15"],
    github: "https://github.com/tpabarbosa/react-dos-terminal",
    live: "https://codesandbox.io/s/prod-sky-7k3iv?file=/src/App.js",
  },
  {
    id: "2",
    name: {
      "PT-BR": "Conceito de um Jogo",
      EN: "Game concept",
    },
    image: gamescreenshot,
    abstract: {
      "PT-BR": [
        "Este é um jogo simples inspirado em <strong>Pacman</strong> que foi feito com o propósito de aprender o básico de React.",
        "Inicialmente a proposta era renderizar um 'mapa' e um 'jogador' e dar movimento a este jogador por meio de eventos de teclado. Este movimento deveria respeitar os limites do mapa e também deveriam existir lugares bloqueados, como 'paredes' ou 'obstáculos'.",
        "Primeira etapa construída, decidi avançar um pouco mais e colocar inimigos... fui estudar <em>Pacman</em> e a <em>inteligência artificial</em> dos seus fantasmas e assim surge este pequeno jogo.",
        "Foram vários os desafios ao longo do projeto, comecei marcando o tempo para executar as atualizações com <em>setInterval</em>, o que não se mostrou muito eficaz e acabei refatorando para <em>requestAnimationFrame</em>.",
        "Tudo funcionava bem enquanto havia apenas 1 'monstro' perseguindo o jogador...Com 2 monstros o desempenho caia um pouco, mas com 3 monstros e mais as 'moedas'... era impossível jogar. Neste momento tive que refatorar para otimizar o processo de renderização, criei várias camadas de <em>CanvasElement</em>, atualizando apenas a camada que passava por alguma alteração. Hoje me soa como algo bem óbvio, mas não era quando comecei o projeto.",
        "Outro problema que enfrentei foi manter o controle do estado do jogo, com o aumento das variáveis aumentam exponencialmente as possibilidades de combinação destas variáveis. Torna-se cada vez mais difícil verificar se as condições para uma mudança de estado estão todas satisfeitas. Buscando possíveis soluções acabei estudando sobre as <strong>máquinas de estados finitos</strong> e acabei implementando uma pequena máquina.",
        "Agora com os estados controlados e com a renderização ocorrendo de maneira razoável, pude concentrar os esforços em um sistema de avanço de 'níveis'. Implementei o objetivo de 'coletar todas as moedas' para finalizar um nível e implementei também uma maneira de carregar mapas diferentes ao longo dos níveis.",
        "Por fim me dediquei um pouco à <strong>interface do usuário</strong> do jogo, melhorando a barra de status com quantidade de 'vidas', número da fase e pontuação.",
        "Não considero um projeto totalmente acabado... acredito que tem potencial para melhorar em muitos aspectos.",
      ],
      EN: [
        "This is a simple game concept inspired by <strong>Pac-Man</strong> that I made to learn React basics.",
        "In the begining, the main purpose was to render a 'map' and a 'player', and give life to this player listening to keyboard events. Its movement should respect map's limits and should respect blocked paths, should not allow transposing 'walls' or 'big objects'.",
        "Finished those goals, I decided go a little further and include some enemies... then I came to study <em>Pac-Man</em> and ghosts' <em>artificial intelligence</em> implementation.",
        "I had many challenges along this project, at first I started updating game rendering based on <em>setInterval</em>, but that option didn't do very well, the game got laggy very quickly, so I had to refactor it to use <em>requestAnimationFrame</em>'",
        "Everything was working good when there was only one 'monster' chasing the player... with two monsters performance dropped a little bit, but with three monsters plus the 'coins' it was simply impossible to play. At this moment, I had to refactor rendering code. I created many layers of <em>CanvasElement</em> that re renders only if it's visually state changes. Nowadays this sounds so obvious, but when I started coding this project, it wasn't.",
        "Another problem that I had to deal with was keeping track of the game state, with the increase of the number of variables there is an exponential increase of possible combination of those variables. It becomes more and more difficult to assure if the conditions to do a state change are all satisfied. As I was looking for a solution, I came to study <strong>finite state machines</strong> and implemented a small machine of mine.",
        "Now, with states controlled and a reasonable rendering, I was able to focus my efforts in a system to allow 'level up'. I implemented a collect all coins objective to win a level and implemented a way to load different map configurations along levels",
        "Finally, I put a little in game's <strong>user interface</strong>, improving the status bar with 'lives' counting, level display and score",
        "I do not think it is a totally finished project... I believe it has potential to improve in many aspects.",
      ],
    },
    techs: ["2", "6", "8", "9"],
    github: "https://github.com/tpabarbosa/react-game-concept-with-canvas",
    live: "https://react-game-concept-with-canvas.vercel.app/",
  },
  {
    id: "3",
    name: {
      "PT-BR": "Site Cursinho Núcleo",
      EN: "Cursinho Núcleo Website",
    },
    image: cursinhonucleo,
    abstract: {
      "PT-BR": [
        "Este é um site produzido para vender cursos online, possui uma área administrativa em que é possível criar e gerenciar os cursos que estarão disponíveis para a venda.",
        "O site é integrado com a plataforma <strong>Moodle</strong>, onde os conteúdos dos cursos são armazenados, e também com o serviço de pagamentos <strong>PagSeguro</strong>.",
        "O backend foi feito em PHP puro, sem o uso de nenhum framework, já o frontend foi feito em HTML, CSS e JQuery.",
        "O grande desafio deste projeto foi fazê-lo sozinha em um curto prazo de desenvolvimento, ainda trabalhando como professora. Estava me atualizando em relação a alguns conceitos da web e iniciando meus estudos dos frameworks frontend mais modernos, por isso minha escolha pelo JQuery, pois já o conhecia e já havia montado sites com ele antes.",
        "Para o backend optei pelo PHP pela facilidade da sua utilização em servidores compartilhados nacionais, o site foi hospedado na <strong>Locaweb</strong>.",
        "Em termos de arquitetura busquei manter uma separação entre front e back, mantendo a comunicação entre eles sendo feita por meio de API.",
      ],
      EN: [
        "This is a website that sells online courses, it has an administration area where admins can create and manage courses that are available to sell.",
        "This website is integrated with a <strong>Moodle</strong> platform, where courses contents are hosted, and with a payment gateway service called <strong>PagSeguro</strong>.",
        "The backend was made in pure PHP, without a framework, and the frontend was made with HTML, CSS e JQuery.",
        "One of the biggest challenge in this project was make it alone in a short development period, and still working as a teacher. By that time I was re-studing some web concepts and I was starting to learn more modern Javascript frameworks. So I decided to made it in Jquery because I already knew it and had made some websites with it in the past.",
        "For the backend I have chosen PHP because it is easy to host it in shared server environments in Brazil. This website is hosted in <strong>Locaweb</strong>.",
        "In terms of architecture I tried to keep front and backend a part, All the comunication between them are made by API calls.",
      ],
    },
    techs: ["10", "3", "4", "1", "11", "12"],
    live: "https://cursinhonucleo.com.br",
  },
];
