'use client';

import Link from 'next/link';
import { globalConfig } from '@/config/global';

export default function Footer() {
  return (
    <section className="text-gray-700 bg-white border-t dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
      <div className="container flex flex-col items-center justify-center min-h-[40px] mx-auto px-7 max-w-7xl sm:flex-row sm:min-h-[50px]">

        <p className="mt-2 text-[10px] sm:text-sm text-neutral-700 dark:text-neutral-100 sm:mt-0 text-center sm:text-left w-full">
          {globalConfig.footer.copyright}
        </p>

      </div>
    </section>
  );
}