/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'Black' : '#141414',
      'DarkGrey' : '#1F1F1F',
      'Grey' : '#333333',
      'NeonGreen' : '#C4F82A',
      'White' : '#FFFFFF'
    },
    fontFamily: {
      'sans' : 'Inter'
    },
    extend: {},
  },
  plugins: [],
}

