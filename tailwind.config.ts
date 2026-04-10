import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkBlue: 'hsl(233, 26%, 24%)',
          limeGreen: 'hsl(136, 64%, 51%)',
          brightCyan: 'hsl(192, 69%, 51%)',
        },
        neutral: {
          grayishBlue: 'hsl(233, 8%, 62%)',
          lightGrayishBlue: 'hsl(220, 16%, 96%)',
          veryLightGray: 'hsl(0, 0%, 98%)',
          white: 'hsl(0, 100%, 100%)',
        }
      },
      backgroundImage: {
        'intro-desktop': "url('/images/bg-intro-desktop.svg')",
        'intro-mobile': "url('/images/bg-intro-mobile.svg')"
      }
    },
  },
  plugins: [],
};
export default config;
