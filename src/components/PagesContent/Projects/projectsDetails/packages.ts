import { Project } from "./data";
import react_dos_terminal from "../../../../assets/images/react-dos-terminal.png";

export const packages: Project[] = [{
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
        "In addition to the main component, the package exposes a series of auxiliary components, hooks and helper methods. Those should make it easier to create custom commands and a custom filesystem that the developer might want to make available to the final users of the terminal.",
        "It was coded in Typescript and compiled to Javascript with <strong>rollup</strong> library and some of its plugins. Because this was my first published library, I had to understand the whole process of bundle files to distribuite, what took me some time of study.",
        "In this context, some unexpected problems were encountered, such as, how would be the best way to provide and consume a <strong>.woff</strong> file. Another initial dificult was to unify all type declarations in a single <em>index.d.ts</em>. To solve those kinds of problems I had to get involved with some of the rollup plugins.",
        "At this time, I was very comfortable with React API, even though I found some concepts that I didn't know yet, like <em>createRef</em>, <em>createElement</em> and <em>dangerouslySetInnerHTML</em>.",
        "I recognize that there is a lot of work to be done in this project, I am full of ideas to improve it, but my priorities are: to include unity and integration tests and also to automate documentation proccess.",
      ],
    },
    techs: ["2", "6", "8", "13", "14", "15"],
    github: "https://github.com/tpabarbosa/react-dos-terminal",
    live: "https://codesandbox.io/s/prod-sky-7k3iv?file=/src/App.js",
  },]