import colors from './src/themes/colors';
import fonts from './src/themes/fonts';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
      extend: {
        colors: colors,
        fontFamily: fonts.fontFamily,
        fontSize: fonts.fontSize,
        fontWeight: fonts.fontWeight,
        /*
        borderRadius: borderRadius,
        padding: padding,*/
      },
    },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
}

