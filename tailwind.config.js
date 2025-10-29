/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dojoBlack: "#0b0c10",
        dojoRed: "#c3073f",
        dojoGray: "#1f2833",
      },
      fontFamily: {
        code: ["Share Tech Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
