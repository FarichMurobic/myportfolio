'use client';

import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  href: string;
  pattern?: 'dots' | 'grid' | 'waves' | 'circles';
  imageUrl?: string;
  readingTime: number;
}

export default function PostCard({ title, description, date, href, pattern = 'dots', imageUrl = '/placeholder.jpg', readingTime }: PostCardProps) {
  const patterns = {
    dots: "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
    grid: "bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[linear-gradient(#404040_1px,transparent_1px),linear-gradient(90deg,#404040_1px,transparent_1px)]",
    waves: "bg-[linear-gradient(45deg,transparent_25%,#e5e7eb_25%,#e5e7eb_50%,transparent_50%,transparent_75%,#e5e7eb_75%)] [background-size:20px_20px] dark:bg-[linear-gradient(45deg,transparent_25%,#404040_25%,#404040_50%,transparent_50%,transparent_75%,#404040_75%)]",
    circles: "bg-[radial-gradient(circle_at_center,#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_center,#404040_1px,transparent_1px)]"
  };

  return (
    <Link href={href}>
      <div className="relative border border-transparent border-dashed cursor-pointer p-7 group rounded-2xl">
        <div className="absolute inset-0 z-20 w-full h-full bg-white dark:bg-neutral-950 border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-700 sm:duration-300 sm:ease-out sm:group-hover:-translate-x-1 sm:group-hover:-translate-y-1">
          <div className={`absolute inset-0 ${patterns[pattern]} opacity-50`}></div>
        </div>

        <div className="absolute inset-0 z-10 w-full h-full border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-700 sm:duration-300 sm:ease-out sm:group-hover:translate-x-1 sm:group-hover:translate-y-1"></div>

        <div className="relative z-30 sm:duration-300 sm:ease-out sm:group-hover:-translate-x-1 sm:group-hover:-translate-y-1">
          <div className="flex gap-8">
            <div className="flex-1">
              <h2 className="flex items-center mb-4">
                <span className="text-sm sm:text-xl lg:text-2xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">
                  {title}
                </span>
                <svg className="hidden sm:block sm:group-hover:translate-x-0 flex-shrink-0 translate-y-0.5 -translate-x-1 w-4 h-4 stroke-current ml-1 transition-all ease-in-out duration-200 transform opacity-0 sm:group-hover:opacity-100 text-neutral-600 dark:text-neutral-400" viewBox="0 0 13 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                    <g id="svg" transform="translate(0.666667, 2.333333)" stroke="currentColor" strokeWidth="2.4">
                      <g>
                        <polyline className="transition-all duration-200 ease-out opacity-0 delay-0 sm:group-hover:opacity-100" points="5.33333333 0 10.8333333 5.5 5.33333333 11"></polyline>
                        <line className="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 sm:group-hover:translate-x-0 sm:group-hover:opacity-100 sm:group-hover:ml-0" x1="10.8333333" y1="5.5" x2="0.833333333" y2="5.16666667"></line>
                      </g>
                    </g>
                  </g>
                </svg>
              </h2>
              <p className="text-[11px] sm:text-base text-neutral-600 dark:text-neutral-400 mb-3 leading-relaxed">
                <span>{description}</span>
              </p>
              <div className="flex flex-wrap items-center gap-1 sm:gap-4 text-[10px] sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                <span>Posted on {date}</span>
                <span className="flex items-center">
                  <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {readingTime} min read
                </span>
              </div>
            </div>
            <div className="hidden sm:block relative w-64 h-48 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}