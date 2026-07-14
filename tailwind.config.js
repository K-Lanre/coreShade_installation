/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#0a0a0a',
        dark: '#1a1a1a',
        brand: '#4F281F',
        petal: '#EFCEDB',
        'brand-light': '#7A3E30',
        'brand-muted': '#3A1C14',
        cocoa: '#A88173',
        'cocoa-soft': '#C19D90',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
