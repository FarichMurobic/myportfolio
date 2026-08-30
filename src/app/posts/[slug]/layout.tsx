/**
 * Posts Slug Layout - Empty Wrapper for Blog Detail Pages
 * This layout simply passes through children without adding extra structure.
 * Used to avoid interfering with the blog post's own layout.
 * 
 * @author Farich Murobic
 * @email farichmurobiq11@gmail.com
 * @github https://github.com/FarichMurobic
 * @website https://farichmurobic.vercel.app
 */

export default function Layout({ children }: { children: React.ReactNode }) {
  // Passthrough layout: returns children as-is without wrapping
  return children;
}