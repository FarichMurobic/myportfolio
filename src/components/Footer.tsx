/**
 * Footer Component - Portfolio
 * @author Farich Murobic
 * @email farichmurobiq11@gmail.com
 * @github https://github.com/FarichMurobic
 * @website https://farichmurobic.vercel.app
 */

'use client';

import Link from 'next/link';
import { globalConfig } from '@/config/global';

export default function Footer() {
  return (
    // Footer container: light/dark mode with border top
    <section className="text-gray-700 bg-white border-t dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
      <div className="container flex flex-col items-center justify-center min-h-[40px] mx-auto px-7 max-w-7xl sm:flex-row sm:min-h-[50px]">

        {/* Copyright text - centered on mobile, left-aligned on desktop */}
        <p className="mt-2 text-[10px] sm:text-sm text-neutral-700 dark:text-neutral-100 sm:mt-0 text-center sm:text-left w-full">
          {globalConfig.footer.copyright}
        </p>

      </div>
    </section>
  );
}