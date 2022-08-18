import { Project, Tech } from "./data";
import gamescreenshot from "../../../../assets/images/game-screenshot.png";
import tictactoe from "../../../../assets/images/tic-tac-toe.png";
import indianagenius from "../../../../assets/images/indiana-genius.png";
import towerdefense from "../../../../assets/images/tower-defense.png";

export const games: Project[] = [
  // Tic-tac-toe
  {
    id: "1",
    name: {
      "PT-BR": "Jogo da Velha",
      EN: "Tic Tac Toe",
    },
    image: tictactoe,
    abstract: {
      "PT-BR": [
        "É um jogo da velha com 3 modos de jogos diferentes:",
        "<ol>",
        "<li>Jogador vs Jogador Local</li>",
        "<li>Jogador vs Computador</li>",
        "<li>Jogador vs Jogador Online</li>",
        "</ol>",
        "Em relação ao modo jogador x computador não fiz nenhuma lógica muito especial para a AI, o computador simplesmente escolhe de maneira aleatória uma casa livre. Sei que poderia ter aplicado algum algoritmo, como por exemplo o <strong>minimáx</strong>, mas para implementar a ideia de maneira rápida optei pela solução mais simples.",
        "Já para o modo online criei um pequeno servidor <em>Node + Express + Socket.io</em> que fica responsável por conectar dois clientes quando estes solicitam um novo jogo. A cada jogada um dos clientes envia para o servidor a casa jogada e o servidor encaminha para o outro cliente a informação.", 
        "Da maneira que foi implementado o servidor não faz nenhuma verificação do estado do jogo, acredito que em um caso real o servidor deveria ser o detentor do estado e a cada jogada deveria fazer uma verificação da integridade do jogo.",
        "Além disso, poderia ser implementado um sistema de login que possibilitaria a persistência dos dados dos jogadores, como por exemplo nome, avatar, quantidade de jogos, tempo jogado, quantidade de vitórias, etc... Mas, novamente, a minha meta não era criar um jogo pronto para a produção, mas sim desenvolver um mínimo para demonstrar a ideia.",
      ],
      EN: [
        "Is a game of tic-tac-toe with 3 different modes:",
        "<ol>",
        "<li>Player vs Player Local</li>",
        "<li>Player vs Computer</li>",
        "<li>Player vs Player Online</li>",
        "</ol>",
        "In player x computer mode I did not make any special logic for the AI, the computer simply chooses a free cell randomly. I know that I could have applied some algorithm, like for example the <strong>minimax</strong>, but to implement the idea fastly I chose the solution that was as simple as possible.",
        "For the online mode I created a small server <em>Node + Express + Socket.io</em> that is responsible for connecting two clients when they request a new game. Each time a player makes a move it sends to server the cell played and the server sends the information to the other client.",
        "The way that the server was implemented it does not make any verification of the game state, I believe that in a real case the server should be the game master and at each move it should make a verification of the game integrity.",
        "Besides, I could have implemented a login system that would allow the persistence of the players data, like for example name, avatar, number of games, time played, number of victories, etc... But, my goal was not to create a game ready for production, but to develop a minimum bare to show the idea.",
      ],
    },
    techs: [
      Tech.Javascript, 
      Tech.HTML5, 
      Tech.CSS3, 
      Tech.NodeJs, 
      Tech.Express, 
      Tech.SocketIO, 
    ],
    github: "https://github.com/tpabarbosa/tic-tac-toe",
    live: "https://tpabarbosa-tic-tac-toe.herokuapp.com",
  },
  // Tower Defense
  {
    id: "2",
    name: {
      "PT-BR": "Defenda o Castelo",
      EN: "Tower Defense",
    },
    image: towerdefense,
    abstract: {
      "PT-BR": [
        "É um jogo do tipo defenda a torre, em que os inimigos caminham da direita para a esquerda e o jogador deve evitar a chegada dos mesmos atirando em direção à eles",
        "Trabalhei numa temática RPG, com monstros, esqueletos, zumbis, magos... Incluí também alguns outros elementos tais como:", 
        "<ul>",
        "<li>muros que auxiliam o jogador a se defender</li>",
        "<li>inimigos que atacam</li>",
        "<li>inimigos que ao serem mortos liberam bônus e moedas</li>", "<li>conclusão do jogo em 10 fases",
        "<li>chefões em algumas fases</li>",
        "<li>inimigos que ficam progressivamente mais fortes a cada fase</li>", "<li>efeitos sonoros e música de fundo</li>", 
        "<li>progresso salvo em <em>localStorage</em></li>", 
        "<li>gameloop utilizando <em>requestFrameAnimation</em></li>", 
        "<li>renderização utilizando <em>Canvas Context 2d</em>", 
        "</ul>",
        "Ao longo do projeto tive a oportunidade de estudar e ler sobre diversas técnicas de <strong>otimização</strong>, algumas delas já apliquei (como por exemplo, manter um <strong>cache</strong> das imagens) e outras ainda não (como por exemplo <strong><em>Object Pooling</em></strong>).", 
        "Acredito que o principal aprendizado que tive foi sobre o funcionamento do <em>Garbage Collector</em> do Javascript e a sua relevância nos casos em que se exige alta performance do código.",
        "Em termos de performance geral do jogo, implementei uma contagem de quadros por segundo, e conforme o desempenho do jogo diminui alguns efeitos visuais e sonoros são diminuídos também a fim de manter uma mínima qualidade de jogo.",
        "Apesar disso, dispositivos com pouca memória RAM podem não conseguir rodá-lo de maneira satisfatória, já que nem todas as técnicas de otimização foram aplicadas.",
      ],
      EN: [
        "It's a tower defense game, in which enemies walk from right to left and the player must avoid their arrival by shooting towards them",
        "I worked on an RPG theme, with monsters, skeletons, zombies, mages... I also included some other elements such as:",
        "<ul>",
        "<li>castle walls that help the player to defend himself</li>",
        "<li>enemies that attack</li>",
        "<li>enemies that when killed release bonuses and coins</li>", "<li>game completion in 10 stages</li>",
        "<li>bosses in some stages</li>",
        "<li>enemies that get progressively stronger with each level</li>", "<li>sound effects and background music</li>",
        "<li>progress saved to <em>localStorage</em></li>",
        "<li>gameloop using <em>requestFrameAnimation</em></li>",
        "<li>rendering using <em>Canvas Context 2d</em>",
        "</ul>",
        "Throughout the project I had the opportunity to study and read about several <strong>optimization</strong> techniques, some of which I have already applied (such as keeping <strong>cached</strong> images) and others no (like <strong><em>Object Pooling</em></strong>).",
        "I believe that the main learning I had was about how Javascrip's <em>Garbage Collector</em> works and its relevance in cases where high code performance is required.",
        "In terms of overall game performance, I've implemented a frame rate count, and as game performance drops some visual and sound effects are also dropped in order to maintain a minimal game quality.",
        "Despite this, devices with low RAM memory may not be able to run it satisfactorily, as not all optimization techniques have been applied.",
      ],
    },
    techs: [
      Tech.Javascript, 
      Tech.HTML5, 
      Tech.CSS3, 
      Tech.NoFramework, 
      Tech.HTMLCanvas,
      Tech.FontAwesome,
    ],
    github: "https://github.com/tpabarbosa/td-game",
    live: "https://tpabarbosa.github.io/td-game/",
  },
  // Indiana Genius
  {
    id: "3",
    name: {
      "PT-BR": "Indiana Genius",
      EN: "Simon Game",
    },
    image: indianagenius,
    abstract: {
      "PT-BR": [
        "É um <strong>jogo estilo genius</strong> que fiz no tema do Indiana Jones.",
        "Para os sons optei por utilizar o <em>Audio Context API</em>, criei notas musicais e associei cada nota a um dos botões do jogo. Aproveitei esta estrutura do <em>Audio Context API</em> para tocar o tema do filme na abertura e no fim do jogo.",
        "Ah, o som é meio irritante pois utilizei um timbre padrão! Até poderia melhorá-lo mas teria que baixar uma biblioteca ou criar um objeto <em>Periodic Wave</em> dentro do Audio Context, e de qualquer forma achei que não havia necessidade pra tanto.",
        "O jogador ganha se acertar uma sequência de 20 notas.",
      ],
      EN: [
        "This is a <strong>simon style game</strong> that I made in the theme of Indiana Jones.",
        "I chose to use the <em>Audio Context API</em> to create musical notes and associate each note with a button of the game. I used this <em>Audio Context API</em> to play the theme of the movie at the beginning and at the end of the game.",
        "The sound is a bit annoying because I used a default timbre! I could improve it but I would have to download a library or create a <em>Periodic Wave</em> object inside the Audio Context, and anyway I thought it wasn't necessary to do so.",
        "The player wins if he correctly sequences 20 notes.",
      ],
    },
    techs: [
      Tech.Javascript, 
      Tech.HTML5, 
      Tech.CSS3, 
      Tech.AudioContextAPI, 
      Tech.FontAwesome,
      Tech.NoFramework
    ],
    github: "https://github.com/tpabarbosa/indiana-genius-game",
    live: "https://tpabarbosa.github.io/indiana-genius-game/",
  },
  // Game Concept
  {
    id: "4",
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
        "In the beginning, the main purpose was to render a 'map' and a 'player', as well as give life to this player listening to keyboard events. Its movement should respect map's limits and should respect blocked paths, should not allow transposing 'walls' or 'big objects'.",
        "Finished those goals, I decided go a little further and include some enemies... then I came to study <em>Pac-Man</em> and ghosts' <em>artificial intelligence</em> implementation.",
        "I had many challenges along this project, at first I started updating game rendering based on <em>setInterval</em>, but that option didn't do very well, the game got laggy very quickly, so I had to refactor it to use <em>requestAnimationFrame</em>'",
        "Everything was working well when there was only one 'monster' chasing the player... with two monsters performance dropped a little bit, but with three monsters plus the 'coins' it was simply impossible to play. At this moment, I had to refactor rendering code. I created many layers of <em>CanvasElement</em> that re renders only if it's visually state changes. Nowadays this sounds so obvious, but when I started coding this project, it wasn't.",
        "Another problem that I had to deal with was keeping track of the game state, with the increase of the number of variables there is an exponential increase of possible combination of those variables. It becomes more and more difficult to assure if the conditions to do a state change are all satisfied. As I was looking for a solution, I came to study <strong>finite state machines</strong> and implemented a small machine of mine.",
        "Now, with states controlled and a reasonable rendering, I was able to focus my efforts in a system to allow 'level up'. I implemented a collect all coins objective to win a level and implemented a way to load different map configurations along levels.",
        "Finally, I put a little in game's <strong>user interface</strong>, improving the status bar with 'lives' counting, level display and score",
        "I do not think it is a totally finished project... I believe it has potential to improve in many aspects.",
      ],
    },
    techs: [
      Tech.Typescript, 
      Tech.ReactJs, 
      Tech.StyledComponents, 
      Tech.HTMLCanvas
    ],
    github: "https://github.com/tpabarbosa/react-game-concept-with-canvas",
    live: "https://react-game-concept-with-canvas.vercel.app/",
  },
]