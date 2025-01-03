/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}


default -> backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

*/

export const CertificationsData = [
  {
    id: 1,
    name: "Machine Learning Speacialization",
    description: "machine learning.",
    date: "2023-09-21",
    demoLink: "https://coursera.org/share/ac9b930a6253ecdfa694a45861411b69",
    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/3a/9d2a7af297483a845340bcfbac6f1e/MLS.course-banners-01_Course-Logo-.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50"
  },
  {
    id: 2,
    name: "Deep Learning Specialization",
    description: "Deep learning",
    date: "2022-10-23",
    demoLink: "https://coursera.org/share/aec26728bce8f6f3625ba10e32109a31",
    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/a4/079d5e7c7b45ac9107f22bfcfeab91/Specialization-logo.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50"
  },
  {
    id: 3,
    name: "Reinforcement Learning Specialization",
    description: "Fundamentals and beyond basice of RL.",
    date: "2023-12-03",
    demoLink: "https://coursera.org/share/36d02d7f288076a4ea55e6d9935ff2b6",
    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/28/7b2be14eff433f94ce9f55e8b8bd99/square-graphic-course-1.jpg"
  },
  {
    id: 4,
    name: "Data Structures and Algorithms",
    description: "Learned algorithms.",
    date: "2022-12-07",
    demoLink: "https://coursera.org/share/7bfca48ebab45e43d93af38f35514db7",
    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fb/434400d9ac11e5afbfa359f34ae5f0/logo3.png"
  },
];

export const InternshipsData = [
  {
    id: 1,
    name: "AI/ML engineer @ FeynnLabsServies",
    description: "Learned applications of ML.",
    date: "2024-02-25",
    demoLink: "/InternCertificate.pdf",
  },
];

export const projectsData = [
  {
    id: 1,
    name: "EcoTracker",
    description: "Track your carbon footprint",
    date: "2022-08-15",
    demoLink: "https://ecotracker.example.com",
  },
  {
    id: 2,
    name: "ArtGallery Online",
    description: "Digital art showcase platform",
    date: "2022-06-20",
    demoLink: "https://artgalleryonline.example.com",
  },
  {
    id: 3,
    name: "BudgetPlanner",
    description: "Plan and track expenses",
    date: "2022-09-10",
    demoLink: "https://budgetplanner.example.com",
  },
  {
    id: 4,
    name: "HealthBeat",
    description: "Monitor heart rate zones",
    date: "2022-05-30",
    demoLink: "https://healthbeat.example.com",
  },
  {
    id: 5,
    name: "RecipeFinder",
    description: "Discover new recipes",
    date: "2022-07-12",
    demoLink: "https://recipefinder.example.com",
  },
  {
    id: 6,
    name: "JourneyLogger",
    description: "Log your travels",
    date: "2022-10-01",
    demoLink: "https://journeylogger.example.com",
  },
  {
    id: 7,
    name: "StudyBuddy",
    description: "Collaborative learning platform",
    date: "2022-04-18",
    demoLink: "https://studybuddy.example.com",
  },
  {
    id: 8,
    name: "TechTalk",
    description: "Tech news aggregator",
    date: "2022-11-05",
    demoLink: "https://techtalk.example.com",
  },
  {
    id: 9,
    name: "FitTrack",
    description: "Fitness and workout tracker",
    date: "2022-03-22",
    demoLink: "https://fittrack.example.com",
  },
  {
    id: 10,
    name: "MindfulMoments",
    description: "Meditation and mindfulness app",
    date: "2022-02-14",
    demoLink: "https://mindfulmoments.example.com",
  },
];

export const CircularBtnList = [
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  {label: "Experience", link: "/experience", icon: "Experience", newTab: false},
  {label: "Certifications", link: "/certifications", icon: "certifications", newTab: false},
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


export const LinkBtnList = [
  {
    label: "Leetcode",
    link: "https://leetcode.com/u/ReNY_1011",
    icon: "leetcode",
    newTab: true,
  },
  {
    label: "Kaggle",
    link: "https://www.kaggle.com/renykhan",
    icon: "kaggle",
    newTab: true,
  },
  {
    label: "Github",
    link: "https://github.com/RE-NY/",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/rehan-khan-iitd/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Codeforces",
    link: "https://codeforces.com/profile/ReNY_1011",
    icon: "codeforces",
    newTab: true,
  }

];


