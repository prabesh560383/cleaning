/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#c1e4c4',
        'secondary': '#c1dbe4',
        'light-gray': '#e7e7e9',
      },
      fontFamily:{
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage:{
        'hero-background': "url('/src/assets/images/Hero-image.jpeg')",
        'card-1': "url('/src/assets/images/card1.webp')",
        'card-2': "url('/src/assets/images/card2.webp')",
        

      },
      height: {
        'custom-calc-desktop': 'calc(100vh - 100px)',
        'custom-calc-mobile': 'calc(100vh - 250px)',
        'clamp-img-height': 'clamp(650px, 75vh, 900px)',
        
      },
      fontSize:{
        'clamp-svg': 'clamp(32px, 2.6vw, 42px)',
        'clamp-label': 'clamp(12px, 0.89vw, 26px)',
        'clamp-heading': 'clamp(40px, 4.4vw, 90px)',
        'clamp-heading-xtraLarge': 'clamp(50px, 4.0vw, 100px)',
        'clamp-paragraph': 'clamp(14px, 1.15vw, 28px)',
        'clamp-img-width': 'clamp(600px, 10vw, 900px)'

      },
      width:{
        'clamp-img': 'clamp(270px, 120vw, 600px)',
      },
    },
  },
  plugins: [],
}

)

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors:{
//         'primary': '#c1e4c4',
//         'secondary': '#c1dbe4',
//         'light-gray': '#e7e7e9',
//       },
//       fontFamily:{
//         sans: ['Inter', 'sans-serif'],
//       },
//       backgroundImage:{
//         'hero-background': "url('/src/assets/images/Hero-image.jpeg')",
//         'card-1': "url('/src/assets/images/card1.webp')",
//         'card-2': "url('/src/assets/images/card2.webp')",
        

//       },
//       height: {
//         'custom-calc-desktop': 'calc(100vh - 100px)',
//         'custom-calc-mobile': 'calc(100vh - 250px)',
        
//       },
//       fontSize:{
//         'clamp-svg': 'clamp(32px, 2.6vw, 42px)',
//         'clamp-label': 'clamp(12px, 0.89vw, 26px)',
//         'clamp-heading': 'clamp(40px, 4.4vw, 90px)',
//         'clamp-paragraph': 'clamp(14px, 1.15vw, 28px)',
//       },
//       width:{
//         'clamp-img-width': 'clamp(270px, 19vw, 480px)',
//       }
//     },
//   },
//   plugins: [],
// }

