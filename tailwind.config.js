/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        myBlue: "#DAE6F3",
      },
      backgroundColor: {
        "custom-cyan": "#22d3ee", // Ajout d'une couleur de fond personnalisée
      },
    },
  },
  plugins: [],
};
