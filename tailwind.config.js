/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dialed: {
          black: '#0D0D0D',
          dark: '#141414',
          gray: '#222222',
          lightgray: '#F4F4F2',
          cream: '#FAF8F5',
          gold: '#C5A059',
          amber: '#E58A2B',
          red: '#E03E2F',
          muted: '#8E8E93',
          border: '#333333'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
