/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#ffd700',
      },
      fontFamily: {
        text: ['Angkor'],
      },
      colors: {
        stone: '#A8A8A8', // Replace with your desired stone color
      },
    },
  },
  plugins: [],
}
