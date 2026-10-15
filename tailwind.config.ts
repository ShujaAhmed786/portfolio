import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060D18",
          900: "#0A1628", // primary brand background
          850: "#0E1E36",
          800: "#132744",
          750: "#183256",
          700: "#1E3C66",
          600: "#2A5288",
        },
        teal: {
          accent: "#14B8A6",
          glow: "#2DD4BF",
          muted: "#0D9488",
          dark: "#0F766E",
          subtle: "rgba(20, 184, 166, 0.12)",
        },
        devops: {
          border: "#1E3A5F",
          borderLight: "#2E5584",
          card: "rgba(14, 30, 54, 0.75)",
          cardHover: "rgba(19, 39, 68, 0.9)",
          terminal: "#080F1C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(rgba(20, 184, 166, 0.15) 1px, transparent 1px)",
        "mesh-radial": "radial-gradient(circle at 50% 0%, rgba(20, 184, 166, 0.15) 0%, rgba(10, 22, 40, 0) 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(20, 184, 166, 0.08) 0%, rgba(10, 22, 40, 0.6) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-reverse": "floatReverse 10s ease-in-out infinite",
        "glow-line": "glowLine 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(25px) scale(0.95)" },
        },
        glowLine: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
