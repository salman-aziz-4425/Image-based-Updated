module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        height: {
          '5/7': '89%',
        }
        ,
        width:{
          '5/7': '93%',
        }
      }
  },
  plugins: [],
}