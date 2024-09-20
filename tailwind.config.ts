import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      darkGray: "#4d4d4d",
      green: "#00C165",
      black: "#000",
      blue :'#1E40AF',
    },
    extend: {
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
        'opacity': 'opacity',
        'transform': 'transform',
      },

      
    },
  },
  variants: {
    extend: {
      transitionProperty: ['responsive', 'hover', 'focus'],
    },
    
  },

  
  plugins: [],
};

export default config;
