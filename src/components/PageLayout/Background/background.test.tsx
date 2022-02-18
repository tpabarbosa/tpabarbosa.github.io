import { Background } from ".";
import { render, unmountComponentAtNode } from "react-dom";
import 'jest-styled-components';

describe("Background Component", () => {

    let container:HTMLDivElement | null;
    const url:string = './image-url'
    beforeEach(() => {
        // Configura um elemento do DOM como alvo do teste
        container = document.createElement("div");
        document.body.appendChild(container);

    });

    afterEach(() => {
        // Limpar ao sair
        unmountComponentAtNode(container as HTMLDivElement);
        container && container.remove();
        container = null;
    });

    it('renders a background image', () => {
        render(<Background url={url}/>, container);

        expect(container && container.querySelector("[data-testid='background']")).toHaveStyleRule('background-image', `url(${url})`);
        expect(container && container.querySelector("[data-testid='background']")).toHaveStyleRule('background-size', undefined);
        expect(container && container.querySelector("[data-testid='background']")).toHaveStyleRule('background-position', undefined);
    })

    it('sets background-size', () => {
        const size='100%';
        render(<Background url={url} size={size}/>, container);

        expect(container && container.querySelector("[data-testid='background']")).toHaveStyleRule('background-size', size);
        
    })

    it('sets background-position', () => {
        const position='0 0';
        render(<Background url={url} position={position}/>, container);

        expect(container && container.querySelector("[data-testid='background']")).toHaveStyleRule('background-position', position);
    })
})