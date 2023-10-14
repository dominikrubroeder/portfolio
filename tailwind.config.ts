/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        theme: {
          base: 'rgb(var(--color-theme-base) / <alpha-value>)',
          contrary: 'rgb(var(--color-theme-contrary) / <alpha-value>)'
        },
        apple: {
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
          gray: 'rgb(var(--color-apple-gray) / <alpha-value>)',
          'gray-2': 'rgb(var(--color-apple-gray-2) / <alpha-value>)',
          'gray-3': 'rgb(var(--color-apple-gray-3) / <alpha-value>)',
          'gray-4': 'rgb(var(--color-apple-gray-4) / <alpha-value>)',
          'gray-5': 'rgb(var(--color-apple-gray-5) / <alpha-value>)',
          'gray-6': 'rgb(var(--color-apple-gray-6) / <alpha-value>)'
        }
      },
      minHeight: {
        'screen-navigation-switch': 'calc(100vh - 5rem)',
        'screen-navigation-theme-switch': 'calc(100vh - 8.5rem)'
      },
      keyframes: {
        fadeUp: {
          '0%': {
            transform: 'translateY(4%)',
            opacity: '0',
            visibility: 'hidden'
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1',
            visibility: 'visible'
          }
        },
        scaleUp: {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '0',
            visibility: 'hidden'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
            visibility: 'visible'
          }
        },
        growAndShrink: {
          '0%, 100%': { transform: 'scale(0.95)' },
          '70%': { transform: 'scale(1)' }
        },
        navigationControl: {
          '0%': {
            transform: 'translateY(50%) translateX(-50%) scale(0.2)',
            opacity: '0',
            visibility: 'hidden'
          },
          '100%': {
            transform: 'translateY(-30%) translateX(-50%) scale(1)',
            opacity: '1',
            visibility: 'visible'
          }
        }
      },
      animation: {
        fadeUp: 'fadeUp .6s ease-out forwards',
        fadeUpDelayed: 'fadeUp .6s ease-out 1s forwards',
        scaleUp: 'scaleUp .6 ease-out forwards',
        growAndShrink: 'growAndShrink 6s infinite',
        navigationControl: 'navigationControl .3s ease-out forwards'
      },
      gridTemplateColumns: {
        cardBrands: 'repeat(auto-fit, minmax(min(12rem, 16rem), 1fr))'
      }
    }
  },
  plugins: []
};