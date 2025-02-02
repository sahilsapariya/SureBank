import { Lexend } from "next/font/google";
import { ReactNode } from "react";

// Importing Lexend font
const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

interface FontProviderProps {
  children: ReactNode;
}

export function FontProvider({ children }: FontProviderProps) {
  return (
    // Applying Lexend font variable and keeping antialiased for better font rendering
    <div className={`${lexend.className} antialiased`}>
      {children}
    </div>
  );
}
