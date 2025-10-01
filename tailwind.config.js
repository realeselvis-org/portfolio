/** @type {import("tailwindcss").Config} */ 
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0px 18px -4px rgba(29,218,210,0.7)',
      },
    },
  },
  plugins: [],
};

