/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
    colors: {
      100 : '#1c1917',
      200: '#292524',
      300:'#5EEAD4',
    }
  },
  plugins: [],
}
