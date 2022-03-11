module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-element-bg':'hsl(209, 23%, 22%)',
        'dark-main-bg': 'hsl(207, 26%, 17%)',
        'light-main-text': 'hsl(207, 26%, 17%)',
        'light-inputfield': 'hsl(0, 0%, 52%)',
        'light-main-bg': 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}