/**
 * Global Configuration - Portfolio
 * @author Farich Murobic
 * @email farichmurobiq11@gmail.com
 * @github https://github.com/FarichMurobic
 * @website https://farichmurobic.vercel.app
 */

export const globalConfig = {
  // Site information
  site: {
    name: "Portfolio Farich Murobic",
    author: "Farich Murobic",
    description: "Personal portfolio of Farich Murobic — Backend Developer specializing in Java, Spring Boot, and scalable system architecture.",
    url: "/"
  },
  
  // Navigation menu items
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Certifications",
        href: "/certifications"
      },
      {
        title: "Posts",
        href: "/posts"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  
  // Footer information
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Farich Murobic. All rights reserved.",
    // Social media links
    social: {
      github: "https://github.com/FarichMurobic",
      linkedin: "https://www.linkedin.com/in/farich-murobic-b2a292335/?trk=products_details_guest_profile_link",
      instagram: "https://instagram.com/murobiqfarich",
      email: "farichmurobiq11@gmail.com"
    }
  }
} as const;