import { postsConfig } from "@/config/posts";

export async function generateStaticParams() {
  // Ambil slug dari postsConfig
  return postsConfig.posts.map((post) => ({
    slug: post.slug.replace('posts/', ''), // Hapus "posts/" dari slug
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  // Cari post berdasarkan slug (tanpa "posts/")
  const post = postsConfig.posts.find((p) => p.slug === `posts/${params.slug}`);

  if (!post) {
    return (
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <p className="text-gray-600 dark:text-gray-400">
            The post you're looking for doesn't exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">{post.date}</p>
        <div className="prose dark:prose-invert max-w-none">
          {/* Render konten HTML */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </main>
  );
}