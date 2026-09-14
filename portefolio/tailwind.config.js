/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0B1520",
          900: "#101E30",
          800: "#16283D",
          700: "#1D3350"
        },
        line: {
          500: "#2C4E70",
          400: "#385F86"
        },
        paper: "#E9EFF5",
        muted: "#93A7BC",
        amber: {
          500: "#FFB020",
          600: "#E2941A",
          400: "#FFC658"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(44,78,112,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(44,78,112,0.35) 1px, transparent 1px)",
        "blueprint-fine":
          "linear-gradient(rgba(44,78,112,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(44,78,112,0.16) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "64px 64px",
        "grid-fine": "16px 16px"
      }
    }
  },
  plugins: []
};
