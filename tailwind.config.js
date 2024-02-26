/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {

      fontFamily: {
        'montserrat': 'Montserrat'
      },
      backgroundColor: {
        'gren': '#387780',
        'bg': '#F4F2EE',
        'ijobrown': '#C6DCBA'
      },
      borderColor: {
        'gren': '#387780'
      }

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}