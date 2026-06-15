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
        background: "#ffffff",
        surface: "#ffffff",
        foreground: "#1f2124",
        ink: "#1f2124",
        muted: "#5b6675",
        border: "#e4e8ed",
        line: "#e4e8ed",
        blush: "#f0f7ff",
        primary: "#e5006e",
        "primary-strong": "#c4005e",
        "primary-soft": "#f0f7ff",
        plum: "#e5006e",
        teal: "#5b6675",
        "teal-strong": "#3a4047",
        "teal-soft": "#f0f4f8",
        mist: "#f0f4f8",
        "primary-foreground": "#ffffff",
      },
      boxShadow: {
        card: "0 1px 2px rgba(31, 33, 36, 0.04), 0 8px 24px rgba(31, 33, 36, 0.06)",
        button: "0 2px 8px rgba(229, 0, 110, 0.14), 0 1px 2px rgba(229, 0, 110, 0.08)",
        input: "0 1px 0 rgba(31, 33, 36, 0.03)",
        soft: "0 1px 2px rgba(31, 33, 36, 0.03), 0 12px 32px rgba(31, 33, 36, 0.05)",
        elevated: "0 2px 4px rgba(31, 33, 36, 0.04), 0 16px 40px rgba(31, 33, 36, 0.07)",
      },
      fontSize: {
        "hero-mobile": ["2.75rem", { lineHeight: "1.02", letterSpacing: "-0.01em" }],
        hero: ["4.5rem", { lineHeight: "0.96", letterSpacing: "-0.015em" }],
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
