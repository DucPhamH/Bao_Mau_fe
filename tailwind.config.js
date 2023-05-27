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
          '0%': {
            opacity: '0%',
            transform: 'translate(200%)'
          },
          '100%': {
            opacity: '100%',
            transform: 'translate(-100%)'
          }
        }
      },
      animation: {
        move: 'move 12s linear infinite'
      }
    }
  }
}
