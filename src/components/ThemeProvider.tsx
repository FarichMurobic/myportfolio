/**
 * Theme Provider Component - Dark/Light Mode
 * @author Farich Murobic
 * @email farichmurobiq11@gmail.com
 * @github https://github.com/FarichMurobic
 * @website https://farichmurobic.vercel.app
 */

'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProvider({ children, ...props }: { children: React.ReactNode }) {
  return (
    // next-themes provider for dark/light mode.
    // Uses 'class' strategy (adds 'dark' class to html element)
    <NextThemesProvider
      attribute="class"      // Uses CSS class 'dark' for dark mode
      defaultTheme="dark"    // Default to dark mode on first visit
      enableSystem={true}    // Follow system preference initially
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}