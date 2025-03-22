/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // Scan HTML and TS files in src/
  ],
  theme: {
    extend: {
      colors: {
        brand: '#bada55'
      }
    },
  },
  plugins: [],
};
