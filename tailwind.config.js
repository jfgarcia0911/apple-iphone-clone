// tailwind.config.js
module.exports = {
  theme: {
    extend: {fontFamily: {
        sans: [
          'SF Pro Text',
          'SF Pro Icons',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
},
    screens: {
      'xs': '480px',   // custom extra small
      'sm': '640px',
      'md': '735px',   // customized md breakpoint
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
}