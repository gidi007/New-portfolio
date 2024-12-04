import plugin from 'tailwindcss/plugin';
import tailwindcssAnimate from 'tailwindcss-animate';
/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: {
          DEFAULT: "rgb(15, 23, 42)",
          dark: "rgb(2, 8, 23)",
        },
        background: {
          DEFAULT: "rgb(2, 8, 23)",
          light: "rgb(15, 23, 42)",
          accent: "rgb(30, 41, 59)",
        },
        foreground: {
          DEFAULT: "rgb(255, 255, 255)", // White for regular text
          header: "rgb(255, 180, 0)", // Yellow for headers
          muted: "rgb(203, 213, 225)", // Light gray for muted text
          accent: "rgb(255, 180, 0)", // Yellow for accent text
        },
        primary: {
          DEFAULT: "rgb(255, 180, 0)",
          foreground: "rgb(2, 8, 23)",
          hover: "rgb(230, 162, 0)",
        },
        secondary: {
          DEFAULT: "rgb(15, 23, 42)",
          light: "rgb(30, 41, 59)",
          foreground: "rgb(255, 255, 255)",
        },
        muted: {
          DEFAULT: "rgb(15, 23, 42)",
          foreground: "rgb(203, 213, 225)",
        },
        accent: {
          DEFAULT: "rgb(255, 180, 0)",
          foreground: "rgb(2, 8, 23)",
          hover: "rgb(230, 162, 0)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
        "fade-out": "fade-out 0.3s ease-in-out",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-balance": {
          "text-wrap": "balance",
        },
      });
    }),
  ],
};

module.exports = tailwindConfig;