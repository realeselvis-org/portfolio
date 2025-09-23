/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // nombre utilizable: font-allerta
        allerta: ["var(--font-allerta-stencil)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
