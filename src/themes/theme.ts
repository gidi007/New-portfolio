export const theme = {
  colors: {
    primary: {
      DEFAULT: 'rgb(255, 180, 0)',
      foreground: 'rgb(2, 8, 23)',
      hover: 'rgb(230, 162, 0)',
    },
    secondary: {
      DEFAULT: 'rgb(15, 23, 42)',
      light: 'rgb(30, 41, 59)',
      foreground: 'rgb(255, 255, 255)',
    },
    background: {
      DEFAULT: 'rgb(2, 8, 23)',
      light: 'rgb(15, 23, 42)',
      accent: 'rgb(30, 41, 59)',
    },
    foreground: {
      DEFAULT: 'rgb(255, 255, 255)',
      header: 'rgb(255, 180, 0)',
      muted: 'rgb(203, 213, 225)',
      accent: 'rgb(255, 180, 0)',
    },
    text: {
      DEFAULT: 'rgb(255, 255, 255)',
      header: 'rgb(255, 180, 0)',
      muted: 'rgb(203, 213, 225)',
      accent: 'rgb(255, 180, 0)',
    },
    border: {
      DEFAULT: 'rgb(15, 23, 42)',
      dark: 'rgb(2, 8, 23)',
    },
    accent: {
      DEFAULT: 'rgb(255, 180, 0)',
      foreground: 'rgb(2, 8, 23)',
      hover: 'rgb(230, 162, 0)',
    }
  
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  transitions: {
    DEFAULT: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out',
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
  }
} as const;

export type Theme = typeof theme;
export type ThemeColors = typeof theme.colors;
export type ThemeFonts = typeof theme.fonts;
export type ThemeShadows = typeof theme.shadows;
export type ThemeTransitions = typeof theme.transitions;
export type ThemeBreakpoints = typeof theme.breakpoints;
export type ThemeSpacing = typeof theme.spacing;