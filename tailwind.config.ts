import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4E4BE5",
        "primary-light": "#7B79F0",
        "primary-dark": "#3735B8",
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        "ink-2": "rgb(var(--ink-2-rgb) / <alpha-value>)",
        "ink-3": "rgb(var(--ink-3-rgb) / <alpha-value>)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2-rgb) / <alpha-value>)",
        amber: "#F59E0B",
        "amber-2": "#FCD34D",
        teal: "#0D9488",
        "teal-2": "#5EEAD4",
        coral: "#F97316",
        violet: "#4E4BE5",
        rose: "#E11D48",
        green: "#16A34A",
        "green-2": "#BBF7D0",
        sky: "#0EA5E9",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-dot": "pulseDot 1.5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        float: "float 4s ease-in-out infinite",
        "float-delayed": "float 4s ease-in-out 2.2s infinite",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "bar-fill": "barFill 1.5s cubic-bezier(0.22,1,0.36,1) forwards",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.8)", opacity: "0.4" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeUp: {
          to: { transform: "translateY(0)", opacity: "1" },
        },
        barFill: {
          from: { width: "0%" },
        },
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
export default config;
