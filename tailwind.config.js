/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00bfab',
          50: '#e6fffc',
          100: '#b3fff8',
          200: '#80fff3',
          300: '#4dffef',
          400: '#1affea',
          500: '#00bfab',
          600: '#00a898',
          700: '#009185',
          800: '#007a72',
          900: '#00635e',
        },
      },
    },
  },
  plugins: [],
};
