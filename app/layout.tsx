// 🔴 IMPORTANT: Wrap entire app with providers

import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}