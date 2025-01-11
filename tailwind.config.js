/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily : {
        pop : ["Poppins", "sans-serif"]
      },
      screens : {
        "xs" : { min : "320px", max : "575px"},
        "sm" : { min : "576px", max : "767px" },
        "md" : { min : "768px", max : "991px"},
        "lg" : { min : "992px", max : "1199px"}
      }
    },
  },
  plugins: [],
}