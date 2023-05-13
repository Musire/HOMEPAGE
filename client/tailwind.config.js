/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '319px',
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors: {
        darkGray: 'hsl(0, 0%, 63%)',
        superGray: 'hsl(0, 0%, 27%)',
        silver: '#d9d9d9',
        mid: '#979797',
        smoke: '#848884',
        dark: '#444444',
        darker: '#0A0708',
        deep: '#030303',
        deeper: '#000300',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        'superwide': '.3em'
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      backgroundImage: {
        'icon-close': "url('./assets/icon-close.svg')",
        'mobile-1' : "url('./assets/mobile/mobile-image-hero-1.jpg')",
        'mobile-2' : "url('./assets/mobile/mobile-image-hero-2.jpg')",
        'mobile-3' : "url('./assets/mobile/mobile-image-hero-3.jpg')",
        'icon-menu': "url('./assets/icon-menu.svg')",
        'illustration': "url('./assets/illustration-intro.svg')",
      },
    },
  },
}

