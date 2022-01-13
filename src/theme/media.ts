import { css } from "styled-components"

const sizes = {
    uhd: 1980,
    widescreen: 1366,
    desktop: 1024,
    tablet: 768,
}

export type MediaSize = 'uhd' | 'widescreen' | 'desktop' | 'tablet';

export type MediaType = {
    [media in MediaSize]: (args: TemplateStringsArray, ...interpolations: any) =>{}
}

export default Object.keys(sizes).reduce((acc:MediaType, label: string) => {
    const media = label as MediaSize;

    acc[media] = (args,...interpolations) => css`
        @media (min-width: ${sizes[media]}px) {
            ${css(args, ...interpolations)}
        }
    `
    return acc
}, {} as MediaType)
