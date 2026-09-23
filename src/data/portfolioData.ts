export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full Stack' | 'AI / ML' | 'Frontend' | 'Mobile / Tools';
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    headline: string;
    bio: string;
    avatarUrl: string;
    location: string;
    availabilityStatus: string;
    resumeUrl: string;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  skillCategories: SkillCategory[];
  projects: Project[];
  experiences: ExperienceItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Alex Vance",
    role: "Full Stack & AI Engineer",
    headline: "Building scalable web applications, intelligent AI models, and intuitive user experiences.",
    bio: "Passionate software engineer with expertise in React, TypeScript, Python, and cloud architectures. Dedicated to building high-performance web applications and integrating cutting-edge AI features into real-world applications.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    location: "San Francisco, CA (Open to Remote)",
    availabilityStatus: "Available for new projects",
    resumeUrl: "#",
  },

  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "alex.vance@example.com",
  },

  stats: [
    { label: "Years Experience", value: "4+", description: "Building web & AI products" },
    { label: "Projects Completed", value: "25+", description: "Delivered to production" },
    { label: "Technologies", value: "15+", description: "Frameworks & languages" },
    { label: "Client Satisfaction", value: "100%", description: "Positive feedback rate" },
  ],

  skillCategories: [
    {
      title: "Frontend Engineering",
      iconName: "Layout",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5 / Modern CSS", level: 98 },
        { name: "Framer Motion", level: 85 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      title: "Backend & Cloud",
      iconName: "Server",
      skills: [
        { name: "Node.js / Express", level: 90 },
        { name: "Python / FastAPI", level: 88 },
        { name: "PostgreSQL / Prisma", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Docker & AWS", level: 78 },
        { name: "GraphQL / REST", level: 92 },
      ],
    },
    {
      title: "AI & Machine Learning",
      iconName: "Cpu",
      skills: [
        { name: "PyTorch / TensorFlow", level: 80 },
        { name: "LangChain / LLMs", level: 88 },
        { name: "OpenAI & Gemini APIs", level: 92 },
        { name: "Vector DBs (Chroma/Pinecone)", level: 85 },
        { name: "Pandas & Data Science", level: 82 },
      ],
    },
    {
      title: "Tools & Workflow",
      iconName: "Wrench",
      skills: [
        { name: "Git & GitHub Actions", level: 92 },
        { name: "Vite & Webpack", level: 88 },
        { name: "Figma (UI Design)", level: 80 },
        { name: "Jest / Cypress Testing", level: 78 },
        { name: "Linux Administration", level: 82 },
      ],
    },
  ],

  projects: [
    {
      id: "1",
      title: "DeepFlow AI - Intelligent Document Analysis Platform",
      description: "An AI-powered SaaS application that ingests complex PDFs, extracts key insight metrics, and provides an interactive conversational AI interface.",
      category: "AI / ML",
      tags: ["React", "TypeScript", "Python", "FastAPI", "Gemini API", "Tailwind"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "2",
      title: "SentinelX - Cybersecurity Threat Dashboard",
      description: "Real-time analytics dashboard monitoring network telemetry, anomalous activity alerts, and threat visualization with WebSocket support.",
      category: "Full Stack",
      tags: ["Next.js", "Node.js", "Tailwind CSS", "Recharts", "WebSockets"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "3",
      title: "Aether UI - Modern Glassmorphism Design System",
      description: "An open-source React component library crafted with Tailwind CSS and Framer Motion for building futuristic glass-styled web apps.",
      category: "Frontend",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Storybook", "TypeScript"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "4",
      title: "PulseSync - Task & Workflow Automation CLI",
      description: "Cross-platform command-line tool built with TypeScript for synchronizing local developer environments, git hooks, and cloud storage.",
      category: "Mobile / Tools",
      tags: ["TypeScript", "Node.js", "CLI", "Docker", "Git"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: "5",
      title: "NeuralVision - Real-Time Image Recognition",
      description: "Browser-based computer vision tool utilizing WebAssembly and TensorFlow.js for instant image segmentation and label detection.",
      category: "AI / ML",
      tags: ["React", "TensorFlow.js", "WebAssembly", "Canvas API"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: "6",
      title: "Nexus Commerce - High Performance E-Commerce",
      description: "Sub-second loading e-commerce storefront integrated with Stripe payments, dynamic cart state management, and CMS integration.",
      category: "Full Stack",
      tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Tailwind"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Senior Full Stack Engineer",
      company: "Apex Tech Labs",
      period: "2024 - Present",
      location: "San Francisco, CA",
      description: [
        "Architected scalable micro-frontends and micro-services handling over 500k monthly active users.",
        "Integrated AI/LLM functionality into existing SaaS tools, increasing user productivity metrics by 35%.",
        "Mentored junior developers and established automated CI/CD pipelines with GitHub Actions."
      ],
      technologies: ["React", "TypeScript", "Python", "FastAPI", "AWS", "Docker"],
    },
    {
      id: "exp-2",
      role: "Frontend & UI Engineer",
      company: "Vanguard Digital",
      period: "2022 - 2024",
      location: "Remote",
      description: [
        "Developed responsive web applications and custom design systems using React and Tailwind CSS.",
        "Improved site speed and Web Vitals score by 40% through code splitting and asset optimization.",
        "Collaborated with product designers to implement interactive data visualizations and complex animations."
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "GraphQL"],
    },
    {
      id: "exp-3",
      role: "Software Engineering Intern",
      company: "CyberData Inc",
      period: "2021 - 2022",
      location: "San Jose, CA",
      description: [
        "Built internal dashboard utilities and RESTful API endpoints for telemetry data analysis.",
        "Wrote automated unit & end-to-end test suites, achieving 85%+ code coverage across core repositories."
      ],
      technologies: ["JavaScript", "Node.js", "Express", "PostgreSQL", "Jest"],
    }
  ]
};
