/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['emerald', 'forest'],
  },
  darkMode: ['class', '[data-theme="forest"]'],
  plugins: [daisyui],
};
