import { Project, Tech } from "./data";
import cursinhonucleo from "../../../../assets/images/cursinhonucleo.png";
import ecommercefront from "../../../../assets/images/ecommerce-frontend-product_details.png";
import ecommerceback from "../../../../assets/images/ecommerce-backend.png";

export const websites: Project[] = [
    {
    id: "1",
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
        "One of the biggest challenges in this project was to make it alone in a short development period, and still working as a teacher. By that time I was re-studying some web concepts and I was starting to learn more modern Javascript frameworks. So I decided to make it in Jquery because I already knew it and had made some websites with it in the past.",
        "For the backend I have chosen PHP because it is easy to host it in shared server environments in Brazil. This website is hosted in <strong>Locaweb</strong>.",
        "In terms of architecture I tried to keep front and backend apart, all the communication between them is made by API calls.",
      ],
    },
    techs: [
      Tech.PHP, 
      Tech.Javascript, 
      Tech.HTML5, 
      Tech.CSS3, 
      Tech.JQuery, 
      Tech.MySQL,
      Tech.Moodle, 
      Tech.FontAwesome,
      Tech.InProduction
    ],
    live: "https://cursinhonucleo.com.br",
  },
  {
    id: "2",
    name: {
      "PT-BR": "Loja Virtual - Frontend",
      EN: "E-commerce Website - Frontend",
    },
    image: ecommercefront,
    abstract: {
      "PT-BR": [
        "Este é um exemplo de frontend de uma loja virtual que vende camisetas de futebol. Foi feito em React e Typescript.",
        "A ideia central deste projeto foi implementar frontend e backend em menos de 15 dias, portanto ainda não é uma solução completa, nem está pronta para produção.",
        "As principais funcionalidades são:",
        "<ul>",
        "<li>Cadastro e Login de usuários</li>",
        "<li>Adição, remoção e edição de produtos no carrinho de compras</li>",
        "<li>Adição e remoção de produtos da Lista de Desejos</li>",
        "<li>Busca de produtos por palavras-chave</li>",
        "<li>Exibição da lista de produtos de cada Categoria</li>",
        "<li>Exibição dos detalhes dos produtos</li>",
        "<li>Tema escuro e claro</li>",
        "</ul>",
        "Existem algumas funcionalidade que já estão prontas no backend, mas não foram adicionadas os frontend ainda, como por exemplo filtro de produtos por preço, por tamanho, etc. e adição de novas avaliações dos produtos.",
        "Também havia planejado algumas outras funcionalidades que devido ao prazo muito curto não foram iniciadas ainda, como por exemplo a verificação de emails, recuperação de senha esquecida, a criação de token de refresh de sessão e área administrativa."
      ],
      EN: [
        "This is an example of an e-commerce website frontend that mocks a jersey online store. It was made with React and Typescript.",
        "The idea for this project was to implement both frontend and backend in less than 15 days, so it's not a complete solution nor a production ready website.",
        "It's main features are:",
        "<ul>",
        "<li>User Register and Login</li>",
        "<li>Add, remove and edit items in Shopping Cart</li>",
        "<li>Add and remove items to user's Wish List</li>",
        "<li>Search products by keywords</li>",
        "<li>List products by Category</li>",
        "<li>Show product details</li>",
        "<li>Show product reviews</li>",
        "<li>Dark and Light Theme</li>",
        "</ul>",
        "There are some features that are ready at backend, but not yet implemented in frontend, like filter products by price, by size, etc., and add new reviews to products.",
        "Also there are some features that were planned but due to time restriction were not initialized, like email verification, password recovery, refresh token and admin area.",
      ],
    },
    techs: [
      Tech.Typescript, 
      Tech.ReactJs, 
      Tech.StyledComponents, 
      Tech.ReactRouter, 
      Tech.ReactIcons, 
      Tech.MockServiceworker, 
      Tech.ReactHookForm, 
      Tech.Yup
    ],
    github: "https://github.com/tpabarbosa/ecommerce-frontend",
    live: "https://ecommerce-frontend-delta.vercel.app/",
  },
    {
    id: "3",
    name: {
      "PT-BR": "Loja Virtual - Backend",
      EN: "E-commerce Website - Backend",
    },
    image: ecommerceback,
    abstract: {
      "PT-BR": [
        "Este é um exemplo de backend de uma loja virtual que vende camisetas de futebol. Foi feito em NodeJs, Express e Typescript. O banco de dados escolhido foi o PostgreSQL, hospedado na plataforma ElephantSQL.",
        "A ideia central deste projeto foi implementar frontend e backend em menos de 15 dias, portanto ainda não é uma solução completa, nem está pronta para produção.",
        "As principais funcionalidades são:",
        "<ul>",
        "<li>Cadastro e Login de usuários</li>",
        "<li>Adição, remoção e edição de produtos no carrinho de compras</li>",
        "<li>Adição e remoção de produtos da Lista de Desejos</li>",
        "<li>Busca de produtos por palavras-chave</li>",
        "<li>Listagem de produtos de cada Categoria</li>",
        "<li>Listagem dos detalhes dos produtos</li>",
        "<li>Adição e listagem de categorias, tamanhos, promoções, produtos e avaliações</li>",
        "</ul>",
        "Havia planejado algumas outras funcionalidades que devido ao prazo muito curto não foram iniciadas ainda, como por exemplo a verificação de emails, recuperação de senha esquecida, login social, token de refresh de sessão e completar as operações CRUD que estão faltando."
      ],
      EN: [
        "This is an example of an e-commerce website backend that mocks a jersey online store. It was made with NodeJs, Express and Typescript. The chosen database is PostgreSQL, hosted on ElephantSQL.",
        "The idea for this project was to implement both frontend and backend in less than 15 days, so it's not a complete solution nor a production ready website.",
        "It's main features are:",
        "<ul>",
        "<li>User Register and Login</li>",
        "<li>Add, remove and edit items in Shopping Cart</li>",
        "<li>Add and remove items to user's Wish List</li>",
        "<li>Search products by keywords</li>",
        "<li>List products by Category</li>",
        "<li>Show product details</li>",
        "<li>Show product reviews</li>",
        "<li>Add and list categories, sizes, sales, products e reviews</li>",
        "</ul>",

        "There are some features that were planned but due to time restriction were not initialized yet, like email verification, password recovery, social login, refresh token and complete all CRUD operations that are missing.",
      ],
    },
    techs: [
      Tech.Typescript, 
      Tech.NodeJs, 
      Tech.Express, 
      Tech.TypeORM, 
      Tech.Postgres, 
      Tech.Yup,
      Tech.JWT,
      Tech.RestAPI
    ],
    github: "https://github.com/tpabarbosa/ecommerce-backend",
    live: "https://tpabarbosa-ecommerce-backend.herokuapp.com/",
  },
]