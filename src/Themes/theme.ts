/* eslint-disable @typescript-eslint/no-unused-vars */
import { type ThemeConfig } from '../Types/themes';

const theme: ThemeConfig = {
  colors: {
    primary: {
      DEFAULT: 'rgb(255, 215, 0)',
      light: 'rgb(255, 235, 60)',
      dark: 'rgb(204, 172, 0)',
      foreground: 'rgb(10, 25, 41)',
      hover: {
        light: 'rgb(255, 225, 85)',
        dark: 'rgb(215, 155, 0)',
      },
      muted: 'rgba(255, 215, 0, 0.7)',
    },
    secondary: {
      DEFAULT: 'rgb(25, 33, 52)',
      light: 'rgb(40, 51, 69)',
      lighter: 'rgb(61, 75, 95)',
      dark: 'rgb(18, 25, 40)',
      foreground: 'rgb(248, 250, 252)',
    },
    background: {
      DEFAULT: 'rgb(10, 25, 41)',
      light: 'rgb(25, 33, 52)',
      lighter: 'rgb(40, 51, 69)',
      dark: 'rgb(1, 4, 12)',
      accent: {
        DEFAULT: 'rgb(30, 41, 59)',
        light: 'rgb(51, 65, 85)',
        dark: 'rgb(22, 31, 45)',
      },
    },
    foreground: {
      DEFAULT: 'rgb(248, 250, 252)',
      header: 'rgb(255, 215, 0)',
      subheader: 'rgb(255, 235, 60)',
      muted: 'rgb(180, 190, 210)',
      accent: 'rgb(255, 225, 40)',
      dark: 'rgb(130, 145, 165)',
      darker: 'rgb(90, 105, 125)',
      highlight: 'rgb(255, 215, 85)',
      light: 'rgb(255, 255, 255)', // Add the missing 'light' property
    },

    border: {
      DEFAULT: 'rgb(15, 23, 42)',
      dark: 'rgb(2, 8, 23)',
      light: 'rgb(51, 65, 85)',

      transparent: 'rgba(255, 255, 255, 0.1)',
    },
    accent: {
      DEFAULT: 'rgb(255, 215, 0)',
      light: 'rgb(255, 235, 60)',
      lighter: 'rgb(255, 245, 120)',
      dark: 'rgb(204, 172, 0)',
      darker: 'rgb(153, 129, 0)',
      foreground: 'rgb(2, 8, 23)',
      hover: 'rgb(230, 162, 0)',
      muted: 'rgba(255, 215, 0, 0.7)',
    },
    status: {
      success: {
        DEFAULT: 'rgb(34, 197, 94)',
        light: 'rgb(74, 222, 128)',
        dark: 'rgb(22, 163, 74)',
        foreground: 'rgb(255, 255, 255)',
      },
      warning: {
        DEFAULT: 'rgb(234, 179, 8)',
        light: 'rgb(250, 204, 21)',
        dark: 'rgb(202, 138, 4)',
        foreground: 'rgb(255, 255, 255)',
      },
      error: {
        DEFAULT: 'rgb(239, 68, 68)',
        light: 'rgb(248, 113, 113)',
        dark: 'rgb(220, 38, 38)',
        foreground: 'rgb(255, 255, 255)',
      },
      info: {
        DEFAULT: 'rgb(59, 130, 246)',
        light: 'rgb(96, 165, 250)',
        dark: 'rgb(37, 99, 235)',
        foreground: 'rgb(255, 255, 255)',
      },
    },
    code: {
      background: 'rgb(40, 51, 69)',
      text: 'rgb(248, 250, 252)',
      comment: 'rgb(130, 145, 165)',
      keyword: 'rgb(255, 215, 0)',
      string: 'rgb(129, 199, 132)',
      number: 'rgb(255, 167, 38)',
      function: 'rgb(144, 202, 249)',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.1)',
    DEFAULT: '0 2px 4px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.15), 0 2px 4px -2px rgb(0 0 0 / 0.15)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.25), 0 8px 10px -6px rgb(0 0 0 / 0.25)',
    glow: {
      DEFAULT: '0 0 15px rgb(255 215 0 / 0.5)',
      sm: '0 0 10px rgb(255 215 0 / 0.3)',
      lg: '0 0 20px rgb(255 215 0 / 0.6)',
      accent: '0 0 15px rgb(255 235 60 / 0.4)',
      text: '0 0 8px rgb(255 215 0 / 0.4)',
    },
    highlight: '0 0 10px rgb(255 215 85 / 0.2)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    text: {
      sm: '0 1px 2px rgb(0 0 0 / 0.1)',
      DEFAULT: '0 2px 4px rgb(0 0 0 / 0.1)',
      lg: '0 4px 6px rgb(0 0 0 / 0.1)',
    },
  },
  transitions: {
    DEFAULT: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out',
    bounce: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },
  blur: {
    none: '0',
    sm: '4px',
    DEFAULT: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px',
  },
  opacity: {
    0: '0',
    5: '0.05',
    10: '0.1',
    20: '0.2',
    25: '0.25',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    75: '0.75',
    80: '0.8',
    90: '0.9',
    95: '0.95',
    100: '1',
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    auto: 'auto',
  },
  gradients: {
    primary: 'linear-gradient(135deg, rgb(2, 8, 23) 0%, rgb(15, 23, 42) 100%)',
    accent: 'linear-gradient(135deg, rgb(255, 215, 0) 0%, rgb(230, 145, 0) 100%)',
    highlight: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
  },
} as const;
