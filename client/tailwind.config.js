import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        emerald: {
          ...require('daisyui/src/theming/themes')['emerald'],
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-focus-scale': '0.95',
        },
      },
      'forest',
    ],
  },
  darkMode: ['class', '[data-theme="forest"]'],
  plugins: [daisyui],
};
