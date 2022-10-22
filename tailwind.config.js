/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        'ms': '0 0 80px -30px rgba(226, 232, 240, 1)',
        'ms1':'0 0 20px 5px rgba(199, 210, 254, 1)',
      },
      height: {
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
      },
    },
  },
  plugins: [],
}
