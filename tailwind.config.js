/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#0d1117',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#e7edf2',
        },
      },
      keyframes: {
        "fade-in": {
            "0%": {
                opacity: 0
            },
            "100%": {
                opacity: 1
            },
        },
        "fade-out": {
            "0%": {
                opacity: 1
            },
            "100%": {
                opacity: 0
            },
        },
      },
      animation: {
        fadein: 'fade-in 1s ease-in-out 0.25s 1',
        fadeout: 'fade-out 1s ease-out 0.25s 1',
      },
    },
  },
  plugins: [],
}