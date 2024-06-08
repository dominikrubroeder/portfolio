/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    transitionDuration: {
      DEFAULT: '300ms'
    },
    extend: {
      colors: {
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        red: 'rgb(var(--color-apple-red) / <alpha-value>)',
        orange: 'rgb(var(--color-apple-orange) / <alpha-value>)',
        yellow: 'rgb(var(--color-apple-yellow) / <alpha-value>)',
        green: 'rgb(var(--color-apple-green) / <alpha-value>)',
        mint: 'rgb(var(--color-apple-mint) / <alpha-value>)',
        teal: 'rgb(var(--color-apple-teal) / <alpha-value>)',
        cyan: 'rgb(var(--color-apple-cyan) / <alpha-value>)',
        blue: 'rgb(var(--color-apple-blue) / <alpha-value>)',
        indigo: 'rgb(var(--color-apple-indigo) / <alpha-value>)',
        purple: 'rgb(var(--color-apple-purple) / <alpha-value>)',
        pink: 'rgb(var(--color-apple-pink) / <alpha-value>)',
        brown: 'rgb(var(--color-apple-brown) / <alpha-value>)',
        gray: {
          DEFAULT: 'rgb(var(--color-apple-gray) / <alpha-value>)',
          '2': 'rgb(var(--color-apple-gray-2) / <alpha-value>)',
          '3': 'rgb(var(--color-apple-gray-3) / <alpha-value>)',
          '4': 'rgb(var(--color-apple-gray-4) / <alpha-value>)',
          '5': 'rgb(var(--color-apple-gray-5) / <alpha-value>)',
          '6': 'rgb(var(--color-apple-gray-6) / <alpha-value>)'
        },
        theme: {
          base: 'rgb(var(--color-theme-base) / <alpha-value>)',
          contrary: 'rgb(var(--color-theme-contrary) / <alpha-value>)'
        },
        base: 'rgb(var(--color-theme-base) / <alpha-value>)'
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(0.82)' },
          '100%': { transform: 'scale(1)' }
        },
        fadeUp: {
          '0%': { transform: 'translateY(4%)' },
          '100%': { transform: 'translateY(0%)' }
        }
      },
      animation: {
        scale: 'scale 0.16s ease-out forwards',
        fadeUp: 'fadeUp 0.3s ease-out forwards'
      }
    }
  },
  plugins: []
};
