import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { postsConfig } from "@/config/posts";
import { notFound } from 'next/navigation';

// Generate static paths
export async function generateStaticParams() {
  return postsConfig.posts.map((post) => ({
    slug: post.slug.replace('posts/', ''),
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postsConfig.posts.find(p => p.slug === `posts/${slug}`);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative flex-grow flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px] -z-10"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-10 blur-[100px]"></div>
        </div>

        <Navbar />

        <section className="relative z-20 max-w-4xl mx-auto mt-20 md:mt-32 mb-12 px-7 lg:px-0">
          <div className="relative p-7 rounded-2xl">

            {/* Border */}
            <div className="absolute inset-0 z-20 w-full h-full bg-transparent border border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl"></div>

            {/* Isi blog */}
            <div className="relative z-30">
              <div className="prose dark:prose-invert max-w-none prose-sm lg:prose-base
                max-md:[&_h1]:!text-[15px]
                max-md:[&_h2]:!text-[14px]
                max-md:[&_h3]:!text-[13px]
                max-md:[&_p]:!text-xs
                max-md:[&_li]:!text-xs
                max-md:[&_code]:!text-[10px]
              ">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}