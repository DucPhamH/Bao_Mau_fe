/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screen: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      fontFamily: { unown: ['Unown'], blooddrip: ['BloodDrip'] },
      keyframes: {
        move: {
          '0%': {
            transform: 'translate(98vw)'
          },
          '100%': {
            transform: 'translate(-100%)'
          }
        },
        entrance404: {
          '0%': {
            width: '0',
            height: '0'
          },
          '100%': {
            width: 'full',
            height: 'full'
          }
        },
        fade1: {
          to: {
            width: '0',
            height: '0'
          }
        }
      },
      animation: {
        move: 'move 30s linear infinite',
        entrance404: 'entrance404 2s ease',
        fade1: 'fade1 2s ease'
      }
    }
  }
}
