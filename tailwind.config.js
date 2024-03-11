/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      header : '#fafaf9',  //heading bg
      hfont  : '#44403c',  // headinf font
      hfonthover : '#1d4ed8', // hover heading font
      hbg : '#d4d4d4',   //  heading backgroung
      lfont : '#44403c'  // logo font 

    },
  },
  plugins: [],
}

