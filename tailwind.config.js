import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#f5faf5',
          100: '#e6f5e6',
          200: '#bfe5bf',
          300: '#99d699',
          400: '#4db84d',
          500: '#009900',
          600: '#008a00',
          700: '#007300',
          800: '#005c00',
          900: '#004c00',
        },
        'secondary': {
          50: '#fff5f5',
          100: '#ffe6e6',
          200: '#ffbfbf',
          300: '#ff9999',
          400: '#ff4d4d',
          500: '#ff0000',
          600: '#e60000',
          700: '#bf0000',
          800: '#990000',
          900: '#7d0000',
        }
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}