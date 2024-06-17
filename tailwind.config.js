/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#222831',
        'secondary': '#393E46',
        'white': '#eeeeee',
      },
      fontFamily: {
        'poppins': ['Poppins',]
      },
    },
  },
  plugins: [],
}

