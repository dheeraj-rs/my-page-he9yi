/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: 'var(--accent-50, var(--accent-500))',
          100: 'var(--accent-100, var(--accent-500))',
          200: 'var(--accent-200, var(--accent-500))',
          300: 'var(--accent-300, var(--accent-400))',
          400: 'var(--accent-400)',
          500: 'var(--accent-500)',
          600: 'var(--accent-600)',
          700: 'var(--accent-700, var(--accent-600))',
          800: 'var(--accent-800, var(--accent-600))',
          900: 'var(--accent-900, var(--accent-600))',
          950: 'var(--accent-950, var(--accent-600))',
        }
      }
    },
  },
  plugins: [],
}