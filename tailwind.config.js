/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "dytbank-primary": "#ffffff",
        "dytbank-secondary": "#c8040b",
      },
    },
    fontFamily:
    {
      Roboto: ["Roboto, sans-serif"],
    }
  },
  plugins: [],
}

