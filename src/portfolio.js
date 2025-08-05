/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fatoumata Binta DIALLO",
  title: "Bonjour et bienvenue, je suis Binta",
  subTitle: emoji(
    "Étudiante en MIAGE à l'université de Haute Alsace, passionnée par le développement web et la gestion de projets numériques, je participe actuellement à la conception de la Revue Guinéenne de Management (ReGuiMa), une plateforme scientifique développée avec React.js et Open Journal Systems. À travers ce projet, je combine mes compétences en développement, organisation de contenus académiques, et accessibilité numérique pour mettre en valeur la recherche en gestion en Guinée. Curieuse, investie et toujours prête à apprendre, je m'épanouis dans des projets concrets à fort impact."
  ),
  // Utilise le lien de téléchargement direct via Google Drive (format "uc?export=download&id=")
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1eViPu3BWVvNd7DWD88Kbw2lkP13J84N1",
  displayGreeting: true, // Pour afficher ou non cette section
};

export default greeting;

// Social Media Links

const socialMediaLinks = {
 
  linkedin: "www.linkedin.com/in/fatoumata-binta-diallo-989051338",
  gmail: "fatoumatabintadiallo0901@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Mon parcours technique",
  subTitle: "De la théorie à la pratique, j'ai transformé mes apprentissages en projets concrets et utiles.",
  skills: [
    emoji("📚 Formation solide en algorithmique et programmation orientée objet, renforcée par le développement d'une application de manipulation de graphes, et celle d'un robot parcourant un labyrinthe"),
    emoji("💻 Maîtrise du développement web front-end avec React.js, illustrée par mes projets Délice Culinaire et My Burger."),
    emoji("🛠 Expérience pratique en back-end avec Python/Django, notamment dans la création d'outils automatisés pour l'enseignement."),
    emoji("🌐 Passionnée par les technologies open source, j'ai contribué à la mise en place d'un portail pour la revue scientifique ReGuiMa via Open Journal Systems."),
    emoji("🚀 Habituée au déploiement rapide et à la gestion de versions avec Git, GitHub et Vercel."),
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Django", fontAwesomeClassname: "fas fa-server" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
  ],
  display: true,
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Université de Haute-Alsace",
      logo: require("./assets/images/logo-header-mobile.png"), // Remplace par le vrai logo UHA si tu l'as
      subHeader: "Licence 3 MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)",
      duration: "Septembre 2024 - Mai 2025",
      desc: "Formation pluridisciplinaire combinant informatique, gestion et analyse des systèmes d'information, avec des projets concrets en développement logiciel et gestion de bases de données.",
      descBullets: [
        "Développement d'applications en Java, C++ et Python, incluant la manipulation de graphes et la programmation orientée objet",
        "Conception et gestion de bases de données relationnelles avec MySQL",
        "Gestion de projets informatiques en mode Agile et travail collaboratif en équipe",
        
      ]
    },
    {
      schoolName: "Lycée Maarif",
      logo: require("./assets/images/images.jpeg"), // À remplacer ou supprimer si tu préfères
      subHeader: "Baccalauréat Scientifique Mathématiques",
      duration: "Octobre 2019 - Juillet 2020",
      desc: "Obtention du baccalauréat scientifique avec mention, base solide en mathématiques, sciences et informatique.",
      descBullets: [
        "Formation en mathématiques avancées et sciences physiques",
        "Participation à des clubs scientifiques et ateliers numériques"
      ]
    }
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend (HTML, CSS, JavaScript, React, Tailwind)",
      progressPercentage: "60%"
    },
    {
      Stack: "Backend (PHP, Node.js, Django)",
      progressPercentage: "65%"
    },
    {
      Stack: "Programmation (Python, Java, C++)",
      progressPercentage: "75%"
    },
    {
      Stack: "Base de données (MySQL, PostgreSQL)",
      progressPercentage: "70%"
    },
    {
      Stack: "Automatisation & Intégration (n8n, API REST, Git)",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Stagiaire Technico-commerciale",
      company: "SAAR Assurances Sénégal",
      companylogo: require("./assets/images/saar.jpeg"), // Ajoute ce logo dans assets/images
      date: "Mai 2024 - Aout 2024",
      desc: "Stage au sein du service commercial de SAAR Assurances, axé sur la prospection client, le conseil et le suivi des dossiers d'assurance.",
      descBullets: [
        "Prospection de nouveaux clients et suivi commercial",
        "Analyse des besoins en assurance des clients particuliers et entreprises",
        "Rédaction de propositions commerciales et gestion de devis",
        "Participation à des actions marketing et de fidélisation"
      ]
    },
    {
      role: "Développeuse Web Freelance",
      company: "Association guinéenne des sciences de gestion",
      date: "Juillet 2025 - Présent",
      desc: "Création d'une plateforme scientifique pour l'association guinéenne des sciences de gestion en utilisant Open Journal Systems et développement d'un site vitrine pour la revue guinéenne de management (ReGuiMa).",
      descBullets: [
        "Installation et personnalisation d'OJS sur un serveur VPS",
        "Création d'un site React.js connecté à OJS via une API",
        "Configuration du workflow éditorial et des rôles dans OJS",
        "Publication d'un numéro test et rédaction de la documentation"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Mes Projets",
  subtitle: "Projets personnels, universitaires et freelances que j'ai réalisés",
  projects: [
    {
      projectName: "Application de manipulation de graphes",
      projectDesc:
        "Interface console en C++ permettant de manipuler et d'exécuter des algorithmes sur des graphes (Dijkstra, BFS, etc.).",
      footerLink: [
         {
          name: "Voir la demo",
          url: "https://drive.google.com/file/d/1vXAAG_-F6zjbT824yyhETK-HMc6pHsAs/view?usp=sharing"
        }
      ]
    },
    {
      projectName: "Correction automatique de devoirs",
      projectDesc:
        "Web app Django pour la correction semi-automatique de devoirs. Interface enseignant avec génération de statistiques.",
      footerLink: []
    },
    {
      projectName: "Robot autonome dans un labyrinthe",
      projectDesc:
        "Simulation en C++ d'un robot résolvant un labyrinthe avec détection d'obstacles. Interface console.",
      footerLink: [
        {
          name: "Voir le code",
          url: "https://drive.google.com/file/d/1RC939YdokUL0PvFhJ-OUqxQ3KDCWNliX/view?usp=sharing"
        }
      ]
    },
    {
      projectName: "Délice Culinaire",
      projectDesc:
        "Site vitrine de recettes développé avec React et hébergé sur Vercel. Design responsive.",
      footerLink: [
        {
          name: "Voir le site",
          url: "https://delice-culinaire-ds7k.vercel.app/"
        }
      ]
    },
    {
      projectName: "My Burger",
      projectDesc:
        "Application React pour composer et commander un burger personnalisé. Utilisation de composants dynamiques.",
      footerLink: [
        {
          name: "Voir la site",
          url: "https://my-burger-one.vercel.app/" 
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications et Réalisations 🏆"),
  subtitle:
    "Certifications officielles obtenues via des plateformes reconnues comme Pix et Cisco Networking Academy.",

  achievementsCards: [
    {
      title: "Certification Pix",
      subtitle:
        "Certification officielle des compétences numériques (Pix), obtenue à l’université dans le cadre du programme national français.",
      image: require("./assets/images/pix.png"),
      imageAlt: "Logo Pix",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://drive.google.com/file/d/1KTyWO9ognpKz3V7U5gDnWp2_WKceNIDF/view?usp=sharing" // Remplace par le lien direct si tu en as un
        }
      ]
    },
    {
      title: "Python Essentials 1",
      subtitle:
        "Formation et certification Python Essentials 1 délivrée par la Cisco Networking Academy.",
      image: require("./assets/images/cisco.png"),
      imageAlt: "Logo Cisco Networking Academy",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://drive.google.com/file/d/1mXa_25cjMv9MUx9a4yDAG0UJ0rXzRv6E/view?usp=sharing" // Mets le lien Credly ou PDF si tu l’as
        },
        {
          name: "Cisco Networking Academy",
          url: "https://www.netacad.com/courses/python"
        }
      ]
    }
  ],
  display: true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle:
    "Vous avez un projet à me confier, une opportunité à partager ou simplement envie d'échanger ? Je suis toujours ouverte aux nouvelles collaborations.",
  number: "+33 6  ......", // Remplace par ton vrai numéro si tu veux l'afficher
  email_address: "fatoumatabintadiallo0901@gmail.com" // Remplace par ton email pro
};

// Twitter Section



const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
