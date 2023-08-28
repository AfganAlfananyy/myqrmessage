/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
        roboto: 'Roboto',
      },

      colors: {
        abu: '#677483',
        hitam: '#171C24',
      },
    },
  },
  plugins: [],
}

