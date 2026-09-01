/**
 * Blog Post Detail Page - Dynamic Route
 * @author Farich Murobic
 * @email farichmurobiq11@gmail.com
 * @GitHub https://github.com/FarichMurobic
 * @website https://farichmurobic.vercel.app
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import readingTime from 'reading-time';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Directory where blog posts (.md files) are stored
const postsDirectory = path.join(process.cwd(), 'src/posts');

/**
 * Generate static paths for all blog posts at build time
 * This enables pre-rendering for faster page loads
 */
export async function generateStaticParams() {
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => ({
    slug: file.replace('.md', ''),
  }));
}

/**
 * Blog Post Detail Page
 * Renders a single blog post from markdown file
 */
export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Extract slug from URL params
  const { slug } = await params;

  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter and content
  const { data, content } = matter(fileContent);

  // Clean up content
  const cleanContent = content
    .replace(/^---[\s\S]*?---\s*/, '')
    .replace(/^# .*\n?/m, '')
    .replace(/\nFarich Murobic/g, '')
    .replace(/\n\s*\n$/, '');

  // Convert markdown to HTML
  // Tables are wrapped so ONLY the table can scroll horizontally on mobile
  const htmlContent = (await marked(cleanContent))
  .replace(/<table>/g, '<div class="table-scroll"><table>')
  .replace(/<\/table>/g, '</table></div>');

  // Calculate reading time automatically
  const stats = readingTime(cleanContent);
  const readTime = Math.ceil(stats.minutes);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative flex-grow flex flex-col overflow-hidden">

        {/* Background layer */}
        <div className="absolute inset-0 z-0">

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px] -z-10"></div>

          {/* Glowing orb effect */}
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-10 blur-[100px]"></div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Blog post content */}
        <section className="relative z-20 w-full max-w-4xl mx-auto mt-20 md:mt-32 mb-12 px-4 sm:px-6 lg:px-0">

          <div className="relative w-full p-5 sm:p-7 rounded-2xl overflow-hidden">

            {/* Dashed border wrapper */}
            <div className="absolute inset-0 z-20 w-full h-full bg-transparent border border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl"></div>

            <div className="relative z-30">

              {/* Post title */}
              <h1 className="text-3xl font-bold mb-2">
                {data.title}
              </h1>

              {/* Blog content */}
              <div
                className="
                  prose
                  dark:prose-invert
                  max-w-none
                  prose-sm
                  lg:prose-base

                  max-md:[&_h1]:!text-[15px]
                  max-md:[&_h2]:!text-[14px]
                  max-md:[&_h3]:!text-[13px]
                  max-md:[&_p]:!text-xs
                  max-md:[&_li]:!text-xs
                  max-md:[&_code]:!text-[10px]
                "
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: htmlContent,
                  }}
                />
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}