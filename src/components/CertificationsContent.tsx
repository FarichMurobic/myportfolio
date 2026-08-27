import Link from "next/link";
import Image from "next/image";
import { certificationsConfig } from "@/config/certifications";

export default function CertificationsContent() {
  return (
    <section className="relative z-20 max-w-4xl mx-auto mt-20 md:mt-32 mb-12 px-7 lg:px-0">
      <div className="relative z-20 w-full mx-auto lg:mx-0">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          {certificationsConfig.title}
        </h2>

        <p className="mt-3 text-xs sm:text-base lg:text-lg leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8">
          {certificationsConfig.description}
        </p>
      </div>

      <div className="z-50 grid items-stretch w-full grid-cols-1 my-8 gap-7 sm:gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {certificationsConfig.items.map((certification, index) => (
          <div key={index}>
            {/* ========================= */}
            {/* DESKTOP */}
            {/* ========================= */}
            <a
              href={certification.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex relative flex-col items-stretch duration-300 ease-out p-5 group h-100 rounded-2xl"
            >
              <span className="absolute inset-0 z-20 block w-full h-full duration-300 ease-out bg-transparent border border-transparent border-dashed group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border group-hover:border-neutral-300 dark:group-hover:border-neutral-600 group-hover:border-dashed rounded-2xl group-hover:bg-white dark:group-hover:bg-neutral-950"></span>

              <span className="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></span>

              <span className="relative z-30 block duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                <span className="block w-full">
                  <div className="relative w-full bg-neutral-100 dark:bg-neutral-700 rounded-t-lg overflow-hidden">
                    <Image
                      src={certification.imageUrl}
                      alt={certification.title}
                      width={800}
                      height={450}
                      className="w-full h-auto rounded-t-lg"
                    />
                  </div>
                </span>

                <span className="block w-full px-1 mt-5 mb-1 sm:mt-3">
                  <span className="flex items-center mb-2 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                    <span>{certification.title}</span>

                    <svg
                      className="group-hover:translate-x-0 group-hover:translate-y-0 -rotate-45 translate-y-1 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200 transform"
                      viewBox="0 0 13 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g
                          transform="translate(0.666667, 2.333333)"
                          stroke="currentColor"
                          strokeWidth="2.4"
                        >
                          <g>
                            <polyline
                              className="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100"
                              points="5.33333333 0 10.8333333 5.5 5.33333333 11"
                            />

                            <line
                              className="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                              x1="10.8333333"
                              y1="5.5"
                              x2="0.833333333"
                              y2="5.16666667"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>

                  <span className="text-sm text-neutral-600 dark:text-neutral-400 block mt-1 line-clamp-2">
                    {certification.description}
                  </span>

                  {/* ISSUER - SAMA KAYAK SKILL DI ABOUT */}
                  {certification.issuer && (
                    <span className="inline-block mt-2 px-2.5 py-0.5 text-[10px] bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">
                      {certification.issuer}
                    </span>
                  )}
                </span>
              </span>
            </a>

            {/* ========================= */}
            {/* MOBILE */}
            {/* ========================= */}
            <div className="md:hidden relative flex flex-col items-stretch p-7 rounded-2xl">
              <span className="absolute inset-0 z-10 block w-full h-full border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600"></span>

              <div className="relative z-20">
                <div className="relative w-full bg-neutral-100 dark:bg-neutral-700 rounded-t-lg overflow-hidden">
                  <Image
                    src={certification.imageUrl}
                    alt={certification.title}
                    width={800}
                    height={450}
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="w-full px-1 mt-5 mb-1">
                  <h3 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
                    {certification.title}
                  </h3>

                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400 block mt-1 line-clamp-2 leading-relaxed">
                    {certification.description}
                  </p>

                    {/* ISSUER - DI ATAS VIEW CERTIFICATION */}
                    {certification.issuer && (
                      <span className="block w-fit mt-2 px-2 py-0.5 text-[9px] bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">
                        {certification.issuer}
                      </span>
                    )}

                    <a
                      href={certification.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-3 text-[10px] font-medium text-blue-700 dark:text-blue-400 underline underline-offset-4"
                    >
                      View Certificate
                    </a>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}