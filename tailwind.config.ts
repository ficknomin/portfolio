import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ededed",
        accent: "#818cf8",
        "accent-dim": "#6366f1",
        surface: "#0a0a0a",
        "surface-light": "#141414",
        muted: "#737373",
        border: "#252525",
      },
      fontFamily: {
        display: ["var(--font-jetbrains)", "monospace"],
        body: ["var(--font-geist)", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        "marquee-reverse": "marquee-reverse 50s linear infinite",
        "orb-float": "orb-float 20s ease-in-out infinite",
        "orb-float-delayed": "orb-float-delayed 25s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "orb-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "orb-float-delayed": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-40px, 30px) scale(0.95)" },
          "66%": { transform: "translate(25px, -35px) scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
