import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { ThemeManagerProvider } from "../hooks/ThemeManagerContext";
import Navbar2 from "./components/Navbar2"; 
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elvis Reales",
  description: "Tech Server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const savedToggle = localStorage.getItem('toggleState');
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  
                  let effectiveTheme;
                  
                  if (savedTheme && savedToggle !== null) {
                    const isToggleOn = savedToggle === 'true';
                    if (!isToggleOn) {
                      // Toggle OFF: light o dev-light
                      effectiveTheme = savedTheme.includes('dev') ? 'dev-light' : 'light';
                    } else {
                      // Toggle ON: dark basado en SO o dark-custom
                      if (savedTheme.includes('dev')) {
                        effectiveTheme = 'dev-dark';
                      } else {
                        effectiveTheme = systemTheme === 'dark' ? 'dark' : 'dark-custom';
                      }
                    }
                  } else {
                    // Primera vez: toggle ON por defecto
                    effectiveTheme = systemTheme === 'dark' ? 'dark' : 'dark-custom';
                  }
                  
                  const html = document.documentElement;
                  html.classList.remove('light', 'dark', 'theme-dev-light', 'theme-dev-dark', 'dark-custom');
                  
                  if (effectiveTheme === 'dev-dark' || effectiveTheme === 'dev-light') {
                    html.classList.add('theme-' + effectiveTheme);
                  } else if (effectiveTheme === 'dark-custom') {
                    html.classList.add('dark-custom');
                  } else {
                    html.classList.add(effectiveTheme);
                  }
                } catch (e) {
                  // Fallback: mantener tema oscuro por defecto (ya está en :root)
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeManagerProvider>
          <Navbar2 />
          {children}
          <Footer />
        </ThemeManagerProvider>
      </body>
    </html>
  );
}
