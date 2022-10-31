/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
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
        'screen-navigation': 'calc(100vh - 5rem)'
      },
      keyframes: {
        growAndShrink: {
          '0%, 100%': { transform: 'scale(0.95)' },
          '70%': { transform: 'scale(1)' }
        }
      },
      animation: {
        growAndShrink: 'growAndShrink 6s infinite'
      }
    }
  },
  plugins: []
};
