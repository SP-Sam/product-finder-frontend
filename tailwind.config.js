/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-blue': '#3260a8',
        'primary-blue-dark': '#0448b3',
      },
    },
    screens: {
      mobile: '320px',
      tablet: '560px',
      'tablet-g': '840px',
      laptop: '900px',
      desktop: '1280px',
    },
  },
  plugins: [],
};
