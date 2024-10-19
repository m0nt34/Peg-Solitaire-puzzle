/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#272727",
        grey: "#4E4E4E",
        dark_puple: "#69339b",
      },
    },
  },
  plugins: [],
};
