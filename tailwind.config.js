/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      sans: ['Fredoka', 'sans-serif'],
      },

    fontSize: {
      sm: '0.8rem',
      base: '0.9rem',
      xl: '1.3rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },

    extend: {},
  },
  plugins: [],
}

