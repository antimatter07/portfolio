import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  SiAndroidstudio,
  SiCelery,
  SiClaude,
  SiCloudflare,
  SiCss,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiJupyter,
  SiKaggle,
  SiGnubash,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiOpenai,
  SiPandas,
  SiPostgresql,
  SiPytest,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiScipy,
  SiSqlalchemy,
  SiSqlite,
  SiSupabase,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { FaAws, FaJava, FaLinkedin } from 'react-icons/fa';
import {
  TbApi,
  TbBrain,
  TbBrandWindows,
  TbChartLine,
  TbChartScatter,
  TbCode,
  TbCrop,
  TbDatabase,
  TbGauge,
  TbMail,
  TbPhotoScan,
  TbRoute,
  TbSchema,
  TbServerCog,
  TbTargetArrow,
  TbTerminal,
  TbWorldCode,
} from 'react-icons/tb';

const MotionA = motion.a;
const MotionArticle = motion.article;
const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionLi = motion.li;
const MotionP = motion.p;
const MotionSection = motion.section;
const MotionUl = motion.ul;

const contactLinks = [
  {
    label: 'Email',
    value: 'matthewvillarica@gmail.com',
    href: 'mailto:matthewvillarica@gmail.com',
    icon: TbMail,
  },
  {
    label: 'GitHub',
    value: 'github.com/antimatter07',
    href: 'https://github.com/antimatter07',
    icon: SiGithub,
  },
  {
    label: 'LinkedIn',
    value: 'Matthew James Villarica',
    href: 'https://www.linkedin.com/in/matthew-james-villarica-3337b4223',
    icon: FaLinkedin,
  },
];

const fullStackProjects = [
  {
    title: 'GameRec',
    label: 'AI game recommendation platform',
    status: 'Live',
    href: 'http://app.gamerec.uk',
    github: 'https://github.com/antimatter07/GameRec',
    summary:
      'A production-style game library and recommendation system with catalog search, play-session journaling, play-order planning, review-aware recommendations, and async AI workflows.',
    impact: [
      '54 FastAPI REST endpoints for catalog, library, sessions, reviews, recommendations, admin tooling, and queue state.',
      '35,000+ game catalog built through Celery and Redis ingestion from RAWG plus HLTB scraping with duplicate protection and rate limiting.',
      'AWS Lambda container backend behind API Gateway, with SQS, DynamoDB, SSM Parameter Store, Cloudflare, Supabase, and Google OAuth.',
    ],
    stack: [
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Redis',
      'Celery',
      'AWS Lambda',
      'SQS',
      'DynamoDB',
      'Gemini API',
      'Steam Web API',
    ],
  },
  {
    title: 'Image Classification Dashboard',
    label: 'ML training dashboard',
    status: 'Repository',
    github: 'https://github.com/antimatter07/image-dashboard',
    summary:
      'A web dashboard for monitoring an image classification training pipeline with live model updates streamed from Python into a Node.js application.',
    impact: [
      'Integrated gRPC remote procedure calls to transfer training data, image samples, and loss-per-epoch metrics from a Jupyter notebook to the client-facing web app.',
      'Implemented live loss tracking with Chart.js line graphs that update as training progresses.',
      'Built an image grid view showing ground-truth and predicted labels, refreshed per training epoch for visual inspection of model behavior.',
    ],
    stack: ['Node.js', 'Python', 'gRPC', 'Jupyter', 'Chart.js', 'JavaScript'],
  },
  {
    title: 'Visitor Log Tool',
    label: 'Internal production workflow',
    status: 'UAT',
    summary:
      'A CGI Philippines visitor management application built through stakeholder requirements, feature ownership, critical issue resolution, and on-site deployment.',
    impact: [
      'Reduced Flask API response times from 20-30 seconds to 20-40 ms through refactoring, multithreading, and payload optimization.',
      'Built React and TypeScript form flows for 1,000+ employees and partners with contextual visitor fields, REST APIs, MySQL writes, and LDAP email authentication.',
      'Handled Node production builds, WSGI deployment, IIS URL rewrites, and Git branching for on-site production rollout.',
    ],
    stack: ['Flask', 'React', 'TypeScript', 'MySQL', 'LDAP', 'IIS', 'WSGI'],
  },
  {
    title: 'Milk Tea Ordering System',
    label: 'Full-stack commerce app',
    status: 'Shipped',
    github: 'https://github.com/antimatter07/CoCoHelper',
    summary:
      'A role-based ordering system with customer cart flows, product manager menu controls, session-backed authentication, and order CRUD behavior.',
    impact: [
      'Implemented cart add, remove, quantity update, and automatic total calculation flows.',
      'Built product manager CRUD workflows with role-based access control.',
      'Used Express Session and MongoDB to manage authenticated ordering state.',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'jQuery', 'HTML', 'CSS'],
  },
  {
    title: 'NotesApp',
    label: 'Android notes app',
    status: 'Repository',
    github: 'https://github.com/antimatter07/NotesApp',
    summary:
      'MemoMate, an Android notes application built in Java with local SQLite persistence for organizing notes into searchable, sortable folders.',
    impact: [
      'Developed back-end functionality of storing and sorting notes, designed the SQLite database schema, and integrated database operations with the front-end.',
    ],
    stack: ['Java', 'Android Studio', 'SQLite'],
  },
];

