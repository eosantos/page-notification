/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
      },

      colors: {
        violet: {
          300: '#3F51B5',
          500: '#7A5CA8',
          700: '#593493',
        },
        orange: {
          500: '#FF7F00',
          700: '#ED6C02',
        },
        black: {
          900: '#000000',
        },
        red: {
          900: '#F44336',
        },
        green: {
          900: '#4CAF50',
        },
      },
    },
  },
  plugins: [],
}
