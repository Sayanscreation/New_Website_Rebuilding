/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgba(55, 181, 77, 1)', // Add your custom green color here
        customBlue: 'rgba(0, 174, 235, 1)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
