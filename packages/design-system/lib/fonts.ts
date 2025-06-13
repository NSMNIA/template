import { Montserrat, Open_Sans } from 'next/font/google';

const FontSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500'],
});
const FontTitle = Montserrat({
  subsets: ['latin'],
  variable: '--font-title',
  weight: '700',
});

export { FontSans, FontTitle };