const aiMlDataProjects = [
  {
    title: 'Few-Shot Car Sticker Detection (Undergraduate Thesis)',
    label: 'Computer vision research',
    status: 'Published',
    github: 'https://github.com/antimatter07/FsDet-car-stickers',
    summary:
      'Application of few-shot transfer learning to car sticker detection and a new custom-built detection pipeline for car sticker detection using a crowdsourced car image dataset.',
    impact: [
      'Handled proper dependency installation using Conda Python virtual environments on Linux GPU cluster on Jupyter Lab to support experiments on a CUDA GPU runtime',
      'Developed custom scripts to support automated weights initialization for our experiments in PyTorch / Detectron2, and polished / debugged data augmentation scheme in the detection pipeline that improved performance',
      'Conducted training and evaluation of object detection models (Faster R-CNN and YOLOv8), implemented rigorous hyperparameter tuning with ablation studies, and monitored model performance to prevent overfitting and underfitting.',
      'Assisted in the development and evaluation of detection pipeline that improved average precision (AP50) of existing few-shot models by as much as +21.57% on our dataset.',
    ],
    stack: ['PyTorch', 'Detectron2', 'Python', 'Matplotlib'],
  },
  {
    title: 'GameRec Recommendation and Data Pipeline',
    label: 'AI and data integration',
    status: 'Live',
    href: 'http://app.gamerec.uk',
    github: 'https://github.com/antimatter07/GameRec',
    summary:
      'The AI and data layer behind GameRec, focused on catalog ingestion, review-aware recommendations, queue state, and LLM-powered personalization.',
    impact: [
      'Ingested and normalized a catalog of 35,000+ games from RAWG API data and HLTB scraping with Redis and Celery.',
      'Orchestrated async AI-powered recommendation workflows with Celery and Redis locally and utilized SQS and DynamoDB in production, with Gemini API integration.',
      'Modeled user library, play-session, review, recommendation, and queue state data in PostgreSQL with SQLAlchemy.',
    ],
    stack: ['Python', 'Pandas', 'PostgreSQL', 'Redis', 'Celery', 'Gemini API', 'Steam Web API'],
  },
  {
    title: 'Pumpkin Seed Classification Modeling',
    label: 'Binary classification notebook',
    status: 'Repository',
    github: 'https://github.com/antimatter07/AI_ML_Projects/tree/main',
    summary:
      'A machine learning study comparing kNN, logistic regression, and random forest models for classifying Urgup Sivrisi and Cercevelik pumpkin seeds from morphology features.',
    impact: [
      'Preprocessed a 2,500-row pumpkin seed dataset with 12 spatial, shape, size, and geometry features, including label encoding, standardization, missing-value checks, and duplicate handling.',
      'Used correlation analysis to narrow modeling to the 5 strongest class-related features: Compactness (72.67%), Aspect_Ration (72.18%), Eccentricity (69.93%), Roundness (66.95%), and Major_Axis_Length (56.15%).',
      'Evaluated models on a 1,750 / 750 train-test split; tuned Random Forest performed best with 86.27% test accuracy, followed by kNN at 86.13% and logistic regression at 84.40%.',
      'Identified a balanced class distribution (1,300 Cercevelik and 1,200 Urgup Sivrisi) and found Random Forest gave the most balanced precision and recall across both seed classes.',
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter'],
  },
  {
    title: 'Steam Reviews Sentiment Analysis',
    label: 'NLP sentiment classification notebook',
    status: 'Repository',
    github: 'https://github.com/antimatter07/AI_ML_Projects/tree/main',
    summary:
      'A natural language processing project that predicts whether a Steam user recommends a game from the review text, comparing classical ML models against an LSTM neural network.',
    impact: [
      'Built a supervised text-classification workflow on 17,494 Steam reviews, with 9,968 recommended reviews and 7,526 not-recommended reviews.',
      'Cleaned noisy user text by removing 252 links, punctuation, non-alphabetic characters, stop words, repeated-letter spam, and Early Access boilerplate while preserving Early Access as a separate feature.',
      'Represented reviews with 300-dimensional Word2Vec embeddings, averaged token vectors per review, and evaluated models on a stratified 12,245 / 5,249 train-test split.',
      'Compared tuned kNN, decision tree, random forest, and LSTM models; LSTM performed best at 76.75% test accuracy, ahead of random forest at 75.79%, kNN at 73.75%, and decision tree at 71.40%.',
      'Found that the sequence model only modestly outperformed the strongest tree ensemble, suggesting most predictive signal came from review wording captured in the embeddings rather than deeper temporal structure.',
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'NLTK', 'Gensim', 'scikit-learn', 'TensorFlow', 'Jupyter'],
  },
  {
    title: 'Video Game Sales Statistical Modeling',
    label: 'Statistical modeling case study',
    status: 'Notebook',
    github:
      'https://github.com/antimatter07/Video-Games-Sales-Case-Study/blob/main/FINAL_CSMODEL_Case_Study_Phase2.ipynb',
    summary:
      'A statistical modeling case study on video game sales and ratings, using regional sales variables to cluster games into sales-performance profiles and test which categorical factors were associated with those profiles.',
    impact: [
      'Cleaned and modeled a Kaggle dataset of 17,416 video game records, producing a 17,413-game clustering set after resolving missing release years, publisher gaps, duplicate game-platform-year rows, and rating inconsistencies.',
      'Used K-Means on NA, EU, JP, and Other regional sales; the elbow method selected k=4, separating games into low-sales (16,367), middle-sales (968), high-sales (69), and blockbuster (9) clusters.',
      'Ran chi-square tests showing sales-performance cluster dependence on genre (p=1.90e-35), platform (p=3.70e-88), and decade of release (p=2.24e-29), supporting the conclusion that sales outcomes were not explained by popularity labels alone.',
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'scikit-learn', 'SciPy', 'Jupyter', 'Kaggle'],
  },
  {
    title: 'ML / OCR Evaluation Work',
    label: 'Model analysis',
    status: 'Internship',
    summary:
      'A model evaluation effort during my CGI internship, focused on inspecting OCR output quality and identifying practical failure cases.',
    impact: [
      'Evaluated ML/OCR model output across 600+ instances.',
      'Identified recurring failure cases to support model accuracy improvements.',
      'Translated raw model behavior into concrete feedback for product and workflow decisions.',
    ],
    stack: ['Python', 'Data analysis']
  },
];

const projectGroups = {
  fullStack: {
    label: 'Full-stack software',
    eyebrow: 'Full-stack projects',
    heading: 'Software products and tools built around real user workflows.',
    description:
      'This view groups the application work: deployed products, internal tools, dashboards, commerce flows, and mobile apps. Each record focuses on the role, workflow, integration points, and engineering decisions that mattered for that project.',
    projects: fullStackProjects,
  },
  aiData: {
    label: 'AI / ML / data',
    eyebrow: 'AI / ML / data projects',
    heading: 'Applied AI, computer vision, data pipelines, and model evaluation work.',
    description:
      'This view separates the ML and data-heavy work from the full-stack product builds, so the research and AI integration depth is easier to scan.',
    projects: aiMlDataProjects,
  },
};

const researchHighlights = [
  {
    icon: TbTargetArrow,
    text: 'Addresses the challenge of detecting small, visually diverse car stickers in complex real-world scenes where large labeled datasets are difficult to build.',
  },
  {
    icon: TbCrop,
    text: 'Introduces WiSDet, a windshield-guided two-step detection pipeline that first crops the windshield region, then detects stickers inside the focused region, making tiny stickers more visible through dynamic resizing of crops.',
  },
  {
    icon: TbPhotoScan,
    text: 'Built on a crowdsourced Philippine car-image dataset with 312 images, 347 windshield annotations, and 1,134 sticker annotations across near-front, far-front, 3/4 left, and 3/4 right views.',
  },
  {
    icon: TbGauge,
    text: 'Improved AP50 by up to 16.8% with YOLOv8n and 21.6% with FsDet in few-shot evaluation settings.',
  },
];

const researchLinks = [
  {
    label: 'IEEE ICIP Acceptance',
    href: 'https://2026.ieeeicip.org/list-of-accepted-regular-and-special-session-papers/',
    icon: TbWorldCode,
  },
  {
    label: 'GitHub Repository',
    href: 'https://github.com/antimatter07/FsDet-car-stickers',
    icon: SiGithub,
  },
  {
    label: 'Project Website',
    href: 'https://eneii313.github.io/few-shot-car-sticker-detection/',
    icon: TbWorldCode,
  },
];

const heroLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/antimatter07',
    icon: SiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matthew-james-villarica-3337b4223/',
    icon: FaLinkedin,
  },
  {
    label: 'Email',
    href: 'mailto:matthewvillarica@gmail.com',
    icon: TbMail,
  },
];

