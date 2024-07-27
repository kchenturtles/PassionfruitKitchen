module.exports = {
  mode: 'jit', // add this
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2/1': '2fr 1fr',
      },
    },
    fontFamily: {
      'sans': ['Verdana', 'sans-serif'],
      'serif': ['Garamond', 'serif'],
      'mono': ['Courier New', 'monospace'],
    },
  },
  plugins: [],
}