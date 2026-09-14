/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F5F0",
        surface: "#FFFFFF",
        line: "#E6E0D4",
        ink: {
          DEFAULT: "#1E2A28",
          soft: "#4B5A57",
          faint: "#8A948F",
        },
        clinical: {
          50: "#EEF2F9",
          100: "#DCE4F2",
          400: "#5872A0",
          600: "#2B4570",
          700: "#213555",
        },
        safe: {
          50: "#E9F5EF",
          100: "#CFEBDD",
          500: "#1F7A5C",
          600: "#186049",
        },
        danger: {
          50: "#FBEAE8",
          100: "#F5D2CD",
          500: "#B3261E",
          600: "#8F1E18",
        },
        warn: {
          50: "#FCF1E1",
          100: "#F7DFB8",
          500: "#B76E00",
          600: "#8F5600",
        },
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(30,42,40,0.06), 0 1px 1px rgba(30,42,40,0.04)",
      },
      keyframes: {
        pulseRing: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(179,38,30,0.35)" },
          "50%": { boxShadow: "0 0 0 8px rgba(179,38,30,0)" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

