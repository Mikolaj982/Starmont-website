import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        primaryTextColor: '#232E21',
      }
    },
  },
  plugins: [],
}
export default config
