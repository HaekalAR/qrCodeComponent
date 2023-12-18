/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "r-white": "hsl(0, 0%, 100%)",
      "r-lightgray": "hsl(212, 45%, 89%)",
      "r-grayishblue": "hsl(220, 15%, 55%)",
      "r-darkblue": "hsl(218, 44%, 22%)",
    },
  },
  plugins: [],
};
