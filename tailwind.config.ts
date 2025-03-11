import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {    
      boxShadow:{
        'blur-outline': '0 0 0 2px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3)', 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: '#D9D9D9',
        brightBlue : '#003CC4',
        darkBlue : '#12003E',
      },
    },
  },
  plugins: [],
} satisfies Config;
