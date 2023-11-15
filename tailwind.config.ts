import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1A2724',
      white: '#FFF',
      primary: '#2D544B',
      secondary: '#B6455F',
      'gray-light': '#5F647D',
      'gray-dark': '#BDC7FB',
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
    },
    fontFamily: {
      sans: 'var(--font-inter)',
      secondary: 'var(--font-outfit)',
    },
    fontSize: {
      header1: [
        '64px',
        {
          fontWeight: 600,
          lineHeight: '80px',
        },
      ],
      header2: [
        '36px',
        {
          fontWeight: 500,
          lineHeight: '40px',
        },
      ],
      header3: [
        '24px',
        {
          fontWeight: 500,
          lineHeight: '27px',
        },
      ],
      header4: [
        '18px',
        {
          fontWeight: 500,
          lineHeight: '20px',
        },
      ],
      header5: [
        '16px',
        {
          fontWeight: 500,
          lineHeight: '18px',
        },
      ],
      header6: [
        '14px',
        {
          fontWeight: 500,
          lineHeight: '17px',
        },
      ],
      body: [
        '16px',
        {
          fontWeight: 400,
          lineHeight: '22px',
        },
      ],
      bodySmall: [
        '14px',
        {
          fontWeight: 400,
          lineHeight: '16px',
        },
      ],
      button: [
        '24px',
        {
          fontWeight: 400,
          lineHeight: '27px',
        },
      ],
      caption: [
        '14px',
        {
          fontWeight: 300,
          lineHeight: '16px',
          letterSpacing: '1.05px',
        },
      ],
    },
    extend: {
      backgroundImage: {
        'navbar-gradient':
          'linear-gradient(270deg, rgba(32, 32, 32, 0.00) 33.45%, #000 100.66%)',
        'hero-gradient':
          'linear-gradient(95deg, #202020 2.29%, #2D544B 66.45%, rgba(69, 182, 156, 0.00) 99.38%)',
        'contact-section-gradient':
          'linear-gradient(95deg, rgba(69, 182, 156, 0.00) 5.04%, #2D544B 39.62%, #202020 100%);',
      },
    },
  },
  plugins: [],
};
export default config;
