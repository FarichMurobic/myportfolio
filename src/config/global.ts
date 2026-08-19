export const globalConfig = {
  site: {
    name: "My Portfolio",
    author: "Farich Murobic",
    description: "A brief description of your portfolio website",
    url: "/"
  },
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
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Farich Murobic. All rights reserved.",
    social: {
      github: "https://github.com/FarichMurobic",
      linkedin: "https://www.linkedin.com/in/farich-murobic-b2a292335/?trk=products_details_guest_profile_link",
      instagram: "https://instagram.com/murobiqfarich",
      email: "farichmurobiq11@gmail.com"
    }
  }
} as const;