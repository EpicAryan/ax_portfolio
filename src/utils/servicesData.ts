
export interface Service {
  id: string;
  title: string;
  category: string;
  innerTitle: string;
  description: string;
  features: string[];
  images: { src: string; liveUrl: string }[];
}

export interface ServiceAccordionProps {
  services: Service[];
  defaultOpenId?: string;
}

export const servicesData: Service[] = [
  {
    id: "service-01",
    title: "TALENT SOURCING",
    category: "Hiring",
    innerTitle: "Giving projects to other freelancers - WordPress, Shopify, Backend etc. ",
    description: "I help in getting right projects for freelancers of any nature. Whether you're a designer, a game developer, or a seo consultant I get you the projects and take a finder's fee.",
    features: [
      "Project / testimonial - 1",
      "Project / testimonial - 2", 
      "Project / testimonial - 3",
      "Project / testimonial - 4",
      "Project / testimonial - 5",
      "Project / testimonial - 6", 
      "Project / testimonial - 7",
      "Project / testimonial - 8"
    ],
    images: [
    {
      src: "/hero.png",
      liveUrl: "https://example.com/project-1"
    },
    {
      src: "/hero.png",
      liveUrl: "https://example.com/project-2"
    },
    {
      src: "/hero.png",
      liveUrl: "https://example.com/project-3"
    }
  ]
  },
  {
    id: "service-02",
    title: "JOB FINDER",
    category: "Jobs",
    innerTitle: "Giving projects to other freelancers - WordPress, Shopify, Backend etc. ",
    description: "Comprehensive job search assistance to help you land your dream position. From resume optimization to interview preparation, I provide end-to-end support.",
    features: [
      "Resume optimization",
      "Interview coaching",
      "Job market analysis", 
      "Salary negotiation"
    ],
    images: [
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-1"
      },
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-2"
      },
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-3"
      }
    ]
  },
  {
    id: "service-03",
    title: "MVP DEVELOPMENT",
    category: "Build",
    innerTitle: "Giving projects to other freelancers - WordPress, Shopify, Backend etc. ",
    description: "Transform your ideas into market-ready products with rapid MVP development. Focus on core features that matter most to your users.",
    features: [
      "Rapid prototyping",
      "User testing",
      "Technical architecture",
      "Launch strategy"
    ],
    images: [
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-1"
      },
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-2"
      },
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-3"
      }
    ]
  },
  {
    id: "service-04",
    title: "CUSTOMER ACQUISITION",
    category: "Growth",
    innerTitle: "Giving projects to other freelancers - WordPress, Shopify, Backend etc. ",
    description: "Scale your business with proven customer acquisition strategies. From digital marketing to growth hacking techniques.",
    features: [
      "Growth strategy",
      "Marketing campaigns",
      "Customer analytics",
      "Conversion optimization"
    ],
    images: [
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-1"
      },
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-2"
      },
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-3"
      }
    ]
  },
  {
    id: "service-05",
    title: "PROJECT OUTSOURCING",
    category: "Trading",
    innerTitle: "Giving projects to other freelancers - WordPress, Shopify, Backend etc. ",
    description: "Giving projects to other freelancers - WordPress, Shopify, Backend etc. I do help in getting right projects for freelancers of any nature.",
    features: [
      "Project / testimonial - 1",
      "Project / testimonial - 2",
      "Project / testimonial - 3", 
      "Project / testimonial - 4"
    ],
    images: [
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-1"
      },
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-2"
      },
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-3"
      }
    ]
  },
  {
    id: "service-06",
    title: "PRODUCT SALES",
    category: "Ecommerce Sales",
    innerTitle: "Giving projects to other freelancers - WordPress, Shopify, Backend etc. ",
    description: "Boost your product sales with strategic marketing and optimization techniques. From product positioning to sales funnel optimization.",
    features: [
      "Sales strategy",
      "Product positioning",
      "Funnel optimization",
      "Revenue growth"
    ],
    images: [
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-1"
      },
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-2"
      },
      {
        src: "/hero.png",
        liveUrl: "https://example.com/project-3"
      }
    ]
  }
]
