/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      header : '#737373',  //heading bg
      hfont  : '#e5e7eb',  // headinf font
      hfonthover : 'black', // hover heading font
      hbg : '#d4d4d4',   //  heading backgroung
      lfont : '#e5e7eb'  // logo font 

    },
  },
  plugins: [],
}

