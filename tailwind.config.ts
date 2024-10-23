import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    transitionDuration: {
      DEFAULT: '300ms'
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
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
        base: 'rgb(var(--color-theme-base) / <alpha-value>)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))'
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          shadcn: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(0.82)' },
          '100%': { transform: 'scale(1)' }
        },
        fadeUp: {
          '0%': { transform: 'translateY(4%)' },
          '100%': { transform: 'translateY(0%)' }
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        scale: 'scale 0.16s ease-out forwards',
        fadeUp: 'fadeUp 0.3s ease-out forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      zIndex: {
        '100': '100',
        max: '250'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;

export default config;
