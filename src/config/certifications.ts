/**
 * Certifications Page Configuration - Portfolio
 * @author Farich Murobic
 * @email farichmurobiq11@gmail.com
 * @github https://github.com/FarichMurobic
 * @website https://farichmurobic.vercel.app
 */

export const certificationsConfig = {
  // Page title
  title: "My Certifications",
  
  // Page description
  description: "Merupakan bentuk pengakuan formal terhadap kompetensi teknis dan keahlian profesional dalam pengembangan perangkat lunak kontemporer—meliputi analisis kebutuhan, perancangan solusi, implementasi sistem, hingga pengelolaan infrastruktur TI yang aman dan terukur.",
  
  // List of certifications
  items: [
    {
      id: 1,
      title: "OCI 2024 Certified AI Foundations Associate",
      description: "Covers an understanding of Generative AI, Large Language Models (LLMs), and the use of Oracle Cloud AI services to enhance application functionality and support intelligent business solutions.",
      imageUrl: "/assets/images/certifications/AI.jpg",
      href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=48E75D940390B38A6DAB7AE247FAC242553C2E42989BA5B3D7756040598C26DD",
      issuer: "Oracle",
      date: "2024"
    },
    {
      id: 2,
      title: "Getting Started with Java Programming",
      description: "Introduces the fundamentals of Java programming and the core principles of Object-Oriented Programming (OOP), including classes, objects, inheritance, encapsulation, polymorphism, and abstraction.",
      imageUrl: "/assets/images/certifications/Dicoding Java.jpg",
      href: "https://www.dicoding.com/certificates/JLX14G5J5X72",
      issuer: "Dicoding",
      date: "2024"
    },
    {
      id: 3,
      title: "Oracle Cloud Infrastructure (OCI) 2024 Foundations Associate",
      description: "Official Oracle Certification (1Z0-1085-24) covering core cloud services, including Identity and Access Management (IAM), Virtual Cloud Networks (VCN), Compute Instances, and various storage solutions such as Block Storage, Object Storage, and File Storage.",
      imageUrl: "/assets/images/certifications/Oracle Cloud Infrastruktur.jpg",
      href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=27CDFED215685A4A72C6E9A3B8115E09723464471B8A8DF77A49AA2F276B4202",
      issuer: "Oracle",
      date: "2024"
    },
    {
      id: 4,
      title: "Oracle Guided Learning Project Management Foundations",
      description: "Provides a foundational understanding of Project Management principles, System Development Life Cycle (SDLC), project governance, stakeholder management, risk assessment, and project delivery best practices.",
      imageUrl: "/assets/images/certifications/OGL.jpg",
      href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=23ED259951B816A40D4A6A2C5DA5E1C32342A279FCB25A04DED6CADB205F8307",
      issuer: "Oracle",
      date: "2024"
    },
    {
      id: 5,
      title: "CS301: Computer Architecture",
      description: "Provides a comprehensive understanding of computer architecture, low-level computing concepts, processor organization, memory hierarchy, instruction execution, and system efficiency optimization.",
      imageUrl: "/assets/images/certifications/Computer Architecture.jpg",
      href: "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1730812083/9165099925MF.pdf",
      issuer: "Saylor Academy",
      date: "2024"
    }
  ]
} as const;