const stackGroups = [
  {
    title: 'Backend',
    items: [
      'Python',
      'FastAPI',
      'Flask',
      'SQLAlchemy',
      'REST APIs',
      'Pytest',
      'Node.js',
      'Express',
      'Java',
    ],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'Supabase', 'MySQL', 'SQLite', 'MongoDB', 'Schema design'],
  },
  {
    title: 'Cloud and infrastructure',
    items: [
      'AWS Lambda',
      'API Gateway',
      'SQS',
      'DynamoDB',
      'Redis',
      'Celery',
      'Docker',
      'Cloudflare',
      'Linux',
      'Bash',
      'Windows Server (IIS)',
    ],
  },
  {
    title: 'ML and data',
    items: [
      'PyTorch',
      'Detectron2',
      'Ultralytics',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'scikit-learn',
      'Jupyter',
      'LLM APIs',
    ],
  },
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'HTML', 'CSS', 'JavaScript', 'Responsive UI'],
  },
  {
    title: 'Developer workflow',
    items: ['Git', 'GitHub', 'GitLab', 'Codex', 'Claude Code', 'Cursor'],
  },
];

const techIcons = {
  Python: SiPython,
  FastAPI: SiFastapi,
  Flask: SiFlask,
  SQLAlchemy: SiSqlalchemy,
  'REST APIs': TbApi,
  Pytest: SiPytest,
  Java: FaJava,
  'Android Studio': SiAndroidstudio,
  TypeScript: SiTypescript,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  MongoDB: SiMongodb,
  'Schema design': TbSchema,
  'AWS Lambda': FaAws,
  'API Gateway': TbApi,
  SQS: TbRoute,
  DynamoDB: TbDatabase,
  Redis: SiRedis,
  Celery: SiCelery,
  Docker: SiDocker,
  Cloudflare: SiCloudflare,
  Linux: SiLinux,
  Bash: SiGnubash,
  'Windows Server (IIS)': TbBrandWindows,
  PyTorch: SiPytorch,
  Detectron2: TbBrain,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  Matplotlib: TbChartLine,
  Seaborn: TbChartScatter,
  'scikit-learn': SiScikitlearn,
  SciPy: SiScipy,
  Jupyter: SiJupyter,
  Kaggle: SiKaggle,
  'LLM APIs': TbBrain,
  React: SiReact,
  Vite: SiVite,
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  'Responsive UI': TbWorldCode,
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  Codex: SiOpenai,
  'Claude Code': SiClaude,
  Cursor: TbTerminal,
  'Gemini API': SiGooglegemini,
  'Steam Web API': TbApi,
  jQuery: SiJquery,
  IIS: TbServerCog,
  WSGI: TbServerCog,
  LDAP: TbApi,
  'Data analysis': TbChartLine,
  'Model evaluation': TbBrain,
};

