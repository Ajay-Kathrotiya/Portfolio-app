/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      header : '#fafafa',  //heading bg
      hfont  : '#0a0a0a',  // headinf font
      hfonthover : '#1d4ed8', // hover heading font
      hbg : '#d4d4d4',   //  heading backgroung
      lfont : '#23262a'  // logo font 

    },
  },
  plugins: [],
}

