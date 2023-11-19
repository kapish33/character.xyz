const defaultTheme = require('tailwindcss/defaultTheme');

export const fontFamily: CustomFontFamilies = {
    Montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
    'open-sans': ['Open Sans', ...defaultTheme.fontFamily.sans]
}

