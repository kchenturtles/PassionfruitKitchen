const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit', // add this
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
    './layouts/**/*.{html,js,md}',
    './static/**/*.{html,js,php}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2/1': '2fr 1fr',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
        rose: colors.rose,
        'plum': '#800080',
      }
    },
    fontFamily: {
      'sans': ['Verdana', 'sans-serif'],
      'serif': ['Garamond', 'serif'],
      'mono': ['Courier New', 'monospace'],
    },
    screens: {
      'xs': '436px',
      'sm': '670px',      
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
  },

  },
  plugins: [],
}