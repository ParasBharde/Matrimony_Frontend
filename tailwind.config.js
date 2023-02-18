/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize:{
      '50%':'50%',
    },
    extend: {
      colors: {
        'main':"#F98B1D",
        'dark':"#1F1F1F"
      },
    },
  },
  plugins: [],
}