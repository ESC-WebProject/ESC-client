import { transform } from 'next/dist/build/swc/generated-native';
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
      animation:{
        slide: 'slide 5s linear infinite',
      },
      keyframes:{
        slide:{
          '0%': {transform : 'translateX(100%)'},
          '100%' : {transform : 'translateX(-100%)'},
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: '#D9D9D9',
        lightBlue: '#003CC4', 
        darkBlue: '#12003E',   
      },

      fontFamily: {
        pretendard: "Pretendard-Regular, sans-serif", // css서 사용할 폰트명: "사용할 폰트"
        hambak: "SF_HambakSnow, sans-serif", // css서 사용할 폰트명: "사용할 폰트"
      },

    },
  },

  plugins: [],
} satisfies Config;

