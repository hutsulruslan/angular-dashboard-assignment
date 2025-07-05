const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        base: '#121621',
        dark: '#0C0F17',
        darkGrey: '#232838',
        lightBlue: '#3B82F6',
        borderTopbBar: '#313B54',
        componentBg: '#1E2233',
        componentBorderColor: '#313B54',
      },
      fontSize: {
        10: '1rem', // 10px
        12: '1.2rem',
        14: '1.4rem',
        16: '1.6rem',
        18: '1.8rem',
        20: '2rem',
        24: '2.4rem',
        30: '3rem',
        36: '3.6rem',
        44: '4.4rem',
        52: '5.2rem',
        62: '6.2rem',
        74: '7.4rem',
        86: '8.6rem',
        98: '9.8rem',
      },
      spacing: {
        2: '0.2rem',
        4: '0.4rem',
        8: '0.8rem',
        12: '1.2rem',
        16: '1.6rem',
        24: '2.4rem',
        32: '3.2rem',
        48: '4.8rem',
        64: '6.4rem',
        80: '8rem',
        96: '9.6rem',
        128: '12.8rem',
      },
    },
  },
  plugins: [],
};
