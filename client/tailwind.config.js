/** @type {import('tailwindcss').Config} */
// prettier-ignore

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'linkedin': '#00A0DC',
        'github': '#FAFBFC'
      },
      keyframes: {
        fill: {
          '0%': { width: '0%' },
          '100%': { width: 'attr(data-value)' }
        }
      },
      animation: {
        fill: 'fill 1s ease-in-out forwards'
      }
    },
  },
  plugins: []
};
