/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1800px",
      // => @media (min-width: 1536px) { ... }
      "4xl": "2100px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primaryBgColor: {
          DEFAULT: "#e2e2e3",
        },
        primaryColor: {
          DEFAULT: "#b80000",
        },
        secondaryColor: {
          DEFAULT: "black",
        },
      },
    },
    fontFamily: {
      headLine: ["Newsreader"],
    },
  },
  plugins: [],
};
