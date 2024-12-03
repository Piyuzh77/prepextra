/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
        darkBlue: '#0d0221', 
        siteYellow: '#ABA361', 
        siteLavender: '#D9DBF1', 
      },
    },
},
  plugins: [],
}