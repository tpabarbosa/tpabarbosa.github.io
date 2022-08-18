import { Project } from "./data";
import githubprofile from "../../../../assets/images/github-profile-viewer.png";
import movieapp from "../../../../assets/images/movie-app.png";

export const webapps: Project[] = [
{
    id: "1",
    name: {
      "PT-BR": "Visualizador de Perfis do Github",
      EN: "Github Profile Viewer",
    },
    image: githubprofile,
    abstract: {
      "PT-BR": [
        "Este é um aplicativo web que permite a visualização de perfis do Github. O usuário inicia o processo digitando um nome de perfil, o aplicativo faz uma requisição a API do Github e, caso encontre, retorna os dados do perfil.",
        "É um projeto React implementado em Typescript, as requisições são feitas utilizando a <em>Fetch API</em> disponibilizada pelo Javascript e a manutenção do estado da aplicação foi feita utilizando o <em>Context API</em> do próprio React.",
        "Por ser um projeto relativamente simples, optei por dedicar bastante tempo ao estudo e aprofundamento dos testes tanto unitários quanto de integração. Também aproveitei para estudar algumas questões envolvendo acessibilidade, para isso utilizei a biblioteca <em>@axe-core/react</em> que facilita a detecção de problemas nesta área.",
        "Para auxiliar nos testes, e no desenvolvimento como um todo, foi utilizado a biblioteca <em>msw - Mock Service Worker</em> que intercepta as requisições e retorna dados mockados. Todos os componentes possuem testes.",
        "Para a estilização foi utilizado a biblioteca <em>styled-components</em>, buscando um resultado final responsivo que se adapta a diferentes tamanhos de tela. Além disso, foram desenvolvidos 2 temas, um claro e outro escuro.",
        "Outra funcionalidade importante, para diminuir o número de requisições feitas a API, foi a implementação de um <strong>cache em memória</strong> das buscas que já foram feitas, evitando uma nova requisição para buscar um mesmo usuário mais de uma vez.",
        ""
      ],
      EN: [
        "This is an web app that allows users to search and view Github profiles. The user starts the process by typing a profile name, then the application makes a request to the Github API and, if found, returns the profile data.",
        "It is a React project implemented in Typescript, the requests are made using the <em>Fetch API</em> provided by Javascript and the state management was implemented with the <em>Context API</em> of React.",
        "As it is a relatively simple project, I chose to dedicate a lot of time to the study and deepening of both unit and integration tests. I also took the opportunity to study some issues involving accessibility, for that I used the <em>@axe-core/react</em> library that facilitates the detection of problems in this area." ,
        "To help with the tests, and in the whole development, I used the <em>msw - Mock Service Worker</em> library that intercepts the requests and returns mocked data. All the components are tested.",
        "To style the application, I used the <em>styled-components</em> library, trying to get a final responsive result that adapts to different screen sizes. Besides, I developed 2 themes, one clear and one dark.",
        "Another important feature, to reduce the number of requests made to the API, is the implementation of a <strong>cache in memory</strong> of the searches that were already made, avoiding a new request to search for a user more than once.",
        ""
      ],
    },
    techs: ["2", "6", "8", "24", "25", "26"],
    github: "https://github.com/tpabarbosa/react-github-profile",
    live: "https://react-github-profile-tpabarbosa.vercel.app/",
  },
  {
    id: "2",
    name: {
      "PT-BR": "Aplicativo de Filmes",
      EN: "Movie App",
    },
    image: movieapp,
    abstract: {
      "PT-BR": [
        "Aplicativo que utiliza a API do <em>The Movie Database</em> para fazer buscas de filmes e gerenciar Listas que o usuário cria.",
        "Foi codificado em Typescript, HTML e CSS, sem o uso de frameworks ou bibliotecas. De uma maneira geral utilizei o paradigma de programação orientada a objetos, sendo que a principal classe criada foi chamada de AbstractComponent que os componentes implementam, promovendo assim um <strong>contrato</strong entre as diferentes partes do aplicativo.",
        "Ao longo do desenvolvimento precisei <em>criar</em> algumas soluções para problemas comuns:",
        "<ul>",
        "<li><strong>Roteamento:</strong> fiz o roteamento das páginas utilizando <em>URLSearchParams</em></li>",
        "<li><strong>Requisições à API:</strong> criei uma classe chamada de <em>HTTPClient</em> que utiliza internamente <em>XMLHttpRequest</em><li>",
        "<li><strong>Autenticação/Autorização:</strong> o token de sessão do usuário é armazenado em <em>cookie</em> e é enviado para a API com a requisição</li>",
        "</ul>",
        "As principais funcionalidades implementadas foram: ",
        "<ul>",
        "<li>busca de filmes</li>",
        "<li>visualização de detalhes do filme</li>",
        "<li>criação e remoção de listas</li>",
        "<li>adição e remoção de filmes às listas do usuário</li>",
        "<li>adição e remoção de filmes aos Favoritos do usuário</li>",
        "<li>possibilidade de dar uma nota de avaliação dos filmes</li>",
        "</ul>",
        "Apesar de ser um aplicativo simples, posso dizer que foi desafiador fazê-lo sem o uso de bibliotecas.", 
        "Considero um projeto ainda em construção, pois algumas partes do código precisam ser melhor organizadas, e, muito provavelmente, algumas novos componentes precisam ser criados para aumentar a abstração e para dividir melhor as responsabilidades, de forma a tornar o código mais claro e limpo.",
        "Também é necessário rever algumas interfaces, para que as tipagens fiquem mais fáceis de serem mantidas como o tempo."
      ],
      EN: [
        "Web App that uses the <em>The Movie Database</em> API to search for movies and manage Lists that the user creates.",
        "It was coded in Typescript, HTML and CSS, without the use of frameworks or libraries. From a general perspective, I used the object-oriented programming paradigm, creating the main class called <em>AbstractComponent</em> that the components implement, as a <strong>contract</strong> between the different parts of the application.",
        "During the development I had to <em>create</em> some solutions for common problems:",
        "<ul>",
        "<li><strong>Routing:</strong> I implemented the routing of the pages using <em>URLSearchParams</em></li>",
        "<li><strong>API Requests:</strong> I created a class called <em>HTTPClient</em> that uses internally <em>XMLHttpRequest</em></li>",
        "<li><strong>Authentication/Authorization:</strong> the user session token is stored in a <em>cookie</em> and is sent to the API at each request</li>",
        "</ul>",
        "The main features implemented were: ",
        "<ul>",
        "<li>search for movies</li>",
        "<li>view movie details</li>",
        "<li>creation and removal of Lists</li>",
        "<li>addition and removal of movies to the user's Lists</li>",
        "<li>addition and removal of movies to the user's Favorites</li>",
        "<li>possibility of rating the movies</li>",
        "</ul>",
        "Although it is a simple application, I can say that it was a challenge to make it without the use of libraries.",
        "I consider this project still in construction, as some parts of the code need to be better organized and some new components need to be created to increase abstraction and to better segregate responsibilities, so that code can be cleanner.",
        "It is also necessary to review some interfaces, to make the types more manageable throught time.",
      ],
    },
    techs: ["2", "27", "28"],
    github: "https://github.com/tpabarbosa/movie-search-app",
    live: "https://tpabarbosa.github.io/movie-search-app/",
  },
]