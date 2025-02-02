import type { Metadata } from 'next';
import './globals.css';
import { FontProvider } from '@surebank/common/context/FontProvider';
import type { ReactNode } from 'react';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'SureBank - Financial Solutions',
  description: 'SureBank provides a wide range of financial services tailored to meet your needs.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="SureBank - Your trusted partner for financial solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sahil Sapariya" />
        <meta name="keywords" content="SureBank, Banking, Finance, Loans, Sure Bank" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <FontProvider>{children}</FontProvider>
      </body>
    </html>
  );
}
