import { css } from "styled-components"

const sizes = {
    uhd: 1980,
    widescreen: 1366,
    desktop: 1024,
    tablet: 768,
}

export type Medias = 'uhd' | 'widescreen' | 'desktop' | 'tablet';

export type MediaType = {
    [media in Medias]: (args: TemplateStringsArray, ...interpolations: any) =>{}
}

export default Object.keys(sizes).reduce((acc:MediaType, label: string) => {
    const media = label as Medias;

    acc[media] = (args,...interpolations) => css`
        @media (min-width: ${sizes[media]}px) {
            ${css(args, ...interpolations)}
        }
    `
    return acc
}, {} as MediaType)