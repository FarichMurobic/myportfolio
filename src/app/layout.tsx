/**
 * Root Layout - Main Layout for the Entire Application
 * @author Farich Murobic
 * @email farichmurobiq11@gmail.com
 * @github https://github.com/FarichMurobic
 * @website https://farichmurobic.vercel.app
 */

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import ThemeProvider from '@/components/ThemeProvider'
import { siteConfig } from '@/config/content'

// Font configuration
const inter = Inter({ subsets: ["latin"] });

// Metadata for SEO & browser tab
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Root HTML element with suppression for hydration mismatch
    <html lang="en" suppressHydrationWarning>
      {/* HEAD: Favicon */}
      <head>
        <link rel="icon" href="/assets/images/cat.svg" type="image/svg+xml" />
      </head>
      {/* Body with Inter font */}
      <body className={inter.className}>
        {/* Theme provider for dark/light mode */}
        <ThemeProvider>
          {/* Main container: full height */}
          <div className="relative min-h-screen">
            {/* Content wrapper with z-index for proper layering */}
            <div className="relative z-10 flex flex-col min-h-screen">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}