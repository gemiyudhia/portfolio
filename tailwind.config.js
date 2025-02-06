/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#583ebd",
        secondary: "#17171f",
      },
      boxShadow: {
        "thick-solid": "10px 10px 0px 0px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
