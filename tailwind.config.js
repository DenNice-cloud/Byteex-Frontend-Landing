/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
    "./src/ui/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        scrollRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-149%)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(-149%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'scroll-right-gallery': 'scrollRight 50s linear infinite',
        'scroll-left-gallery': 'scrollLeft 50s linear infinite',
      },
    },
    fontFamily: {
      suisse: ["SuisseBPIntl", "sans-serif"],
      sofiaLight: ["SofiaProLight", "sans-serif"],
      sofiaRegular: ["SofiaProRegular", "sans-serif"],
    },
  },
  plugins: [],
};
