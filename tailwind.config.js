/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        metroRegular: ['"Metropolis Regular"'],
        metroMedium: ['"Metropolis Medium"'],
        metroSemibold: ['"Metropolis Semi Bold"'],
        metroBold: ['"Metropolis Bold"'],
      },
      colors: {
        primary: "#83C25F",
        secondary: "#23262F",
        secondary60: "rgba(35, 38, 47, 0.60)",
        lightGray: "#EFF0F1",
        gray: "#F6F7F9",
        dangerRed: "#E16351",
      },
      fontSize: {
        "3xl": "2rem",
      },

      boxShadow: {
        md: "0px 4px 20px rgba(0, 0, 0, 0.13)",
      },
    },
  },
  plugins: [],
};
