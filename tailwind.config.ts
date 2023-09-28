import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)']
      },
      colors: {
        'yellow': {
          '600': '#AD970E',
          '500': '#C2AA10'
        },
        'gray': {
          '200': '#D8DBDB',
          '950': '#333333',
          '800': '#4D4D4D'
        }
      },
      animation: {
        'bounce-slow': 'bounce 7s linear infinite'
      }
    },
  },
  plugins: [],
}
export default config
