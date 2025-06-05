/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }], // 36px
        h2: ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }], // 30px
        h3: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // 24px
        body: ['1rem', { lineHeight: '1.5rem' }], // 16px
        small: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
