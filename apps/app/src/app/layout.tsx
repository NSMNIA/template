import { createLayoutMetadata } from "@nsmnia-template/seo/metadata";
import "./global.css";
import { FontSans } from "@nsmnia-template/design-system/lib/fonts";
import { cn } from "@nsmnia-template/design-system/lib/utils";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createLayoutMetadata({
  title: "NSMNIA Template",
  description: "NSMNIA template for building scalable Next.js apps",
});

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
