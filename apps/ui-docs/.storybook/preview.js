import _ from '../node_modules/@oneline-design-ui/ui/dist/styles/design-system.scss'

//eslint-disable-next-line no-console
console.log('_', _)

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
