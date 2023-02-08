/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  fontFamily: {
    sans: ['Inter var, sans-serif', { fontFeatureSettings: '"cv11", "ss01"' }],
  },
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [require('flowbite/plugin')],
  plugins: [],
};

