/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
     extend: {
      fontSize: {
        "4xl": "2rem",
        "3xl": "1.8rem"
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }