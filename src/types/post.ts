/**
 * Post Type Definition - Portfolio
 * @author Farich Murobic
 * @email farichmurobiq11@gmail.com
 * @github https://github.com/FarichMurobic
 * @website https://farichmurobic.vercel.app
 */

export interface Post {
  title: string;        // Blog post title
  description: string;  // Short description / excerpt
  date: string;         // Publication date (YYYY-MM-DD format)
  image: string;        // Image URL for thumbnail
  slug: string;         // URL slug (unique identifier)
  tags?: string[];      // Optional list of tags/categories
  author?: string;      // Optional author name
  updated?: string;     // Last updated date (auto-generated from file)
  readTime?: number;    // Estimated reading time in minutes
}