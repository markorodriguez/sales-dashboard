/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "mblack": "#252A34",
        "mwhite": "#EAEAEA"
      },
      backgroundImage:{
        'login': "url('/img/login.jpg')"
      }
    },
  },
  plugins: [],
}