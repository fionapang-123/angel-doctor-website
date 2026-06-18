import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)", "var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#f8fbff",
        surface: "#ffffff",
        foreground: "#101828",
        ink: "#101828",
        muted: "#5e697b",
        border: "#dfe8f3",
        line: "#dfe8f3",
        blush: "#f8fbff",
        primary: "#d81b92",
        "primary-strong": "#d81b92",
        "primary-soft": "#eef6ff",
        plum: "#101828",
        teal: "#2664d9",
        "teal-strong": "#2664d9",
        "teal-soft": "#eef6ff",
        mist: "#f8fbff",
        gold: "#2664d9",
        "gold-soft": "#eef6ff",
        "primary-foreground": "#ffffff",
        "primary-light": "#2664d9",
        "primary-dark": "#101828",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.05), 0 14px 34px rgba(38, 100, 217, 0.08)",
        button: "0 18px 42px rgba(216, 27, 146, 0.18), 0 10px 28px rgba(38, 100, 217, 0.16)",
        input: "0 1px 0 rgba(16, 24, 40, 0.04)",
        soft: "0 1px 2px rgba(16, 24, 40, 0.04), 0 12px 28px rgba(38, 100, 217, 0.06)",
        elevated: "0 4px 10px rgba(16, 24, 40, 0.06), 0 22px 48px rgba(38, 100, 217, 0.10)",
      },
      fontSize: {
        "hero-mobile": ["2.55rem", { lineHeight: "1.04", letterSpacing: "0" }],
        hero: ["4.35rem", { lineHeight: "1", letterSpacing: "0" }],
      },
      borderRadius: {
        xs: "6px",
        sm: "8px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "24px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
