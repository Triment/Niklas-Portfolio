/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Niklas Portfolio",
  description:
    "Eine leidenschaftliche Person, die immer davon lebt, an Endprodukten zu arbeiten, die nachhaltige und skalierbare soziale und technische Systeme entwickeln, um Wirkung zu erzielen.",
  og: {
    title: "Niklas Kerl Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Niklas Kerl",
  logo_name: "Niklas Kerl",
  nickname: "Niklaskerl2001",
  subTitle:
    "Eine leidenschaftliche Person, die immer davon lebt, an Endprodukten zu arbeiten, die nachhaltige und skalierbare soziale und technische Systeme entwickeln, um Wirkung zu erzielen.",
  // resumeLink: "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing", //TODO-Niklas
  portfolio_repository:
    "https://github.com/Niklaskerl200l/Niklas-Kerl-Portfolio",
  githubProfile: "https://github.com/Niklaskerl200l",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Niklaskerl200l",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/niklas-kerl-1898b22b6/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@Niklaskerl2001",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  // {
  //   name: "Gmail",
  //   link: "mailto:Niklaskerl2001@gmail.com",
  //   fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
  //   backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  // },
  {
    name: "X-Twitter",
    link: "https://twitter.com/Niklaskerl01",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/niklaskerl2001/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Mail",
    link: "mailto:Niklaskerl03@web.de",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#FFCD00", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Fachinformatiker für Anwendungsentwicklung",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Entwicklung Kunden naher Anwendungen",
        "⚡ Erweiterung bestehender Systeme mit Skripten / Addons",
        "⚡ Ausarbeitung & Konzeptionierung neuer Herausforderungen",
        "⚡ Entwicklung & Arbeit mit Datenbanken",
        "⚡ Einrichtung, Erweiterung, Anpassung DMS Syteme (ELO Digital Office)",
        "⚡ Kunden Support",
      ],
      softwareSkills: [
        // https://icon-sets.iconify.design/?query=css
        {
          skillName: "Google Apps Script",
          fontAwesomeClassname: "vscode-icons:file-type-appscript",
        },
        {
          skillName: "Google Sheets",
          fontAwesomeClassname: "simple-icons:googlesheets",
          style: {
            color: "#34a853",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "skill-icons:javascript",
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "tabler:sql",
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "devicon:csharp",
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "devicon:cplusplus",
        },
        {
          skillName: "Lua",
          fontAwesomeClassname: "logos:lua",
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
        },
        {
          skillName: "Vue",
          fontAwesomeClassname: "logos:vue",
        },
        {
          skillName: "HTML",
          fontAwesomeClassname: "akar-icons:html-fill",
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "akar-icons:css-fill",
        },
        {
          skillName: ".Net",
          fontAwesomeClassname: "skill-icons:dotnet",
        },
        {
          skillName: "Typo3",
          fontAwesomeClassname: "vscode-icons:file-type-typo3",
        },
        {
          skillName: "CMD",
          fontAwesomeClassname: "codicon:terminal-cmd",
        },
      ],
    },
    // {
    //   title: "Technischer Assistent für Informatik",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using React-Redux", //TODO-Niklas
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin", //TODO-Niklas
    //     "⚡ Creating application backend in Node, Express & Flask", //TODO-Niklas
    //   ],
    //   softwareSkills: [

    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },

    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     }
    //   ],
    // },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Staatliches Berufsschulzentrum Hermsdorf",
      subtitle: "Fachinformatiker für Anwendungsentwicklung",
      logo_path: "SBSZ_Logo.jpeg", //TODO-Niklas
      alt_name: "SBSZ Logo",
      duration: "2022 - 2025",
      descriptions: ["⚡ Notendurchschnitt: 1,4"],
      website_link: "https://sbsz-hsp.de/",
    },
    {
      title: "Duale Hochschule Gera-Eisenach",
      subtitle: "Praktische Informatik",
      logo_path: "DHGE Logo.png",
      alt_name: "DHGE Logo",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ Studium Abbruch nach 2 von 6 Semestern.",
        "⚡ Vertiefte Erfahrung mit C und HTML",
      ],
      website_link: "https://www.dhge.de/DHGE/",
    },
    {
      title: "Höhere Berufsfachschule TÜV Rheinland Gera",
      subtitle: "Technischer Assistent für Informatik",
      logo_path: "TÜV_logo.svg",
      alt_name: "TÜV Logo",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ Notendurchschnitt: 1,6",
        "⚡ Vertiefte Erfahrung mit C# und C++",
        "⚡ Abschluss als Klassen bester im Fach Programmieren",
      ],
      website_link:
        "https://www.semper-schulen.de/berufsbildende-schulen/hoehere-berufsfachschule-fuer-gestaltung-und-informatik-in-gera/unser-erfolgskonzept/",
    },
    {
      title: "Staatliche Regelschule 'Friedrich Schiller'",
      subtitle: "Realschulabschluss",
      logo_path: "FSR_Logo.jpeg", //TODO-Niklas
      alt_name: "FSR Logo",
      duration: "2012 - 2018",
      descriptions: [
        "⚡ Notendurchschnitt: 2,1",
        "⚡ Platz 2 an der Mathematikolympiade 2014 Landkreis Greiz",
        "⚡ 3-facher Podium Platz Schacholympiade Ronneburg ",
      ],
      website_link:
        "https://www.semper-schulen.de/berufsbildende-schulen/hoehere-berufsfachschule-fuer-gestaltung-und-informatik-in-gera/unser-erfolgskonzept/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Microsoft",
      subtitle: "Microsoft Zertifikate",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/de-de/users/niklaskerl2001-4447/",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Erfahrung",
  subtitle: "Arbeit, Praktikum und Freiwilligenarbeit",
  // description: "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Arbeit",
      work: true,
      experiences: [
        {
          title: "Anwendungsentwickler",
          company: "Nexory GmbH",
          company_url: "https://nexory.de/",
          logo_path: "Logo-Nexory.png", //TODO-Niklas
          duration: "Okt 2021 - Now",
          location: "Gera, Tühringen",
          //TODO-Niklas
          description: "Arbeit mit DMS - ELO Digital Office",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Praktika",
      experiences: [
        {
          title: "Technischer Assistent für Informatik",
          company: "Nexory GmbH",
          company_url: "https://nexory.de/",
          logo_path: "Logo-Nexory.png",
          duration: "Mär 2021 - Sep 2021",
          location: "Gera, Tühringen",
          //TODO-Niklas
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Technischer Assistent für Informatik",
          company: "Nexory GmbH",
          company_url: "https://nexory.de/",
          logo_path: "Logo-Nexory.png",
          duration: "Aug 2020 - Feb 2021",
          location: "Gera, Tühringen",
          //TODO-Niklas
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Technischer Assistent für Informatik",
          company: "Kommunale Immobilien Jena",
          company_url: "https://www.kij.de/",
          logo_path: "KIJ_Logo.png",
          duration: "Jun 2019 - Aug 2019",
          location: "Jena, Tühringen",
          //TODO-Niklas
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
      ],
    },
    // {      //TODO-Niklas
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projekte",
  description: "Meine GitHub Projekte",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  //TODO-Niklas
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Kontakt",
    profile_image_path: "Niklas Kerl.png",
    description:
      "Ich bin in fast allen sozialen Medien verfügbar. Sie können mir eine Nachricht senden, ich antworte innerhalb von 24 Stunden.",
  },
  blogSection: {
    //TODO-Niklas
    // title: "Blogs",
    // subtitle:
    //   "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Adresse",
    subtitle: "Gottlieb-Daimler-Straße 16, 07552 Gera", //TODO-Niklas
    locality: "Gera",
    country: "DE",
    region: "Thüringen",
    postalCode: "07552", //TODO-Niklas
    streetAddress: "Gottlieb-Daimler-Straße 16", //TODO-Niklas
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NWGAUWdGj8A4w4Hw5", //TODO-Niklas
  },
  phoneSection: {
    title: "Telefon",
    subtitle: "0365 20500560",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
