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
        },
        slideUp: {
          '0%': { transform: 'translateY(5em)' },
          '100%': { transform: 'translateY(0)' }
        },
      },
      animation: {
        fill: 'fill 1s ease-in-out forwards',
        slideUp: 'slideUp 0.25s ease-out forwards'
      }
    },
  },
  plugins: []
};
