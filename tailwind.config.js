// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', ...fontFamily.sans],
        heading: ['var(--font-raleway)', ...fontFamily.sans],
      },
      colors: {
        primary: colors.neutral,
        gray: colors.neutral,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.neutral.900'),
              textDecoration: 'underline',
              textDecorationColor: theme('colors.neutral.400'),
              textUnderlineOffset: '3px',
              '&:hover': {
                color: theme('colors.neutral.800'),
                textDecorationColor: theme('colors.neutral.600'),
              },
              code: { color: theme('colors.neutral.800') },
            },
            'h1,h2,h3,h4': {
              fontWeight: '600',
              letterSpacing: '-0.025em',
            },
            code: {
              color: theme('colors.neutral.700'),
              backgroundColor: theme('colors.neutral.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.neutral.100'),
              textDecorationColor: theme('colors.neutral.700'),
              '&:hover': {
                color: theme('colors.neutral.200'),
                textDecorationColor: theme('colors.neutral.500'),
              },
              code: { color: theme('colors.neutral.200') },
            },
            'h1,h2,h3,h4': {
              color: theme('colors.neutral.100'),
            },
            code: {
              color: theme('colors.neutral.300'),
              backgroundColor: theme('colors.neutral.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