const experience = [
  {
    role: 'Software Engineer Intern',
    org: 'CGI Philippines, Inc.',
    period: 'Feb 2025 - Jul 2025',
    place: 'McKinley Hill, Taguig City',
    meta: '900+ hours (6 months)',
    details:
      'Drove a stakeholder-facing Visitor Log system from active development to a demoable production-tested state across 4 Agile sprint cycles, spanning feature delivery, backend optimization, deployment support, and data privacy implementation.',
    highlights: [
      'Completed a 2-month training program covering Agile, DevOps, web application development, data science, data extraction and transformation, design patterns, and machine learning.',
      'Owned feature delivery across 4 Agile sprint cycles, translating stakeholder feedback into demo-ready Visitor Log workflows and coordinating with leadership when production behavior diverged from expected requirements.',
      'Tested the application in production, identified broken production features, proposed fixes, and collaborated with leadership to resolve issues through concrete implementation changes.',
      'Gathered requirements with the Data Privacy Officer, then proposed consent modals and privacy-aware user flows that aligned data capture, disclosure, and storage behavior with company data privacy policy.',
      'Developed React.js and TypeScript front-end flows plus new and refactored Flask RESTful APIs for a front-facing Visitor Log used by 1,000+ employees and external partners, with MySQL persistence, LDAP company email authentication, and server-side validation.',
      'Identified Flask backend bottlenecks and reduced endpoint response times from 20-30 seconds to 10-30 milliseconds through REST API refactoring, multithreading, and payload management.',
      'Deployed the system to IIS by handling Node.js production builds, URL rewrite configurations, and Git branching; refactored the Outlook SMTP notification workflow into a Flask-based scheduled job for production continuity.',
    ],
  },
  {
    role: 'Student Research Assistant',
    org: 'DLSU AdRIC, Center for Computational Imaging and Visual Innovations (CIVI)',
    period: 'Aug 2023 - Dec 2025',
    href: 'https://dlsucivi.github.io/about',
    linkLabel: 'Lab website',
  //  place: 'Malate, Manila',
    details:
      'Worked on computer vision research spanning few-shot object detection, custom PyTorch and Detectron2 pipelines, dataset and model evaluation, and publication-ready manuscript writing.',
    highlights: [
      'Conducted crowdsourced data collection and annotated 90+ images, producing 250+ high-quality car sticker annotations in Roboflow.',
      'Served as a lab representative during networking events, presenting the lab research and explaining the computer vision work to external attendees.',
      'Completed a comprehensive literature review of existing few-shot learning and tiny object detection methods; wrote key manuscript sections covering related work, methodology, and analysis of results.',
      'Co-authored the research paper that showed our results: improved average precision (AP) of object detection models on a crowdsourced car image dataset by up to +21.57%, accepted to the IEEE International Conference on Image Processing 2026; invited by the review committee to serve as a peer reviewer for the same conference.',
      'Implemented key image augmentation scripts in the pipeline in PyTorch and Detectron2, including weights initialization scripts, model training, and evaluation loops for 1,134 car sticker annotations and 312 images across 4 train and test splits on the lab Linux cloud NVIDIA GPU cluster.',
    ],
  },
  {
    role: 'BSc in Computer Science Major in Software Technology',
    org: 'De La Salle University',
    period: 'Graduated Feb 2026',
   // place: 'Manila',
    details:
      'Coursework included software engineering, advanced database systems, web application development, machine learning, and secure web development.',
  },
];

