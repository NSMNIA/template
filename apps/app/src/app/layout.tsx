import { createLayoutMetadata, createMetadata } from '@nsmnia-template/seo/metadata';
import './global.css';
import type { ReactNode } from 'react';
import { cn } from '@nsmnia-template/design-system/lib/utils';
import { FontSans } from '@nsmnia-template/design-system/lib/fonts';

export const metadata = createLayoutMetadata({
  description: 'Homepage of NSMNIA Template',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(FontSans.variable)}>{children}</body>
    </html>
  );
}
