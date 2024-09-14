/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'text': '#f5e6e5',
        'background': '#070303',
        'primary': '#6366f1',
        'secondary': '#ec4899',
        'accent': '#b00a07',
       },
    },
  },
  plugins: [],
}
