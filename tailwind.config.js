/** @type {import("tailwindcss").Config} */ 
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Clases de tamaño para el componente Toggle
    'w-2', 'h-2',
    'w-2.5', 'h-2.5',
    'w-3', 'h-3',
    'w-4', 'h-4', 
    'w-5', 'h-5',
    'w-16', 'h-7',
    'w-24', 'h-8',
    'w-32', 'h-10',
    'w-1/2',
    'left-2', 'right-2',
    'left-3', 'right-3', 
    'left-4', 'right-4',
  ],
  theme: {
    extend: {

/*      boxShadow: {
        'custom': '0 0px 18px -4px rgba(29,218,210,0.7)',
      },
      fontFamily: {
        alumi: ['var(--font-alumni-sans-pinstripe)', 'var(--font-sans)', 'sans-serif'],
      },
    },
    */}
  },

  plugins: [],
};