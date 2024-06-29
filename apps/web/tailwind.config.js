/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: "#041893",
          200: "#FDD513",
          300: "#1F82E8",
          400: "#D9D9D9",
        },
      },
      fontFamily: {
        'ptSans': ["PT Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

