import * as colors from './colors';

export * from './constants';
export const theme = {
  colors,
  backgrunds: {
    primary: '#fff',
    secondary: '#000',
    tertiary: '#f00',
  },
  fonts: {
    primary: 'Inter',
    secondary: 'Inter',
  },
  headings: {
    1: 32,
    2: 24,
    3: 18,
    4: 16,
    5: 14,
  } as const,
  fontSizes: {
    s: 12,
    m: 14,
    l: 16,
    xl: 18,
    xxl: 20,
  },
  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700,
  },
  lineHeights: {
    small: 16,
    medium: 20,
    large: 24,
  },
  space: {
    small: 4,
    medium: 8,
    large: 16,
  },
  radius: {
    small: 4,
    medium: 8,
    large: 16,
  },
  shadows: {
    small: '0 1px 2px rgba(0, 0, 0, 0.05)',
    medium: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    large: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  zIndices: {
    low: 0,
    medium: 10,
    high: 20,
  },
  breakpoints: {
    small: 0,
    medium: 768,
    large: 1024,
  },

};