const viewport = { once: true, amount: 0.22 };

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const riseIn = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function TechIcon({ name }) {
  const Icon = techIcons[name] ?? TbCode;

  return <Icon aria-hidden="true" focusable="false" />;
}

function App() {
  const prefersReducedMotion = useReducedMotion();
  const [activeProjectGroup, setActiveProjectGroup] = useState('fullStack');
  const activeProjects = projectGroups[activeProjectGroup];
  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: 'hidden',
        whileInView: 'visible',
        viewport,
      };

  return (
    <main>
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Matthew Villarica home">
          <span>MV</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Systems</a>
          <a href="#research">Research</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <MotionSection
        className="hero"
        id="top"
        initial={prefersReducedMotion ? false : 'hidden'}
        animate={prefersReducedMotion ? false : 'visible'}
        variants={containerVariants}
      >
        <MotionDiv className="hero-copy" variants={riseIn}>
          <MotionH1 variants={riseIn}>Matthew Villarica</MotionH1>
          <MotionP className="hero-subtitle" variants={riseIn}>
            Backend-focused developer | AI / ML / Data{' '}
          </MotionP>
          <MotionDiv className="hero-actions" variants={riseIn}>
            <a className="button primary" href="#work">
              View projects
            </a>
            <a className="button secondary" href="/Software%20Engineer%20Associate%20Resume%20Matthew%20Villarica.pdf">
              Resume
            </a>
          </MotionDiv>
          <MotionDiv className="hero-socials" variants={riseIn} aria-label="Profile links">
            {heroLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a href={link.href} key={link.label}>
                  <Icon aria-hidden="true" focusable="false" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </MotionDiv>
        </MotionDiv>
        <MotionDiv className="hero-portrait" variants={riseIn} aria-label="Matthew Villarica graduation portrait">
          <img
            src="/grad_pic.png"
            alt="Matthew Villarica in graduation attire at De La Salle University"
          />
          <div className="portrait-caption">
            <span>Profile</span>
            <strong>Computer science graduate, developer, researcher, problem-solver</strong>
          </div>
        </MotionDiv>
      </MotionSection>

      <MotionSection
        className="section about"
        aria-label="About me"
        variants={containerVariants}
        {...motionProps}
      >
        <MotionDiv className="section-marker" variants={riseIn}>
          <span>01</span>
          <p>About me</p>
        </MotionDiv>
        <MotionDiv className="section-copy" variants={riseIn}>
          <MotionP className="about-me-text" variants={riseIn}>
            Hi! I am Matthew Villarica, a recent computer science graduate, and a software engineer with a strong foundation in developing secure and performant backend systems. 
            I specialize in designing secure backend systems, performance optimization, and deployment. 
            In my past role as a software engineer, I drove a full-stack project from development to a demo-ready state 
            across multiple sprint cycles by handling both development in both the frontend and backend side and conducting requirements gathering with 
            stakeholders, gathering feedback from both leadership and clients to ensure features addressed the problem to be solved. I mainly use Python backend frameworks like Flask and FastAPI, 
            and have frontend knowledge in React and TypeScript. 
            I also have a background in AI, machine learning, data science, and am comfortable in working with large volumes of data. I've worked on projects that involved extracting insights from data with both SQL and statistical modeling / ML, performing data extraction, cleaning and transformation, and 
            formal research in leveraging CNNs for ML tasks.
          </MotionP>
          <MotionP className="about-me-text" variants={riseIn}>
            During my research apprenticeship within a computer vision research lab in my university,
             I co-authored a conference paper on applying few-shot transfer learning to car sticker detection, the creation of
              a crowdsourced car image dataset, and the development of a new car sticker detection pipeline that improved 
              the performance of SOTA on the dataset by a high margin. I have also achieved dean's list standing for 9 trimesters during my 
               time as a computer science undergraduate at De La Salle University, which shows my commitment to quality in the work that I do.{' '}
          </MotionP>
        </MotionDiv>
      </MotionSection>

      <MotionSection
        className="section work"
        id="work"
        aria-labelledby="work-heading"
        variants={containerVariants}
        {...motionProps}
      >
        <MotionDiv className="section-heading" variants={riseIn}>
          <div>
            <p className="section-kicker">{activeProjects.eyebrow}</p>
            <h2 id="work-heading">{activeProjects.heading}</h2>
          </div>
          <div className="project-switcher" aria-label="Project category">
            {Object.entries(projectGroups).map(([key, group]) => (
              <button
                aria-pressed={activeProjectGroup === key}
                key={key}
                onClick={() => setActiveProjectGroup(key)}
                type="button"
              >
                <span>{group.label}</span>
                <strong>{group.projects.length}</strong>
              </button>
            ))}
          </div>
        </MotionDiv>
        <MotionP className="project-context" variants={riseIn}>
          {activeProjects.description}
        </MotionP>

        <MotionDiv
          animate={prefersReducedMotion ? false : 'visible'}
          className="project-library"
          initial={prefersReducedMotion ? false : 'hidden'}
          key={activeProjectGroup}
          variants={containerVariants}
        >
          {activeProjects.projects.map((project, index) => (
            <MotionArticle className="project-card" key={project.title} variants={riseIn}>
              <div className="project-index">0{index + 1}</div>
              <div className="project-main">
                <div className="project-title-row">
                  <div>
                    <p className="project-label">{project.label}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-status">{project.status}</span>
                </div>
                <p>{project.summary}</p>
                <ul className="impact-list">
                  {project.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.href ? <a href={project.href}>Live site</a> : null}
                  {project.github ? (
                    <a className="github-link" href={project.github}>
                      <SiGithub aria-hidden="true" focusable="false" />
                      <span>GitHub repository</span>
                    </a>
                  ) : null}
                </div>
              </div>
              <ul className="stack-chips" aria-label={`${project.title} stack`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </MotionArticle>
          ))}
        </MotionDiv>
      </MotionSection>

      <MotionSection
        className="section research"
        id="research"
        aria-labelledby="research-heading"
        variants={containerVariants}
        {...motionProps}
      >
        <MotionDiv className="research-card" variants={riseIn}>
          <div className="section-marker compact">
            <span>02</span>
            <p>Featured research</p>
          </div>
          <h2 id="research-heading">
            WiSDet: A Windshield-Guided Few-Shot Framework for Detecting Car Stickers in the Wild
          </h2>
          <h3 className="research-subtitle">
            IEEE International Conference on Image Processing (IEEE ICIP) 2026 
          </h3>
          <p>
            Conference to be held in
            Tampere, Finland on September 2026.
          </p>
          <div className="research-links" aria-label="Research links">
            {researchLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a href={link.href} key={link.label}>
                  <Icon aria-hidden="true" focusable="false" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </MotionDiv>
        <MotionUl className="research-list" variants={containerVariants}>
          {researchHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <MotionLi key={item.text} variants={riseIn}>
                <span className="research-highlight-icon">
                  <Icon aria-hidden="true" focusable="false" />
                </span>
                <span>{item.text}</span>
              </MotionLi>
            );
          })}
        </MotionUl>
      </MotionSection>

      <MotionSection
        className="section stack"
        id="stack"
        aria-labelledby="stack-heading"
        variants={containerVariants}
        {...motionProps}
      >
        <MotionDiv className="section-heading" variants={riseIn}>
          <div>
            <p className="section-kicker">Tech stack</p>
            <h2 id="stack-heading">Tools grouped by how I use them.</h2>
          </div>
          <p>
             The tech I have experience in solving problems with: backend frameworks, durable data models,
            async processing, on-site and cloud deployment, and AI/ML libraries.
          </p>
        </MotionDiv>
        <MotionDiv className="stack-grid" variants={containerVariants}>
          {stackGroups.map((group) => (
            <MotionArticle className="stack-group" key={group.title} variants={riseIn}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <TechIcon name={item} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </MotionArticle>
          ))}
        </MotionDiv>
      </MotionSection>

      <MotionSection
        className="section timeline"
        aria-labelledby="experience-heading"
        variants={containerVariants}
        {...motionProps}
      >
        <MotionDiv className="section-heading" variants={riseIn}>
          <div>
            <p className="section-kicker">Experience</p>
            <h2 id="experience-heading">Engineering practice across product and research.</h2>
          </div>
        </MotionDiv>
        <MotionDiv className="timeline-list" variants={containerVariants}>
          {experience.map((item) => (
            <MotionArticle className="timeline-item" key={`${item.role}-${item.org}`} variants={riseIn}>
              <div>
                <p>{item.period}</p>
                <span>{item.place}</span>
                {item.meta ? <strong className="timeline-meta">{item.meta}</strong> : null}
              </div>
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-org">{item.org}</p>
                <p>{item.details}</p>
                {item.href ? (
                  <a className="timeline-link" href={item.href}>
                    <TbWorldCode aria-hidden="true" focusable="false" />
                    <span>{item.linkLabel}</span>
                  </a>
                ) : null}
                {item.highlights ? (
                  <ul className="timeline-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </MotionArticle>
          ))}
        </MotionDiv>
      </MotionSection>

      <MotionSection
        className="contact"
        id="contact"
        aria-labelledby="contact-heading"
        variants={containerVariants}
        {...motionProps}
      >
        <MotionDiv className="contact-copy" variants={riseIn}>
          <p className="section-kicker">Contact</p>
          <h2 id="contact-heading">Reach out!</h2>
          <p>
            I'm always interested in opportunities where I can put my problem solving skills to use, please feel free to contact me.
          </p>
        </MotionDiv>
        <MotionDiv className="contact-panel" variants={containerVariants}>
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <MotionA href={link.href} key={link.label} variants={riseIn}>
                <Icon aria-hidden="true" focusable="false" />
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </MotionA>
            );
          })}
          <MotionA
            href="/Software%20Engineer%20Associate%20Resume%20Matthew%20Villarica.pdf"
            variants={riseIn}
          >
            <span>Resume</span>
            <strong>Download PDF</strong>
          </MotionA>
        </MotionDiv>
      </MotionSection>
    </main>
  );
}

export default App;
