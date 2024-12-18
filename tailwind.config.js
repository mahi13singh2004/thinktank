const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lacquer: ['Lacquer', 'system-ui'],
        'roboto-condensed': ['"Roboto Condensed"', 'serif'],
      },
      animation: {
        bounce: "bounce 0.5s ease-in-out infinite",
        'pop-in': 'popIn 0.7s ease-out', // Original pop-in
        'bounce-in': 'bounceIn 1s ease-out', // Bounce with scaling
        'slide-up': 'slideUp 0.8s ease-out', // Slide up from bottom with fade
        'slide-scale': 'slideScale 0.8s ease-out', // Slide and scale up
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        popIn: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateX(-20px)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        bounceIn: {
          '0%': {
            transform: 'translateY(20px) scale(0.8)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateY(-10px) scale(1.05)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            opacity: '1',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(100px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideScale: {
          '0%': {
            transform: 'translateX(100%) scale(0.9)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateX(-20px) scale(1.05)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(0) scale(1)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
