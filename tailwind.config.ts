import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E40AF",
          hover: "#1E3A8A",
          foreground: "#FFFFFF",
        },
        accent: {
          "uk-red": "#E11D48",
          "pakistan-green": "#00B140",
        },
        "muted-text": "rgba(11,18,32,0.68)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
        container: "var(--container-width)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        card: "var(--radius-card)",
        full: "9999px",
      },
      spacing: {
        section: "var(--space-section)",
        "section-lg": "var(--space-section-lg)",
        "section-xl": "var(--space-section-xl)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        "glow-primary": "var(--shadow-glow-primary)",
        "glow-hover": "var(--shadow-glow-hover)",
        "glow-green": "0 0 24px rgba(0, 177, 64, 0.12)",
        "glow-red": "0 0 24px rgba(225, 29, 72, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;