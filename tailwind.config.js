export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './public/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          // Blues
          primary: '#004DA9', // deep navy-blue
          primaryLight: '#5A88B5',
          primaryDark: '#050076',
          // Oranges
          accent: '#F36424', // vivid orange
          accentLight: '#E58B61',
          accentDark: '#DE6B35',
          // Backgrounds
          lightBg: '#D6DEF4',
          darkBg: '#5F5F5F',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};