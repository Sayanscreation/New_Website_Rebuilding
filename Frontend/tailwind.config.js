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
        customHvrBlue: 'rgba(12, 160, 214, 0.89)'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
