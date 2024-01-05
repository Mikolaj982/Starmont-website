import type { Config } from 'tailwindcss'
const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

const config: Config = {
  content: [
    join(__dirname, '**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
