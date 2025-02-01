import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@surebank/common/context/ThemeProvider";
import { LanguageProvider } from "@surebank/common/context/LanguageProvider";
import { FontProvider } from "@surebank/common/context/FontProvider";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "surebank",
  description: "A content-writing tool",
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
          <LanguageProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </LanguageProvider>
        </FontProvider>
      </body>
    </html>
  );
}
