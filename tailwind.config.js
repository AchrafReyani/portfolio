/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,css}'],
  darkMode: 'class', // enable dark mode via class
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: [
        'Monaco',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ]
    },
    container: {
      center: true,
      screens: {
        sm: '50rem'
      }
    },
    extend: {
      colors: {
        // Semantic colors
        primary: {
          light: '#5fc3e7',
          dark: '#38bdf8',
        },
        secondary: {
          light: '#f3f4f6',
          dark: '#1f2937',
        },
        accent: {
          light: '#f59e0b',
          dark: '#fbbf24',
        },
        text: {
          light: '#111827',
          dark: '#f9fafb',
        },
        muted: {
          light: '#6b7280',
          dark: '#9ca3af',
        },
        bg: {
          light: '#ffffff',
          dark: '#0f172a',
        }
      },
      boxShadow: {
        'header-light': '0 4px 6px rgba(0,0,0,0.1)',
        'header-dark': '0 4px 6px rgba(255,255,255,0.15)',
        'card-light': '0 8px 12px rgba(0,0,0,0.15)',
        'card-dark': '0 8px 12px rgba(255,255,255,0.2)',
      }
    }
  },
  plugins: []
};
