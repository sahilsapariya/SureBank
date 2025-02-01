import type { Metadata } from 'next';
import './globals.css';
import { FontProvider } from '@surebank/common/context/FontProvider';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'surebank',
  description: 'A content-writing tool',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FontProvider>
            {children}
        </FontProvider>
      </body>
    </html>
  );
}
