import plugin from 'tailwindcss/plugin';
import tailwindcssAnimate from 'tailwindcss-animate';
import { theme } from './src/Themes/theme';

// Assign the configuration object to a variable
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
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: theme.colors,
      fontFamily: {
        heading: theme.fonts.heading,
        body: theme.fonts.body,
      },
      boxShadow: theme.shadows,
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
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
        "slide-in": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "scale-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" },
          "70%": { transform: "scale(0.9)", opacity: "0.9" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
        "fade-out": "fade-out 0.3s ease-in-out",
        "slide-in": "slide-in 0.4s ease-out",
        "slide-out": "slide-out 0.4s ease-in",
        "scale-in": "scale-in 0.2s ease-out",
        "scale-out": "scale-out 0.2s ease-in",
        "bounce-in": "bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      backgroundImage: {
        shimmer: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    plugin(({ addUtilities, matchUtilities, theme }) => {
      addUtilities({
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".backdrop-blur-xs": {
          "backdrop-filter": "blur(2px)",
        },
        ".text-shadow": {
          "text-shadow": "0 2px 4px rgba(0,0,0,0.1)",
        },
        ".text-shadow-sm": {
          "text-shadow": "0 1px 2px rgba(0,0,0,0.1)",
        },
        ".text-shadow-lg": {
          "text-shadow": "0 4px 8px rgba(0,0,0,0.1)",
        },
      });

      // Glass morphism utilities
      matchUtilities(
        {
          glass: (value) => ({
            backgroundColor: `rgba(255, 255, 255, ${value})`,
            backdropFilter: 'blur(12px)',
            borderRadius: theme('borderRadius.lg'),
            border: '1px solid rgba(255, 255, 255, 0.125)',
          }),
        },
        { values: theme('opacity') }
      );

      // Gradient text utilities
      matchUtilities(
        {
          "text-gradient": (value) => ({
            backgroundImage: `linear-gradient(${value})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }),
        },
        { values: theme('gradientColorStops') }
      );
    }),
  ],
};

// Export the configuration variable
export default tailwindConfig;
