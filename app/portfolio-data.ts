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
    featured: true,
    title: "Tindatala Store",
    category: "Point of sale",
    description:
      "A point-of-sale platform for sari-sari stores to record sales, manage inventory, and track customer credit (utang). It also handles subscription billing through PayMongo.",
    tags: ["Laravel 12", "React", "TypeScript", "MySQL", "AWS EC2", "Cloudflare Workers"],
    href: "https://tindatala.store",
    screenshot: {
      src: "/projects/tindatala-dashboard.png", width: 1888, height: 970,
      alt: "Tindatala store dashboard showing sales, low-stock items, customer credit and cash collections.",
      caption: "Store overview & daily collections",
    },
    details: {
      problem: "Small stores need to keep daily sales, stock levels and customer utang in sync. Cash received and sales made also need to be tracked separately when customers buy on credit.",
      solution: "A shared store workspace brings point of sale, inventory and customer balances together. The overview separates cash sales from credit repayments and highlights items that need restocking.",
      features: ["Point of sale and sales history", "Product catalog, categories and inventory", "Customer utang and repayment records", "Daily collections and low-stock overview", "Subscription billing through PayMongo"],
    },
  },
  {
    title: "Booking Website",
    category: "Reservations",
    description:
      "A resort booking platform that brings room reservations, availability, guest payments, and day-to-day operations into one workspace.",
    tags: ["Laravel 12", "Livewire 3"],
    href: "https://booking-system.infinityfreeapp.com",
    source: { href: "https://github.com/novel16/lara-booking-app", label: "Source code" },
    screenshot: {
      src: "/projects/booking-dashboard.png", width: 1892, height: 975,
      alt: "Resort booking dashboard showing arrivals, departures, available rooms and balances due.",
      caption: "Resort operations dashboard",
    },
    details: {
      problem: "Resort staff need to coordinate room availability, upcoming stays and guest payments. Reservation changes and event requests add more work to the same daily schedule.",
      solution: "A Laravel and Livewire booking flow connects guest reservations with a staff workspace. An occupancy calendar, booking records and reports give staff a shared view of rooms, arrivals and outstanding balances.",
      features: ["Room availability search and guest booking", "Occupancy calendar and reservation management", "Guest payment records and invoices", "Event bookings and date-change requests", "Operations reports and CSV exports"],
    },
  },
  {
    title: "Laravel Ecommerce",
    category: "Local commerce",
    description:
      "A storefront for a small business on Bantayan Island, with tools for managing products, tracking orders, and staying in touch with customers.",
    tags: ["Laravel 10", "Livewire", "E-commerce"],
    href: "https://azul150.infinityfreeapp.com/",
    source: { href: "https://github.com/novel16/Laravel9Ecommerce", label: "Source code" },
    screenshot: {
      src: "/projects/ecommerce-dashboard.png", width: 1887, height: 951,
      alt: "Azul Ecommerce admin dashboard with order totals, products, categories and brands.",
      caption: "Catalog & order management",
    },
    details: {
      problem: "A small business needs an online catalog that customers can browse and a way for staff to manage products and follow orders through fulfillment.",
      solution: "The storefront connects product browsing, wishlists and checkout with an admin workspace for the catalog and orders. Customers can review their orders while staff manage order status and invoices.",
      features: ["Product search, categories, brands and variants", "Customer accounts, wishlist and cart", "Checkout and customer order history", "Admin order status and invoice management", "Catalog, user and store settings"],
    },
  },
  {
    title: "Hatid",
    category: "Delivery management",
    description:
      "A delivery management app for riders to organize parcels and weekly batches, track deliveries, record collections and seller remittances, and review earnings reports.",
    tags: ["Next.js", "TypeScript", "Laravel 13", "Tailwind CSS", "Cloudflare Workers"],
    href: "https://hatid-frontend.meawkimeawchavez1996.workers.dev/",
    source: { href: "https://github.com/novel16/hatid-frontend", label: "Frontend source" },
    screenshot: {
      src: "/projects/hatid-workspace.png", width: 1891, height: 957,
      alt: "Hatid rider route workspace with manual customer selection and a maps-not-configured notice.",
      caption: "Rider workspace & manual stop selection",
    },
    details: {
      problem: "Riders need to organize parcels across delivery batches while keeping customer collections, rider fees and money owed to sellers clearly separated.",
      solution: "A Next.js rider workspace connects to a Laravel API for parcel intake, delivery outcomes and collection records. Seller remittances and earnings reports make the money trail visible alongside the delivery workflow.",
      features: ["Weekly batches, parcel entry and delivery status", "Customer and seller directories", "Cash and manually confirmed GCash records", "Seller remittances and earnings reports", "Browser draft recovery and manual stop selection"],
    },
  },
  {
    title: "Pamana — Cebu Built Heritage",
    category: "Culture & preservation",
    description:
      "I built the REST API and connected it to the frontend for a public website documenting Cebu’s built heritage.",
    tags: ["PHP OOP", "REST API", "JavaScript Fetch API"],
    href: "https://pamana.org/",
    details: {
      problem: "A public heritage website needs a reliable way to deliver its documented information to the frontend.",
      solution: "I built the REST API in object-oriented PHP and connected the frontend through the JavaScript Fetch API to serve Cebu's built-heritage content.",
      features: ["PHP OOP backend", "REST API development", "Frontend integration with Fetch API"],
    },
  },
  {
    title: "Employee Portal System",
    category: "Internal tools",
    description:
      "A role-based employee portal for attendance, profiles, and internal communications. I built backend logic and responsive interfaces.",
    tags: ["PHP OOP", "Tailwind CSS", "Fetch API"],
    note: "Private company project",
    details: {
      problem: "Employee attendance, profiles and internal communications need a shared workspace with access appropriate to each user's role.",
      solution: "I built backend logic and responsive interfaces for a role-based employee portal, using PHP OOP and Tailwind CSS with Fetch API integration.",
      features: ["Role-based access", "Attendance and employee profiles", "Internal communications", "Responsive interfaces"],
    },
  },
  {
    title: "AI Gmail Assistant",
    category: "Workflow automation",
    description:
      "Built a Gmail assistant at Glophics PH that sorts customer inquiries, prepares quotations, and drafts replies for staff to review.",
    tags: ["Google Apps Script", "Laravel", "AI function calling"],
    note: "Internal workflow",
    details: {
      problem: "Customer service staff need to sort incoming email inquiries, prepare quotations and draft replies for review.",
      solution: "I connected Google Apps Script and Laravel with AI function calling to classify inquiries, process quotation requests and prepare draft responses for staff to review.",
      features: ["Customer inquiry classification", "Quotation request processing", "Draft email responses", "Staff review before sending"],
    },
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

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    course: "CLF-C02 - English",
    issuer: "TESDA Online Program",
    type: "Certificate of completion",
    completed: "November 12, 2026",
    date: "2026-11-12",
    code: "TaFPuxDhho",
    pdf: "/certificates/tesda-aws-cloud-practitioner.pdf",
    preview: "/certificates/tesda-aws-cloud-practitioner.webp",
  },
] as const;
