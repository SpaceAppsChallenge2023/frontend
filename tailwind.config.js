/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatRotateAndPulse: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg) scale(1)',
          },
          '25%': { 
            transform: 'translateY(-20px) rotate(10deg) scale(1.05)',
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(-15deg) scale(0.95)',
          },
          '75%': { 
            transform: 'translateY(-20px) rotate(5deg) scale(1.05)',
          },
        },
        bounceTwirl: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
          },
          '25%': { 
            transform: 'translateY(-15px) rotate(-15deg)',
          },
          '50%': { 
            transform: 'translateY(15px) rotate(15deg)',
          },
          '75%': { 
            transform: 'translateY(-15px) rotate(-15deg)',
          },
        },

      },
      animation: {
        'floaty-rotaty-pulsy-asteroid': 'floatRotateAndPulse 6s ease-in-out infinite',
        'bouncy-twirly-asteroid': 'bounceTwirl 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
