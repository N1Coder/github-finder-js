/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
  darkMode: "class",
}
