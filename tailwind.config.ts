import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#5b13ec",
        "background-light": "#f6f6f8",
        "background-dark": "#161022",
      },
      fontFamily: {
        display: ["Space Grotesk"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
    },
  },
} satisfies Config;