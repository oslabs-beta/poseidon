/** @type {import('tailwindcss').Config} */
// const OG = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: '#ff49db',
        // @apply bg-sky-400 hover:bg-sky-600 hover:scale-125 hover:accent-white text-slate-200 font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed;
      },
      // animation: {
      //   'spin-slow': 'spin 3s linear infinite',
      // }
    },
  },
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
  // plugins: {
  //   // tailwindcss: { config: './tailwindcss-config.js' },
  // },
};

/*
base: OG.slate.900,
tester: OG.red.900,

colors: {
transparent: 'transparent',
black: '#000',
white: '#fff',
gray: {
  100: '#f7fafc',
  // ...
  900: '#1a202c',
},

Background: Slate 900
Gradient: bg-gradient-to-b from-gray-400 to-slate-400
Header: Slate 900
Footer: Slate 900

Text1: slate 400
Text2: sky 400
Text3: slate 200 

button bg: sky 400
button text: 

card: slate 800 ; relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Lato',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    }
  }
}
*/
