/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'a-color': 'hsl(228, 45%, 44%)',
        'White': 'hsl(0, 0%, 100%)',
        'Light-gray': 'hsl(212, 45%, 89%)',
        'Grayish-blue': 'hsl(220, 15%, 55%)',
        'Dark-blue': 'hsl(218, 44%, 22%)',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

