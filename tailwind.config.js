/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue' : '#4169E1',
        'coral-red': '#FF4040 ',
        'slate-gray': '#708090', 
      }
    },

    
  },
  plugins: [],
}

