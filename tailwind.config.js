/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        activeColor:'#4A7353',
        deActiveColor:'#BACD92'
      }
    },
  },
  plugins: [],
}