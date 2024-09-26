/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        doublexl: '40px',
        threexl: '58px',
      },
      fontWeight: {
        sm: '400',
        md: '700',
      }
    },
  },
  plugins: [],
}