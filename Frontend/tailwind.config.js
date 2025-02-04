/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'diagonal-thin-yellow': "repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 1px, transparent 2px, transparent 4px)",
      },
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
