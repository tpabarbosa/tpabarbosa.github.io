export type Tech = {
    id: string;
    name: string;
    color?: string;
    icon?: string;
}

export type Project = {
    id: string;
    name: string;
    image?: string;
    abstract: string;
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
        name: 'Portfolio',
        image: '/images/portfolio.png',
        abstract: 'I designed and developed this portfolio site',
        techs: ['2', '6', '7', '8'],
        github: 'https://github.com/tpabarbosa/tpabarbosa.github.io',
        live: 'https://tpabarbosa.github.io/',
    },
    {
        id: '2',
        name: 'Game concept',
        image: '/images/game-screenshot.png',
        abstract: 'This is a simple game concept that was made to learn React basics.',
        techs: ['2', '6', '8', '9'],
        github: 'https://github.com/tpabarbosa/react-game-concept-with-canvas',
        live: 'https://react-game-concept-with-canvas.vercel.app/',
    },
    {
        id: '3',
        name: 'Cursinho Núcleo Website',
        image: '/images/cursinhonucleo.png',
        abstract: 'This is a website that sells online courses, it has an administration area where admins can create and manage courses that are available to sell. It is also integrated with a moodle platform where courses are hosted.',
        techs: ['10', '3', '4', '1', '11', '12'],
        live: 'https://cursinhonucleo.com.br',
    }
]