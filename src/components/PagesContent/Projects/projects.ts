import { Language } from "../../../Translation"

export type Tech = {
    id: string;
    name: string;
    color?: string;
    icon?: string;
}

export type Project = {
    id: string;
    name: {[lang in Language]: string};
    image?: string;
    abstract: {[lang in Language]: string};
    techs?: string[];
    github?: string;
    live?: string;
}

export const techs: Tech[] = [
    {
        id: '1',
        name: 'Javascript',
    },
    {
        id: '2',
        name: 'Typescript',
    },
    {
        id: '3',
        name: 'HTML5',
    },
    {
        id: '4',
        name: 'CSS',
    },
    {
        id: '5',
        name: 'Git',
    },
    {
        id: '6',
        name: 'React.js',
    },
    {
        id: '7',
        name: 'React-router V6',
    },
    {
        id: '8',
        name: 'Styled-components',
    },
    {
        id: '9',
        name: 'HTML Canvas elements',
    },
    {
        id: '10',
        name: 'PHP',
    },
    {
        id: '11',
        name: 'JQuery',
    },
    {
        id: '12',
        name: 'Moodle',
    },
]

export const projects: Project[] = [
    {
        id: '1',
        name: {
            'PT-BR': 'Portfolio',
            'EN': 'Portfolio'
        },
        image: '/images/portfolio.png',
        abstract: {
            'PT-BR': 'Desenvolvi este portfolio.',
            'EN':'I designed and developed this portfolio site.' 
        },
        techs: ['2', '6', '7', '8'],
        github: 'https://github.com/tpabarbosa/tpabarbosa.github.io',
        live: 'https://tpabarbosa.github.io/',
    },
    {
        id: '2',
        name: {
            'PT-BR': 'Conceito de um Jogo',
            'EN': 'Game concept'
        },
        image: '/images/game-screenshot.png',
        abstract: {
            'PT-BR': 'Este é um jogo simples que foi feito com o propósito de aprender o básico de React.',
            'EN': 'This is a simple game concept that was made to learn React basics.'
        },
        techs: ['2', '6', '8', '9'],
        github: 'https://github.com/tpabarbosa/react-game-concept-with-canvas',
        live: 'https://react-game-concept-with-canvas.vercel.app/',
    },
    {
        id: '3',
        name: {
            'PT-BR': 'Site Cursinho Núcleo',
            'EN': 'Cursinho Núcleo Website'
        },
        image: '/images/cursinhonucleo.png',
        abstract: {
            'PT-BR': 'Este é um site produzido para vender cursos online, possui uma área administrativa em que o administrador pode criar e gerenciar cursos que estarão disponíveis para a venda. Este site também é integrado com a plataforma Moodle onde os conteúdos dos cursos são armazenados.',
            'EN': 'This is a website that sells online courses, it has an administration area where admins can create and manage courses that are available to sell. It is also integrated with a Moodle platform where courses contents are hosted.'},
        techs: ['10', '3', '4', '1', '11', '12'],
        live: 'https://cursinhonucleo.com.br',
    }
]