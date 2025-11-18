/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#63C7A5",   //verde agua
        secondary: "#FFF2D0", //beige claro
        accent: "#028484",    //sueltito
        light: "#E47D07", //naranja  
      },
      keyframes: {
        fadeIn: {
            "0%": { opacity: 0, transform: "translateY(-5px)" },
            "50%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
      },
      fontFamily: {
        causten: ['Causten', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
