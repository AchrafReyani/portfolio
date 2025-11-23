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
          light: '#5fc3e7', // nice blue for light mode
          dark: '#38bdf8',  // slightly brighter blue for dark mode
        },
        secondary: {
          light: '#f3f4f6', // very light gray
          dark: '#1f2937',  // dark gray/charcoal
        },
        accent: {
          light: '#f59e0b', // orange/gold
          dark: '#fbbf24',  // lighter gold
        },
        text: {
          light: '#111827', // dark text for light mode
          dark: '#f9fafb',  // light text for dark mode
        },
        muted: {
          light: '#6b7280', // gray-500 style
          dark: '#9ca3af',  // lighter gray for dark mode
        },
        bg: {
          light: '#ffffff',
          dark: '#0f172a', // slate-900
        }
      }
    }
  },
  plugins: []
};
