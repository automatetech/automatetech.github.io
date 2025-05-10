import { type Config } from "tailwindcss";
import themeVariables from "./tailwind/plugins/themeVariables";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables class-based dark mode support
  theme: {
    extend: {
      colors: {
        // Light Theme
        surface: {
          DEFAULT: "#FAFAF9", // Surface/Neutral (0.5)
          secondary: "#FF7A74", // Surface/Secondary (100)
        },
        primary: "#005C5C", // Primary 100
        "primary-dark": "#003F3F", // Primary 120
        text: {
          DEFAULT: "#292926", // Neutral 9
          primary: "#005C5C", // Primary 100
          secondary: "#FF7A74", // Secondary 100
          neutral: "#51514A", // Neutral 7
          muted: "#A3A39B", // Neutral 5
        },
        border: {
          DEFAULT: "#FAFAF9", // Border/Neutral (0.5)
          secondary: "#FF7A74",
        },

        // Dark Theme (with Tailwind `dark:` variant)
        dark: {
          surface: {
            DEFAULT: "#292926", // Neutral 9
            secondary: "#005C5C", // Reversed roles
          },
          primary: "#FF7A74", // Reversed roles
          "primary-dark": "#E36B63", // approximation
          text: {
            DEFAULT: "#E2E1DA", // Neutral 3
            primary: "#FF7A74",
            secondary: "#005C5C",
            neutral: "#A3A39B",
            muted: "#75756C",
          },
          border: "#292926",
        },
      },
      spacing: {
        xxxs: "0.125rem", // 2px
        xxs: "0.25rem",   // 4px
        xs: "0.5rem",     // 8px
        sm: "0.75rem",    // 12px
        md: "1rem",       // 16px
        lg: "1.5rem",     // 24px
        xl: "2rem",       // 32px
        xxl: "2.5rem",    // 40px
        xxxl: "3rem",     // 48px
        xxxxl: "4rem",    // 64px
      },
      borderRadius: {
        none: "0",
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "40px",
        xxxl: "64px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0px 2px 4px rgba(0, 0, 0, 0.05)",
        md: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        lg: "0px 8px 24px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [themeVariables],
};

export default config;