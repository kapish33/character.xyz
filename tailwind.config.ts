import type { Config } from 'tailwindcss';
import { fontFamily } from './tailiwndconfig/custumTwPlugin/fonts';
import { colors } from './tailiwndconfig/custumTwPlugin/color';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './source/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [require('./tailiwndconfig/custumTwPlugin/typography')],
};
export default config;
