/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {    
      colors: {
      'blue-dark': '#25283D',
      'pink': '#DB5375',
      'pink-light': '#DC7F9B',
      'orange-light': '#FFD6AF',
      'brown-light': '#D1A872',
      'brown-dark': '#A96824',
      'yellow': '#E1CE7A',
    },
    fontFamily: {
        display: ['"Cabin Sketch"', 'system-ui', 'sans-serif'],
        body: ['"Lexend Deca"', 'system-ui', 'sans-serif']
    },
  },
  },
  plugins: [],
}
