/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        CinemaNaranjo: "#ffaa00",
        CinemaGrisOscuro: "#131a21",
        CinemaGrisMedio: "#b6b8bf",
        CinemaGrisClaro: "#e6e9f2",
        CinemaColorPelicula: "#000",
      },
      fontFamily: {
        roboto: ['"Roboto Flex"', "sans-serif"],
        alpha: ['"Alfa Slab One"', "serif"],
        bebas: ['"Bebas Neue"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
