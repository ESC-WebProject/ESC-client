import type { Config } from "tailwindcss";

export default {

  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: '#D9D9D9',
      },

      fontFamily: {
        pretendard: "Pretendard-Regular, sans-serif", // css서 사용할 폰트명: "사용할 폰트"
        hambak: "SF_HambakSnow, sans-serif", // css서 사용할 폰트명: "사용할 폰트"
      },

    },
  },

  plugins: [],
} satisfies Config;

