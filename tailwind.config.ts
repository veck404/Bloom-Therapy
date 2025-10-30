import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
          "2xl": "1440px",
        },
      },
      colors: {
        bloom: {
          lavender: "#757089",
          plum: "#4C1F39",
          dusk: "#5F566F",
          terracotta: "#934A3F",
          orchid: "#703A84",
          blush: "#F9F6FA",
          sand: "#F4EAE0",
          sage: "#CBD5D1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      fontSize: {
        "display-1": ["clamp(2.75rem, 2.2rem + 1.8vw, 4.75rem)", { lineHeight: "1.05" }],
        "display-2": ["clamp(2rem, 1.8rem + 0.8vw, 3.25rem)", { lineHeight: "1.1" }],
        eyebrow: ["0.75rem", { letterSpacing: "0.38em" }],
      },
      boxShadow: {
        soft: "0 20px 45px rgba(76, 31, 57, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
