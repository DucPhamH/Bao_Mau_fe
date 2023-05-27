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
      fontFamily: { unown: ['Unown'] },
      keyframes: {
        move: {
          from: {
            transform: 'translate(100%)'
          },
          to: {
            transform: 'translate(-50%)'
          }
        }
      },
      animation: {
        move: 'move 13s linear infinite'
      }
    }
  }
}
