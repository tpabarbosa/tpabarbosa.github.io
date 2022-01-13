import { RouteObject } from "react-router";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { PageLayout } from "../components/PageLayout";
import { PageNotFound } from "../components/PageNotFound";
import { Projects } from "../components/Projects";
import { Home } from "../components/Home";

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

export const routesArray: string[] = ['/', '/projects', '/contact', '/about']
