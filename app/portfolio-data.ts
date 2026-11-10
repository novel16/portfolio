export const profile = {
  name: "Novel P. Chavez",
  role: "Full-stack web developer",
  location: "Cebu, Philippines",
  email: "lapaychavez1996@gmail.com",
  github: "https://github.com/novel16",
  cv: "/frontend/assets/cv/novelchavez-cv.pdf",
  phones: [
    { label: "0919 759 5268", href: "tel:+639197595268" },
    { label: "0992 402 8116", href: "tel:+639924028116" },
  ],
  description:
    "Novel P. Chavez is a web developer based in Cebu, Philippines, working with PHP, Laravel, REST APIs, and responsive web interfaces.",
};

export const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/novel-chavez-2674811b3/" },
  { label: "Facebook", href: "https://www.facebook.com/lev.chavz.2024/" },
];

export const projects = [
  {
    art: "pos",
    title: "Tindatala Store",
    category: "Point of sale",
    description:
      "A point-of-sale platform for sari-sari stores to record sales, manage inventory, and track customer credit (utang). It also handles subscription billing through PayMongo.",
    tags: ["Laravel 12", "React", "TypeScript", "MySQL", "AWS EC2", "Cloudflare Workers"],
    href: "https://tindatala.store",
  },
  {
    art: "booking",
    title: "Booking Website",
    category: "Reservations",
    description:
      "A booking platform with real-time reservations, schedule management, and an admin dashboard to manage bookings.",
    tags: ["Laravel 12", "Livewire 3"],
    href: "https://booking-system.infinityfreeapp.com",
  },
  {
    art: "commerce",
    title: "Laravel Ecommerce",
    category: "Local commerce",
    description:
      "A storefront for a small business on Bantayan Island, with tools for managing products, tracking orders, and staying in touch with customers.",
    tags: ["Laravel", "E-commerce"],
    href: "https://azul150.infinityfreeapp.com/",
  },
  {
    art: "heritage",
    title: "Pamana — Cebu Built Heritage",
    category: "Culture & preservation",
    description:
      "I built the REST API and connected it to the frontend for a public website documenting Cebu’s built heritage.",
    tags: ["PHP OOP", "REST API", "JavaScript Fetch API"],
    href: "https://pamana.org/",
  },
  {
    art: "portal",
    title: "Employee Portal System",
    category: "Internal tools",
    description:
      "A role-based employee portal for attendance, profiles, and internal communications. I built backend logic and responsive interfaces.",
    tags: ["PHP OOP", "Tailwind CSS", "Fetch API"],
    note: "Private company project",
  },
  {
    art: "mail",
    title: "AI Gmail Assistant",
    category: "Workflow automation",
    description:
      "Built a Gmail assistant at Glophics PH that sorts customer inquiries, prepares quotations, and drafts replies for staff to review.",
    tags: ["Google Apps Script", "Laravel", "AI function calling"],
    note: "Internal workflow",
  },
] as const;

export const experience = [
  {
    role: "Backend Web Developer",
    company: "Glophics PH",
    dates: "Apr 2026 – Oct 2026",
    highlights: [
      "Developed and maintained backend functionality and RESTful APIs using Laravel for e-commerce applications with Vue/Nuxt frontends.",
      "Resolved bugs, implemented enhancements, and supported ongoing maintenance of multiple e-commerce websites.",
      "Built an AI-powered Gmail assistant using Google Apps Script and Laravel to classify customer inquiries, process quotation requests, and generate draft email replies for CSR review.",
      "Used Git and GitHub for version control and hotfix workflows, coordinating issue tracking and testing with the team through Jira.",
      "Supported QA builds and production deployments using Jenkins and AWS EC2.",
    ],
  },
  {
    role: "Web Developer",
    company: "Canete Medina Philippines Inc. | Grupo Antheia Inc.",
    dates: "Apr 2024 – Jun 2025",
    highlights: [
      "Developed RESTful APIs using PHP OOP to connect and handle data requests from the frontend via JS fetch.",
      "Built and maintained a secure employee portal with role-based access, built entirely from scratch.",
      "Led backend API development for Pamana.org, a public-facing heritage site using clean OOP PHP and Fetch API.",
      "Contributed to designing web interfaces with a user-friendly and responsive layout using Tailwind CSS.",
      "Collaborated with a small team to deliver on-time features while ensuring high code quality and modular architecture.",
      "Maintained and improved existing web applications through refactoring, debugging, and performance optimization.",
    ],
  },
  {
    role: "Web Developer",
    company: "Gaisano Capital Corporate",
    dates: "Jun 2022 – Mar 2024",
    highlights: [
      "Assisted in the development of the Gaisano Electronic Raffle System by providing key feature recommendations and feedback.",
      "Maintained and monitored databases to ensure integrity, performance, and availability of critical business applications.",
      "Supported inventory system improvements through recommendations on workflows and structure for products sold across branches.",
      "Provided remote technical assistance to various branches for database-related issues and troubleshooting.",
    ],
  },
  {
    role: "Virtual Assistant",
    company: "EVAS",
    dates: "Jan 2021 – Jul 2021",
    highlights: [
      "Managing Walmart store operations for clients, including product sourcing, listing, and optimization. Overseeing order processing, tracking shipments, and ensuring timely fulfillment. Monitoring and analyzing sales performance to maximize revenue growth.",
    ],
  },
];

export const skills = [
  { label: "Backend", mark: "BE", tools: ["PHP (OOP)", "Laravel", "MySQL", "REST APIs"] },
  { label: "Frontend", mark: "FE", tools: ["JavaScript", "React", "Next.js" , "Vue.js", "Nuxt.js"] },
  { label: "Styling & CMS", mark: "UI", tools: ["Tailwind CSS", "Bootstrap", "CSS / Sass", "WordPress"] },
  { label: "Tools & delivery", mark: "OP", tools: ["Git / GitHub", "Jira", "Jenkins", "AWS EC2", "Web hosting"] },
];
