const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Concepts" },
  { text: "Designs" },
  { text: "Code" },
  { text: "Collaboration" },
];

const projects = [
  {
    title: "TripTribe",
    description:
      "A travel community platform where users can share destinations, trip ideas, and explore travel content.",
    details:
      "Built with Vue.js and Django. I implemented authentication, REST APIs, database models, content posting flows, and responsive UI screens.",
    imgPath: "/images/project1.png",
    alt: "TripTribe travel community platform",
    githubUrl: "https://github.com/JenC2/trip-tribe",
  },
  {
    title: "Adventure Guides",
    description: "Travel Information Platform",
    details: "A travel guide application focused on destination information.",
    imgPath: "/images/project2.png",
    alt: "Adventure Guides travel information platform",
    bgColor: "bg-[#ffefdb]/50",
    githubUrl: "https://github.com/JenC2/projet_collectif_dataviz-dataviz",
  },
  {
    title: "AI Career Assistant",
    description: "In-progress LLM-powered assistant for career support.",
    details:
      "Exploring prompt design, LLM API integration, and conversation flows for interview coaching, resume review.",
    imgPath: "/images/project3.png",
    alt: "AI Career Assistant",
    bgColor: "bg-[#ffe7eb]/50",
    githubUrl: "https://github.com/JenC2/AI-Career-Assistant-In-Progress",
  },
];

const abilities = [
  {
    imgPath: "/images/adaptability.jpg",
    title: "Adaptability",
    desc: "Quickly adapting to new technologies, environments, and project requirements while staying effective.",
  },
  {
    imgPath: "/images/autonomy.jpg",
    title: "Autonomy",
    desc: "Able to work independently, take ownership of tasks, and drive features from idea to completion.",
  },
  {
    imgPath: "/images/team.jpg",
    title: "Teamwork",
    desc: "Collaborating effectively with others, sharing ideas, and contributing to a healthy development workflow.",
  },
  {
    imgPath: "/images/organize.jpg",
    title: "Rigor & Organization",
    desc: "Writing clean, structured code and staying organized to ensure maintainability and scalability.",
  },
];

const techStackImgs = [
  {
    name: "JavaScript",
    imgPath: "/images/logos/javascript.png",
  },
  {
    name: "HTML",
    imgPath: "/images/logos/html.png",
  },
  {
    name: "CSS",
    imgPath: "/images/logos/css.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Elixir",
    imgPath: "/images/logos/elixir.svg",
  },
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Django",
    imgPath: "/images/logos/django.png",
  },
  {
    name: "Phoenix",
    imgPath: "/images/logos/phoenix.svg",
  },
  {
    name: "Flutter",
    imgPath: "/images/logos/flutter.svg",
  },
  {
    name: "SQL",
    imgPath: "/images/logos/sql.png",
  },
  {
    name: "MongoDB",
    imgPath: "/images/logos/mongodb.svg",
  },
  {
    name: "AWS",
    imgPath: "/images/logos/aws.svg",
  },
  {
    name: "Docker",
    imgPath: "/images/logos/docker.png",
  },
  {
    name: "Figma",
    imgPath: "/images/logos/figma.svg",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
];

const expCards = [
  {
    review:
      "Working at Myriad Connect allowed me to grow as a full stack developer in a fintech environment, building secure and scalable production-ready solutions.",
    imgPath: "/images/exp1.png",
    title: "Full Stack Developer - Fintech",
    date: "Oct 2023 - Nov 2025",
    responsibilities: [
      "Developed and maintained USSD-based solutions using Elixir, adding new features and fixing production issues.",
      "Built secure backend services with Elixir and Phoenix for tax payment, KYC, and B2W workflows.",
      "Debugged production incidents, shipped backend fixes, integrated external APIs, and deployed serverless AWS services using Lambda, API Gateway, S3, and DynamoDB.",
      "Implemented frontend features for mobile apps using Flutter.",
      "Developed React features for a fintech web application, integrating multiple APIs securely.",
      "Worked in an Agile environment (scrum, code reviews, sprint planning).",
    ],
  },
  {
    review:
      "This role strengthened my organizational skills, autonomy, and ability to manage complex processes with international stakeholders.",
    imgPath: "/images/exp2.png",
    title: "Purchasing Manager",
    date: "Jan 2016 - Oct 2022",
    responsibilities: [
      "Managed end-to-end order processes from customer demand to factory shipment.",
      "Collaborated with international suppliers (China, Turkey), negotiating prices and ensuring production quality.",
      "Sourced fabrics and materials aligned with market trends and quality standards.",
      "Coordinated with product teams to meet technical and regulatory requirements.",
      "Provided clients with detailed product and order information.",
    ],
  },
  {
    review:
      "At Syngenta, I developed analytical and reporting skills while working on supply chain processes and data management.",
    imgPath: "/images/exp3.png",
    title: "Supply Chain Assistant Manager",
    date: "Jul 2014 - Dec 2014",
    responsibilities: [
      "Managed orders and stock levels for packaging materials.",
      "Produced and analyzed monthly procurement reports.",
      "Maintained and updated product databases.",
    ],
  },
  {
    review:
      "This experience gave me a strong foundation in logistics operations, coordination, and client communication.",
    imgPath: "/images/exp4.png",
    title: "Operation Specialist",
    date: "Jul 2012 - Jun 2014",
    responsibilities: [
      "Handled international transportation requests for import clients.",
      "Optimized shipping routes and selected efficient transport methods.",
      "Maintained regular communication with clients for shipment tracking.",
    ],
  },
];

const socialImgs = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/jenny-chen-chou",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "github",
    url: "https://github.com/JenC2",
    imgPath: "/images/github.png",
  },
];

export {
  words,
  abilities,
  socialImgs,
  techStackImgs,
  expCards,
  navLinks,
  projects,
};
