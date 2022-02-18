import { RouteObject } from "react-router";
import { About } from "../components/PagesContent/About";
import { Contact } from "../components/PagesContent/Contact";
import { PageLayout } from "../components/PageLayout";
import { PageNotFound } from "../components/PageNotFound";
import { Projects } from "../components/PagesContent/Projects";
import { Home } from "../components/PagesContent/Home";

export const routesList: RouteObject[] = [
    {
        path: '/',
        element: <PageLayout/>,
        children: [
            { index: true, element: <Home />},
            { path: 'projects', element: <Projects />},
            { path: 'contact', element: <Contact />},
            { path: 'about', element: <About />},
        ],
    },
    {
        path: '*',
        element: <PageNotFound />,
    },
];

export const routes = [
    { 
        path: '/',
        'PT-BR': 'página inicial',
        'EN': 'home'
    },
    {
        path: '/projects',
        'PT-BR': 'projetos',
        'EN': 'projects'
    },
    {
        path: '/about',
        'PT-BR': 'quem sou',
        'EN': 'about'
    },
    {
        path: '/contact',
        'PT-BR': 'contato',
        'EN': 'contact'
    },
]