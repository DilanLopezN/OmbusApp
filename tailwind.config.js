/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        boxShadow: {
          'custom': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }
    
    },
  },
  plugins: [],
}

