import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import PostCard from "@/components/PostCard";

const postsDirectory = path.join(process.cwd(), 'src/posts');

export default function PostsContent() {
  const files = fs.readdirSync(postsDirectory);
  const allPosts = files.map((file) => {
    const filePath = path.join(postsDirectory, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    // Hitung read time
    const stats = readingTime(content);
    const readTime = Math.ceil(stats.minutes);

    // Ambil tanggal modifikasi file (otomatis)
    const fileStats = fs.statSync(filePath);
    const updatedDate = fileStats.mtime.toISOString().split('T')[0]; // Format YYYY-MM-DD

    return {
      slug: file.replace('.md', ''),
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || '',
      updated: updatedDate, // <-- OTOMATIS dari file
      image: data.image || '/assets/images/posts/default.jpg',
      readTime: readTime,
      author: data.author || 'Farich Murobic',
      tags: data.tags || [],
    };
  });

  return (
    <section className="relative z-20 w-full max-w-4xl mx-auto mt-20 md:mt-32 mb-12 px-4 sm:px-7">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 text-center sm:text-left w-full sm:w-auto">
          My Posts
        </h2>
      </div>

      <div className="flex flex-col items-stretch w-full gap-5">
        {allPosts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            href={`/posts/${post.slug}`}
            pattern="dots"
            imageUrl={post.image}
            readingTime={post.readTime}
            updated={post.updated}
          />
        ))}
      </div>
    </section>
  );
}