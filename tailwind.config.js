/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html',
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#871cf8',
        'background-100': '#1a1a1a',
        'background-200': '#292929',
        'background-300': '#404040',
        'background-400': '#5b5b5b',
      }
    },
  },
  plugins: [],
}

