import { createMetadata } from '@nsmnia-template/seo';
import type { Metadata } from 'next';
import './global.css';
import type { ReactNode } from 'react';

export const metadata: Metadata = createMetadata({
  title: 'NSMNIA Template',
  description: 'NSMNIA Template Application',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
