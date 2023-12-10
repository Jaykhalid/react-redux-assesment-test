// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_4c": "#0000004c" },
        gray: { 100: "#f5f6fa", 500: "#adadad" },
        white: { A700: "#ffffff" },
        red: { A700: "#cb001e" },
      },
      fontFamily: { inter: "Inter", poppins: "Poppins", manrope: "Manrope" },
    },
  },
  plugins: [],
};
