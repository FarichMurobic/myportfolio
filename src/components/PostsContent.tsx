"use client";

import { useState } from "react";
import { postsConfig } from "@/config/posts";
import PostsSearch from "./PostsSearch";
import PostCard from "@/components/PostCard";

const POSTS_PER_PAGE = 5;

export default function PostsContent() {
  const totalPages = Math.ceil(
    postsConfig.posts.length / POSTS_PER_PAGE
  );

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

  const currentPosts = postsConfig.posts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <section className="relative z-20 w-full max-w-4xl mx-auto mt-20 md:mt-32 mb-12 px-4 sm:px-7">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 text-center sm:text-left w-full sm:w-auto">
          {postsConfig.title}
        </h2>
      </div>

      <div className="flex flex-col items-stretch w-full gap-5">
        {currentPosts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            href={`/${post.slug}`}
            pattern="dots"
            imageUrl={post.image}
            readingTime={parseInt(post.readTime)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((prev) => Math.max(1, prev - 1))
            }
            className={`px-3 py-1 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {postsConfig.pagination.previous}
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              aria-current={
                index + 1 === currentPage ? "page" : undefined
              }
              className={`w-8 h-8 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium ${
                index + 1 === currentPage
                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(totalPages, prev + 1)
              )
            }
            className={`px-3 py-1 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {postsConfig.pagination.next}
          </button>
        </div>
      )}

      <PostsSearch />
    </section>
  );
}