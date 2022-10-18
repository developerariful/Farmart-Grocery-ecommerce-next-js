/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
  "./app/**/*.{js,ts,jsx,tsx}",  
],
  theme: {
    extend: {
      colors:{
   
        color :"#666666",
        primary:"#f0b12b",
        title:"#222222"
      }
    },
  },
  plugins: [],
}
