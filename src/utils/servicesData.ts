
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
    description: "With the extensive network that goes beyond linkedin, I help startups, enterprises and teams with their hiring process. Making sure they get access to the best talent out there which fits into their budget, has the character along with what is required. And I do it fast. No BS and No Compromise",
    features: [
      "Resume optimization",
      "Interview coaching",
      "Job market analysis", 
      "Salary negotiation",
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
    id: "service-02",
    title: "JOB FINDER",
    category: "Jobs",
    innerTitle: "Giving projects to other freelancers - WordPress, Shopify, Backend etc. ",
    description: "Job hunting & Job switching is not always a cake walk. With personal work experience of working in 11+ companies I help working professionals, freelancers, freshers, interns & more to secure a job fast and according to their preference.",
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
    title: "MVP/SaaS Development",
    category: "Build",
    innerTitle: "Giving projects to other freelancers - WordPress, Shopify, Backend etc.",
    description: "Creating designs that stand out. Less noise for the User, more noise in the Market. Aim is to make products that people can't stop talking about.",
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
    title: "USER ACQUISITION",
    category: "Growth",
    innerTitle: "Getting users on your platform",
    description:
      "Planning a new app launch? Need MVP validation? Want to do a PMF campaign? Need Paid Users for your solution? - We do it all through our in-house strategy which involves communities access, network, offline marketing, awareness campaigns and UAT testing.",
    features: [
      "Community-driven growth",
      "Offline marketing",
      "PMF & MVP validation",
      "UAT & user onboarding"
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
    title: "PRODUCT SALES",
    category: "Ecommerce",
    innerTitle: "Getting sales for your product (physical ecommerce product)",
    description:
      "We design a brand or a barter campaign as per your budget and give you sales, help you generate revenue. Whether you are a Shopify seller, Etsy seller, Blinkit seller or you sell your own merchandise - We help you scale.",
    features: [
      "Barter or paid campaigns",
      "Revenue-focused strategies",
      "Ecommerce growth",
      "Brand visibility"
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
    title: "INFLUENCER COLLABS",
    category: "Branding",
    innerTitle: "Finding influencer talent for your brand campaigns, events",
    description:
      "We onboard best influencers on your running marketing campaign to make it a super success - Ensuring brand recall, category creation, retention, and engagement.",
    features: [
      "Top-tier influencers",
      "Campaign amplification",
      "Category creation",
      "High engagement strategy"
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
    id: "service-07",
    title: "AGENCY BIZ DEV",
    category: "Lead Generation",
    innerTitle: "Getting new biz for agencies and independent influencers, creators",
    description:
      "We act as your lead generation commando. Our aim is to thrive in your biz and get deals that eventually convert.",
    features: [
      "Outbound strategy",
      "Lead qualification",
      "Deal conversions",
      "Sales enablement"
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
    id: "service-08",
    title: "GTM & PRODUCT DESIGN",
    category: "Launch",
    innerTitle: "Design, Marketing, GTM for your product",
    description:
      "We also do a redesign, fresh design for your product to get more visibility and enhance user rating. GTM and marketing is done via a team of people who have served companies as a Media Head and have run campaigns worth 100+ cr.",
    features: [
      "UI/UX revamp",
      "Go-to-market execution",
      "High-budget campaign team",
      "Brand refresh"
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
    id: "service-09",
    title: "PROJECT OUTSOURCING",
    category: "Freelancing",
    innerTitle: "Giving projects to other freelancers - WordPress, Shopify, Backend etc.",
    description:
      "I do help in getting new projects for freelancers of any nature. Whether you're a designer, a game developer, a SEO consultant — I get you the projects and take a finder’s fee.",
    features: [
      "Freelance match-making",
      "Project sourcing",
      "Finder's fee model",
      "Platform independent"
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
    id: "service-10",
    title: "TRADING MENTORSHIP",
    category: "Finance",
    innerTitle: "Trading mentorship",
    description:
      "The trading and investing mentorship sessions are invite-only. Aim is to tell what not to do when starting your trading journey.",
    features: [
      "Beginner mistakes to avoid",
      "Realistic mentorship",
      "Hands-on examples",
      "Invite-only access"
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
    id: "service-11",
    title: "WEALTH MANAGEMENT",
    category: "Investing",
    innerTitle: "Wealth Management (Account Handling)",
    description:
      "Investing via swing trading where I generate a substantial return and get a piece of profit share.",
    features: [
      "Swing trading strategy",
      "Return-based model",
      "Profit share",
      "Account growth"
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
    id: "service-12",
    title: "DEAL CLOSING",
    category: "Business Development",
    innerTitle: "Getting deals & converting them",
    description:
      "The business development projects are handled where we do the outbound for you and get deals in the system.",
    features: [
      "Outbound strategy",
      "BD automation",
      "Pipeline building",
      "Conversion tracking"
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
