/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily : {
        pop : ["Poppins", "sans-serif"]
      },
      screens : {
        'sm': { min: "320px", max: "640px" }
      }
    },
  },
  plugins: [],
}