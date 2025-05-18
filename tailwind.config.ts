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
        coquelicot: {
          DEFAULT: '#f15025',
          100: '#350e03',
          200: '#691c07',
          300: '#9e2a0a',
          400: '#d3380d',
          500: '#f15025',
          600: '#f47552',
          700: '#f7987e',
          800: '#f9baa9',
          900: '#fcddd4'
        },
        platinum: {
          DEFAULT: '#e6e8e6',
          100: '#2d302d',
          200: '#596159',
          300: '#879087',
          400: '#b7bcb7',
          500: '#e6e8e6',
          600: '#ecedec',
          700: '#f1f2f1',
          800: '#f5f6f5',
          900: '#fafbfa'
        },
        timberwolf: {
          DEFAULT: '#ced0ce',
          100: '#282a28',
          200: '#515451',
          300: '#797e79',
          400: '#a3a7a3',
          500: '#ced0ce',
          600: '#d7d9d7',
          700: '#e1e3e1',
          800: '#ebeceb',
          900: '#f5f6f5'
        },
        eerie: {
          DEFAULT: '#191919',
          100: '#050505',
          200: '#0a0a0a',
          300: '#0f0f0f',
          400: '#141414',
          500: '#191919',
          600: '#474747',
          700: '#757575',
          800: '#a3a3a3',
          900: '#d1d1d1'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      fontFamily: {
        bigshot: ['"Bigshot One"', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config; 