const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            'base-grean': '#529b02',
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
    ],
}
