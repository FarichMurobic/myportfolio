import Image from "next/image";
import { aboutConfig } from "@/config/about";

export default function AboutContent() {
  return (
    <section className="relative z-20 w-full max-w-4xl mx-auto mt-20 sm:mt-32 mb-12 px-7 sm:px-7">
      {/* Title */}
      <div className="relative z-20 w-full mx-auto lg:mx-0 border border-dashed border-neutral-300 dark:border-neutral-600 md:border-0 rounded-xl p-5 md:p-0">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 text-center sm:text-left">
          {aboutConfig.title}
        </h2>

        {/* Profile & Skills */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mt-4 sm:mt-5 lg:mt-6 px-0 max-w-4xl mx-auto">
          <div className="w-full md:w-1/2 flex flex-col">
            <p className="text-xs sm:text-base lg:text-lg leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 text-left">
              {aboutConfig.description}
            </p>

            <div className="mt-5 sm:mt-auto sm:pt-4 flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start">
              {aboutConfig.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Image - Desktop only */}
          <div className="hidden md:flex relative w-[280px] h-[340px] sm:w-[360px] sm:h-[440px] group">
            {/* Back border */}
            <span className="absolute inset-0 z-10 block w-full h-full border border-dashed rounded-xl border-neutral-300 dark:border-neutral-600 translate-x-1 translate-y-1"></span>

            {/* Front border + image */}
            <div className="relative z-20 w-full h-full -translate-x-1 -translate-y-1">
              <div className="absolute inset-0 border border-dashed rounded-xl border-neutral-300 dark:border-neutral-600 pointer-events-none"></div>

              <Image
                src={aboutConfig.image}
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience & Connect */}
      <div className="flex flex-col md:flex-row mt-12 sm:mt-20">
        {/* Experience */}
        <div className="flex-1 min-w-0">
          <h2 className="mb-2 text-xl sm:text-2xl font-bold dark:text-neutral-200 text-center sm:text-left">
            {aboutConfig.experience.title}
          </h2>

          <div className="py-6 sm:py-10">
            {aboutConfig.experience.items.map((item, index) => (
              <div
                key={index}
                className="pb-8 sm:pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700"
              >
                <div className="relative flex flex-col justify-start pl-7 sm:pl-12">
                  {/* Timeline Icon */}
                  <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-9 h-9 sm:w-14 sm:h-14 border-neutral-300 dark:border-neutral-700">
                    {item.role.includes("Java") ? (
                      <svg
                        className="w-4 h-4 sm:w-8 sm:h-8 text-neutral-700 dark:text-neutral-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    ) : item.role.includes("Admin") ? (
                      <svg
                        className="w-4 h-4 sm:w-8 sm:h-8 text-neutral-700 dark:text-neutral-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 sm:w-8 sm:h-8 text-neutral-700 dark:text-neutral-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
                  </div>

                  <p className="text-[10px] sm:text-xs uppercase text-neutral-400 dark:text-neutral-500">
                    {item.period}
                  </p>

                  <h3 className="my-1 text-sm sm:text-lg font-bold dark:text-neutral-100">
                    {item.role}
                  </h3>

                  <p className="mb-1 text-[11px] sm:text-sm font-medium dark:text-neutral-300">
                    {item.company}
                  </p>

                  <p className="text-[11px] sm:text-sm font-light text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image - Mobile only */}
        <div className="flex md:hidden justify-center mt-2 mb-10">
          <div className="relative w-[160px] h-[170px] group">

            {/* Back border */}
            <span className="absolute inset-0 z-10 block w-full h-full border border-dashed rounded-xl border-neutral-300 dark:border-neutral-600 translate-x-1 translate-y-1"></span>

            {/* Front border + image */}
            <div className="relative z-20 w-full h-full -translate-x-1 -translate-y-1">
              <div className="absolute inset-0 border border-dashed rounded-xl border-neutral-300 dark:border-neutral-600 pointer-events-none"></div>

              <Image
                src={aboutConfig.image}
                alt="Profile"
                fill
                sizes="160px"
                className="object-cover rounded-lg"
              />
            </div>

          </div>
        </div>

        {/* Connect */}
        <div className="w-full md:w-[360px] md:ml-8 mt-4 md:mt-0 min-w-0">
          <h2 className="mb-2 text-xl sm:text-2xl font-bold dark:text-neutral-200 text-center md:text-left">
            {aboutConfig.connect.title}
          </h2>

          <div className="py-4 sm:py-[30px]">
            <p className="text-xs sm:text-base lg:text-lg leading-6 text-gray-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 text-center md:text-left">
              {aboutConfig.connect.description}
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-4">
              {/* GitHub - Hitam/Putih */}
              <a
                href={aboutConfig.connect.links.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688 1.379 0 .446-.253.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn - Hitam/Putih */}
              <a
                href={aboutConfig.connect.links.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 24 .774 24 1.729V1.729z" />
                </svg>
              </a>

              {/* Instagram - Hitam/Putih */}
              <a
                href={aboutConfig.connect.links.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* Email - Hitam/Putih */}
              <a
                href={aboutConfig.connect.links.email.url}
                className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"
                aria-label="Email"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}