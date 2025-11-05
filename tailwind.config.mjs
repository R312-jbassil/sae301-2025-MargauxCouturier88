import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        heading: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        caramellatte: {
          'base-100': 'oklch(100% 0 0)',
          'base-200': '#F5F1E8',
          'base-300': '#D4A574',
          'base-content': '#3A3A3C',
          'primary': '#A77B5B',
          'primary-content': '#F5F1E8',
          'secondary': '#D4A574',
          'secondary-content': '#F5F1E8',
          'accent': '#1B5E75',
          'accent-content': '#F5F1E8',
          'neutral': '#3A3A3C',
          'neutral-content': '#F5F1E8',
          'info': '#1B5E75',
          'info-content': '#F5F1E8',
          'success': 'oklch(64% 0.2 131.684)',
          'success-content': 'oklch(98% 0.031 120.757)',
          'warning': 'oklch(68% 0.162 75.834)',
          'warning-content': 'oklch(98% 0.026 102.212)',
          'error': 'oklch(57% 0.245 27.325)',
          'error-content': 'oklch(97% 0.013 17.38)',
          '--rounded-box': '0.5rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '0.25rem',
          '--border': '1.5px',
        },
      },
    ],
    darkTheme: 'dark',
  },
};
