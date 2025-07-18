import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ['"Source Sans Pro"', "sans-serif"],
        hoverage: ["Hoverage", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
