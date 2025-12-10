import {  Open_Sans } from 'next/font/google';

const FontSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
  weight: 'variable',
  adjustFontFallback: true,
});

export { FontSans };
