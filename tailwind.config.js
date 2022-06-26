const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            aspectRatio: {
                '5/3': '5 / 3',
            },
        },
        colors: {
            'base-green': '#529b02',
            'secondary-green': '#6ec015',
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    daisyui: {
        themes: ['lemonade'],
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('daisyui'),
        require('tailwind-scrollbar-hide'),
        require('flowbite/plugin'),
        require('tw-elements/dist/plugin'),
    ],
}
