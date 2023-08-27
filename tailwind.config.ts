import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      light: {
        DEFAULT: '#EBEBEB',
        50: '#EBEBEB',
        100: '#D6D6D6',
        200: '#CCCCCC',
        300: '#ADADAD',
      },
      dark: {
        DEFAULT: '#0A0A0A',
        900: '#0A0A0A',
        800: '#141414',
        700: '#292929',
        600: '#333333',
      },
      brand: {
        light: '#BF937C',
        dark: '#99664C',
      },
    },
  },
  plugins: [],
};
export default config;
