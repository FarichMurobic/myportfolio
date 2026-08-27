export const projectsConfig = {
  title: "My Projects",
  description: "Portofolio ini memuat proyek-proyek awal perjalanan saya sebagai Backend Developer—mulai dari personal portfolio website, proyek pembelajaran Java fundamental, hingga implementasi REST API pertama saya menggunakan Spring Boot. Meskipun masih dalam tahap pengembangan, setiap proyek mencerminkan fondasi teknis yang solid, pemahaman terhadap OOP dan algoritma, serta kemampuan membangun sistem backend yang terstruktur.",
  backButton: "Back to Home",
  noProjects: "No projects found.",
  items: [
    {
      title: "Personal Portfolio Website",
      description: "Personal portfolio website built with Next.js 14 and Tailwind CSS. Showcasing my journey in software development—featuring projects, certifications, and technical insights. Fully responsive with dark mode support.",
      href: "https://farichmurobic.vercel.app",
      imageUrl: "/assets/images/projects/Portfolio.jpeg",
      techStack: ["Next.js 14", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Java Fundamentals & Object-Oriented Programming",
      description: "A comprehensive learning journey covering Java fundamentals, Object-Oriented Programming (OOP), Collections Framework, Exception Handling, File I/O, Generics, Multithreading, Data Structures, Algorithms, and software development best practices.",
      href: "https://github.com/FarichMurobic/java-fundamental",
      imageUrl: "/assets/images/projects/Java.png",
      techStack: ["Java", "OOP", "Collections Framework"]
    },
    {
      title: "Spring Boot Learning",
      description: "A comprehensive Spring Boot learning project guided by an official reference book—covering core concepts from dependency injection and REST API design to database integration and application security. Built to establish a deep understanding of the Spring ecosystem and best practices in modern Java backend development.",
      href: "https://github.com/FarichMurobic/belajar-springboot",
      imageUrl: "/assets/images/projects/Spring Boot.png",
      techStack: ["Java", "Spring Boot"]
    },
    {
      title: "Administration System",
      description: "A robust backend system built with Spring Boot 4.0.8 and Java 21, implementing Domain-Driven Design (DDD) and Rich Domain Model patterns. Serves as the administrative backend for a modern dashboard—delivering secure authentication, comprehensive user management, and scalable API services.",
      href: "https://github.com/FarichMurobic/system-administration",
      imageUrl: "/assets/images/projects/Administrasi-System.png",
      techStack: ["Java", "Spring Boot", "MySQL"]
    }
//     {
//       title: "Java Fundamentals & Object-Oriented Programming",
//       description: "A comprehensive learning journey covering Java fundamentals, Object-Oriented Programming (OOP), Collections Framework, Exception Handling, File I/O, Generics, Multithreading, Data Structures, Algorithms, and software development best practices.",
//       href: "https://github.com/FarichMurobic/java-fundamental",
//       imageUrl: "/assets/images/projects/project2.jpg"
//     },
//     {
//       title: "Project Three",
//       description: "Share details about your third project. What problems did it solve? What was the outcome?",
//       href: "#!",
//       imageUrl: "/assets/images/projects/project3.png"
//     }
  ]
} as const; 