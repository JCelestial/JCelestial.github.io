export interface TimelineItem {
  logo: any;
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  type: "company" | "startup" | "agency" | "project";
  color: "sage" | "lavender" | "peach" | "yellow";
  isConstruction?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  isConstruction?: boolean;
  color: "sage" | "lavender" | "peach";
}

export interface HobbySection {
  id: string;
  title: string;
  gridCols: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export const timelineData: TimelineItem[] = [
  {
    id: "1",
    title: "Data Platform Engineer",
    company: "Capital One",
    period: "Dec 2023 - Present",
    logo: "/c1-minimal.png",
    description: `Delivered an enterprise Backstage platform to 10K engineers within a year, slashed high volume catalog loads 8x, and cut MTTR by two-thirds via real-time anomaly alerts and Observability integration.`,
    skills: ["React", "TypeScript", "Snowflake", "Kafka"],
    type: "company",
    color: "sage"
  },
  {
    id: "2",
    title: "Senior Software Engineer",
    company: "Capital One",
    period: "Apr 2022 - Dec 2023",
    logo: "/c1-minimal.png",
    description: `Wrote 25% of a CI/CD wrapper feature used by 5K developers—reducing project kickoff from weeks to one day—and orchestrated a Lambda migration while an automated process was built.`,
    skills: ["Java", "Python", "PostgreSQL", "AWS"],
    type: "company",
    color: "sage"
  },
  {
    id: "3",
    title: "Software Engineer",
    company: "American Airlines",
    period: "Dec 2020 - Apr 2022",
    logo: "/aa-logo.png",
    description: "Improved mobile boarding API p95 latency by > 40% and contributed to Azure kiosk replatforming to enable remote management across airport devices.",
    skills: ["Typescript", ".NET", "C#", "Azure Cloud", "Grafana"],
    type: "company",
    color: "yellow"
  },
  {
    id: "4",
    title: "Site Reliability Engineer",
    company: "Charles Schwab",
    period: "Dec 2019 - Dec 2020",
    logo: "/schwab-logo.png",
    description: "Orchestrated zero-downtime blue-green releases for 29M accounts on GCP and upheld 99.98 % uptime through rapid diagnostics and capacity planning.",
    skills: ["Splunk", "GCP", "Kubernetes", "Terraform"],
    type: "company",
    color: "peach"
  },
  {
    id: "5",
    title: "Computational Chemistry Researcher",
    company: "The University of Texas at Dallas",
    period: "Jan 2018 - Dec 2019",
    logo: "/utd-logo.png",
    description: "Simulated bioengineering chemical systems with Monte Carlo methods, designed vector-analysis algorithms to map 3D liquid crystal positioning, and developed object methods for density computations.",
    skills: ["Python", "C", "Statistical Models", "HPC Clusters", "Mathematics"],
    type: "project",
    color: "sage"
  }
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "S.A.T.U.R.D.A.Y.",
    description: "AI Powered Personal Assistant that helps you manage your tasks, schedule, and daily activities with ease. Inspired by F.R.I.D.A.Y. from Iron Man",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "Stripe"],
    github: "https://github.com/alexchen/ecommerce",
    demo: "https://ecommerce-demo.alexchen.dev",
    color: "sage",
    isConstruction: true
  },
  // {
  //   id: "2",
  //   title: "Analytics Dashboard",
  //   description: "Interactive data visualization dashboard with real-time metrics, custom chart components, and advanced filtering capabilities.",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
  //   technologies: ["Vue.js", "D3.js", "Python"],
  //   github: "https://github.com/alexchen/analytics",
  //   demo: "https://analytics-demo.alexchen.dev",
  //   color: "lavender"
  // },
  // {
  //   id: "3",
  //   title: "Task Management App",
  //   description: "Cross-platform mobile app for task management with offline sync, team collaboration, and intuitive drag-and-drop interface.",
  //   image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
  //   technologies: ["React Native", "Firebase", "Redux"],
  //   github: "https://github.com/alexchen/taskapp",
  //   demo: "https://taskapp-demo.alexchen.dev",
  //   color: "peach"
  // }
];

export const hobbiesData: HobbySection[] = [
  {
    id: "lifestyle",
    title: "Active Lifestyle",
    gridCols: "grid-cols-2 md:grid-cols-4",
    images: [
      {
        src: "/hobbies/rugby.jpg",
        alt: "rugby"
      },
      {
        src: "/hobbies/svg-race.jpeg",
        alt: "obs-race"
      },
      {
        src: "/hobbies/rainier.jpg",
        alt: "hiking"
      },
      {
        src: "/hobbies/mt-copy.png",
        alt: "martial-arts"
      }
    ]
  },
  {
    id: "creative",
    title: "Creative Pursuits",
    gridCols: "grid-cols-1 md:grid-cols-3",
    images: [
      {
        src: "/hobbies/cooking.PNG",
        alt: "cooking"
      },
      {
        src: "/hobbies/pasta.JPG",
        alt: "pasta"
      },
      {
        src: "/hobbies/mapo.JPG",
        alt: "mapo-tofu"
      }
    ]
  },
  {
    id: "intellectual",
    title: "Intellectual Developmeent",
    gridCols: "grid-cols-1 md:grid-cols-3",
    images: [
      {
        src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
        alt: "Painting Studio"
      },
      {
        src: "/hobbies/guitar.png",
        alt: "guitar"
      },
    ]
  },
  // {
  //   id: "social",
  //   title: "Social Connections",
  //   gridCols: "grid-cols-3 md:grid-cols-4",
  //   images: [
  //     {
  //       src: "/hobbies/dominion.jpg",
  //       alt: "dominion"
  //     }
  //   ]
  // }
];
