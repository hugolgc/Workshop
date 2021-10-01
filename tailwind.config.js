module.exports = {
  mode: 'jit',
  purge: [
    './public/index.html',
    './src/**/*.vue'
  ],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'rgba(0, 0, 0, 0)',
      white: '#ffffff',
      black: '#000000',
      orange: '#ed8014',
      blue: {
        '900': '#101e48',
        '800': '#123071',
        '700': '#133171',
        '600': '#1b53b6',
        '500': '#4387eb'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./tailwind.css -o ./src/assets/style.css -w