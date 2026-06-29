export type Language = "en" | "th";
export type ThemeMode = "light" | "dark";

export type CaseStudy = {
  title: string;
  label: string;
  image: string;
  summary: string;
  bullets?: string[];
  tech?: string[];
};

export type ScopeItem = {
  title: string;
  body: string;
};

export type PortfolioContent = {
  nav: {
    dashboard: string;
    work: string;
    scope: string;
    projects: string;
    experience: string;
    contact: string;
  };
  topbar: {
    breadcrumb: string;
    title: string;
    search: string;
    resume: string;
  };
  sidebar: {
    title: string;
    subtitle: string;
    badge: string;
    resume: string;
    footer: string;
    language: string;
    theme: string;
    light: string;
    dark: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    viewWork: string;
    resumePdf: string;
  };
  sections: {
    workEyebrow: string;
    workTitle: string;
    scopeEyebrow: string;
    scopeTitle: string;
    scopeSubtitle: string;
    projectsEyebrow: string;
    projectsTitle: string;
    experienceEyebrow: string;
    experienceTitle: string;
    skillsEyebrow: string;
    skillsTitle: string;
    contactEyebrow: string;
    contactTitle: string;
    contactBody: string;
  };
  contactLinks: Array<{ label: string; value: string; href: string }>;
  metrics: Array<{ value: string; label: string }>;
  featuredCase: CaseStudy;
  caseStudies: CaseStudy[];
  scopeItems: ScopeItem[];
  projects: Array<{ title: string; image: string; summary: string; href?: string }>;
  experience: Array<{ period: string; role: string; body: string }>;
  skillGroups: Array<{ title: string; body: string }>;
};

const sharedContactLinks = [
  { label: "Email", value: "witsawa.daochui@gmail.com", href: "mailto:witsawa.daochui@gmail.com" },
  { label: "Phone", value: "(+66) 65-326-0932", href: "tel:+66653260932" },
  {
    label: "LinkedIn",
    value: "witsawa-daochuai",
    href: "https://www.linkedin.com/in/witsawa-daochuai-944742351/",
  },
  { label: "GitHub", value: "witsawadaochuai", href: "https://github.com/witsawadaochuai" },
];

export const portfolioContent: Record<Language, PortfolioContent> = {
  en: {
    nav: {
      dashboard: "Dashboard",
      work: "Work",
      scope: "Scope",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    topbar: {
      breadcrumb: "Pages / Portfolio",
      title: "Dashboard",
      search: "Witsawa portfolio",
      resume: "Resume",
    },
    sidebar: {
      title: "Witsawa",
      subtitle: "Daochuai",
      badge: "Portfolio Dashboard",
      resume: "Download Resume",
      language: "Language",
      theme: "Theme",
      light: "Light",
      dark: "Dark",
      footer: "Built with React, Vite, and Tailwind CSS. Deployed through GitHub Pages.",
    },
    hero: {
      eyebrow: "Full-Stack Software Engineer | FinTech | AI",
      title: "Building secure financial platforms and practical AI systems.",
      body:
        "I am Dong, a Computer Engineering and AI graduate who has worked on Tourist E-Wallet, back-office systems, KYC workflows, Keycloak security, pentest remediation, and AI agent integrations across production-facing projects.",
      viewWork: "View Work",
      resumePdf: "Resume PDF",
    },
    sections: {
      workEyebrow: "Featured Work",
      workTitle: "Portfolio Case Studies",
      scopeEyebrow: "Detailed Scope",
      scopeTitle: "Work pulled from Result and Job-Prep notes",
      scopeSubtitle:
        "Public-safe details from the deeper work notes, separated from private interview and salary notes.",
      projectsEyebrow: "Selected Projects",
      projectsTitle: "AI, Web, and Computer Vision",
      experienceEyebrow: "Experience",
      experienceTitle: "Work History",
      skillsEyebrow: "Skills",
      skillsTitle: "Tools I Use",
      contactEyebrow: "Contact",
      contactTitle: "Let us build something solid.",
      contactBody:
        "I am open to full-stack software engineering, backend, FinTech platform, security-minded application development, and AI integration roles.",
    },
    contactLinks: sharedContactLinks,
    metrics: [
      { value: "421+", label: "commits analyzed across e-wallet repos" },
      { value: "10+", label: "pentest findings remediated" },
      { value: "3", label: "KYC provider workflows integrated" },
      { value: "Full-Stack", label: "Next.js, React, NestJS, PostgreSQL" },
    ],
    featuredCase: {
      title: "Tourist E-Wallet Back Office",
      label: "FinTech | Production Platform",
      image: "assets/portfolio/transaction.png",
      summary:
        "Built major parts of a secure e-wallet back-office with Partner, Wallet, KYC, Dashboard, Fee Management, reports, and transaction workflows. Worked across Next.js/React frontend and NestJS backend services for partner APIs, wallet data, settlement, and KYC flows.",
      bullets: [
        "Implemented Keycloak PKCE auth flow, custom auth templates, and brute-force protection integration.",
        "Resolved XSS, IDOR, SSRF, path traversal, SQL injection, and business-logic findings from pentest rounds.",
        "Built multi-tenant data isolation, audit logging, file validation, and S3/local/HTTP file storage protections.",
      ],
      tech: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Redis", "Keycloak"],
    },
    caseStudies: [
      {
        title: "Pentest Remediation",
        label: "Security Engineering",
        image: "assets/portfolio/security.png",
        summary:
          "Hardened real application surfaces using OWASP patterns, parameterized queries, tenant boundary checks, URL-encoded path traversal detection, ownership validation, and sensitive log redaction.",
      },
      {
        title: "OpenBridge / OpenClaw",
        label: "AI Agent Platform",
        image: "assets/portfolio/openbridge_overview.png",
        summary:
          "Contributed to an AI multi-agent platform with channel integrations, prompt behavior, LINE/Facebook/Discord webhook flows, hybrid local/cloud LLM exploration, and operational testing.",
      },
      {
        title: "Stellar / Travel Rule Study",
        label: "Research | Compliance",
        image: "assets/portfolio/crypto_research_summary.png",
        summary:
          "Researched Stellar, SEP-10/SEP-24, VASP, KYC, KYT, AML/CFT, Travel Rule, Sumsub, and Chainalysis flows. Scope was research, documentation, diagrams, and API exploration.",
      },
    ],
    scopeItems: [
      {
        title: "Partner API Contracts",
        body:
          "Worked on top-up, withdraw, cancel, fee, and partner wallet flows aligned with API specs, Postman collections, database transaction behavior, and wallet balance updates.",
      },
      {
        title: "Audit Logging",
        body:
          "Standardized audit actions, indexed event queries, sensitive-field change detection, report/KYC download logs, and back-office event tracking.",
      },
      {
        title: "Keycloak Themes",
        body:
          "Customized Freemarker templates for login, password update, info pages, toast macros, validation behavior, localization, and XSS-safe rendering.",
      },
      {
        title: "KYC Back Office",
        body:
          "Built KYC list/detail workflows, server-side filtering and pagination, file upload states, provider result display, document access validation, and duplicate approval protection.",
      },
      {
        title: "Wallet & Settlement",
        body:
          "Implemented wallet, transaction, settlement, fee, and tourist wallet services with DTOs, seed data, tests, balance formatting, and floating-point precision fixes.",
      },
      {
        title: "Back-Office UI",
        body:
          "Developed partner, wallet, KYC, dashboard, fee, internal user, report, and detail pages with hooks, filters, sorting, date pickers, and server-side pagination.",
      },
      {
        title: "Performance Fixes",
        body:
          "Moved expensive filtering and sorting from client memory to server/database level, normalized debounce behavior, and optimized Keycloak sync with chunked concurrency.",
      },
      {
        title: "Research Boundaries",
        body:
          "Stellar, SEP-10, SEP-24, Travel Rule, Sumsub, and Chainalysis are listed as research and documentation support work, separate from the non-Stellar Tourist E-Wallet implementation.",
      },
    ],
    projects: [
      {
        title: "AI Thai Poem Writing Tool",
        image: "assets/portfolio/poem_overview.png",
        summary:
          "Flask web app for Thai poem composition using PyThaiNLP for rhyme and phonetic analysis with real-time suggestions.",
        href: "https://github.com/witsawadaochuai/OctaPoem-AI.git",
      },
      {
        title: "AWS Rekognition Face Verification",
        image: "assets/portfolio/facedetect_overview.png",
        summary:
          "Integrated AWS Rekognition for automated face detection and verification in a booking-related workflow.",
      },
      {
        title: "Hybrid AI Multi-Agent Exploration",
        image: "assets/portfolio/multi_agents.png",
        summary:
          "Explored local LLM workflows with Ollama and Gemma 3, comparing privacy, latency, and cloud cost trade-offs.",
      },
    ],
    experience: [
      {
        period: "07/2025 - Present",
        role: "Software Engineer | Enabridge Co., Ltd.",
        body:
          "Full-stack work on Tourist E-Wallet with Lightnet, AI agent integrations, security hardening, Keycloak PKCE, KYC/AML workflows, wallet and transaction services, and production-facing fixes.",
      },
      {
        period: "07/2024 - 02/2025",
        role: "Trainee AI & Data Engineer | Smarterware Co., Ltd.",
        body:
          "Built legal chatbot workflows with Streamlit, AWS Bedrock, LangChain, RAG, Thai document processing, MongoDB, PostgreSQL, and semantic search.",
      },
      {
        period: "12/2022 - 05/2023",
        role: "Trainee Project Engineer | SKY ICT PCL.",
        body:
          "Tested airport self-service kiosk systems, ID-card scanning, cash handling, CCTV, face detection, license-plate detection, and control software installation.",
      },
    ],
    skillGroups: [
      { title: "Frontend", body: "Next.js, React, Vue 3, TypeScript, JavaScript, Tailwind CSS, HTML, CSS" },
      { title: "Backend", body: "NestJS, FastAPI, Flask, Node.js, REST API design, unit testing, Prisma ORM" },
      {
        title: "Data & Cloud",
        body: "PostgreSQL, Redis, MongoDB, AWS S3, AWS Bedrock, AWS Rekognition, Docker, GitHub Actions",
      },
      {
        title: "Security & FinTech",
        body: "OWASP Top 10, Keycloak PKCE, brute-force protection, KYC/AML, multi-tenant architecture, audit logging",
      },
      { title: "AI", body: "RAG, LangChain, prompt engineering, multi-agent workflows, Ollama, Gemma, PyThaiNLP" },
      { title: "Languages", body: "Thai native, English intermediate" },
    ],
  },
  th: {
    nav: {
      dashboard: "แดชบอร์ด",
      work: "ผลงาน",
      scope: "ขอบเขตงาน",
      projects: "โปรเจกต์",
      experience: "ประสบการณ์",
      contact: "ติดต่อ",
    },
    topbar: {
      breadcrumb: "หน้า / พอร์ตโฟลิโอ",
      title: "แดชบอร์ด",
      search: "พอร์ตโฟลิโอ Witsawa",
      resume: "เรซูเม่",
    },
    sidebar: {
      title: "Witsawa",
      subtitle: "Daochuai",
      badge: "Portfolio Dashboard",
      resume: "ดาวน์โหลดเรซูเม่",
      language: "ภาษา",
      theme: "ธีม",
      light: "สว่าง",
      dark: "มืด",
      footer: "สร้างด้วย React, Vite และ Tailwind CSS พร้อม deploy ผ่าน GitHub Pages",
    },
    hero: {
      eyebrow: "Full-Stack Software Engineer | FinTech | AI",
      title: "พัฒนาแพลตฟอร์มการเงินที่ปลอดภัย และระบบ AI ที่ใช้งานได้จริง",
      body:
        "ผมชื่อโด่ง จบ Computer Engineering and AI และมีประสบการณ์ทำ Tourist E-Wallet, ระบบ back-office, KYC workflow, Keycloak security, การแก้ pentest findings และ AI agent integration ในงานที่ใกล้ production จริง",
      viewWork: "ดูผลงาน",
      resumePdf: "เรซูเม่ PDF",
    },
    sections: {
      workEyebrow: "ผลงานเด่น",
      workTitle: "Portfolio Case Studies",
      scopeEyebrow: "ขอบเขตงานละเอียด",
      scopeTitle: "รายละเอียดจากโฟลเดอร์ Result และ Job-Prep",
      scopeSubtitle:
        "คัดเฉพาะข้อมูลที่เหมาะกับการเผยแพร่สาธารณะ แยกออกจากโน้ตส่วนตัวสำหรับสัมภาษณ์และเงินเดือน",
      projectsEyebrow: "Selected Projects",
      projectsTitle: "AI, Web และ Computer Vision",
      experienceEyebrow: "Experience",
      experienceTitle: "ประวัติการทำงาน",
      skillsEyebrow: "Skills",
      skillsTitle: "เครื่องมือและทักษะ",
      contactEyebrow: "Contact",
      contactTitle: "มาสร้างงานที่แข็งแรงและใช้งานได้จริงกันครับ",
      contactBody:
        "ผมเปิดรับงาน Full-stack Software Engineer, Backend, FinTech platform, งานพัฒนาแอปที่เน้น security และงาน AI integration",
    },
    contactLinks: sharedContactLinks,
    metrics: [
      { value: "421+", label: "commits ที่วิเคราะห์จาก e-wallet repos" },
      { value: "10+", label: "ช่องโหว่จาก pentest ที่แก้ไข" },
      { value: "3", label: "KYC provider workflows ที่เกี่ยวข้อง" },
      { value: "Full-Stack", label: "Next.js, React, NestJS, PostgreSQL" },
    ],
    featuredCase: {
      title: "Tourist E-Wallet Back Office",
      label: "FinTech | Production Platform",
      image: "assets/portfolio/transaction.png",
      summary:
        "พัฒนาส่วนสำคัญของระบบ back-office สำหรับ e-wallet เช่น Partner, Wallet, KYC, Dashboard, Fee Management, reports และ transaction workflows โดยทำทั้งฝั่ง Next.js/React frontend และ NestJS backend services บางส่วน",
      bullets: [
        "ทำ Keycloak PKCE auth flow, custom auth templates และ brute-force protection integration",
        "แก้ pentest findings เช่น XSS, IDOR, SSRF, path traversal, SQL injection และ business-logic issues",
        "ทำ multi-tenant data isolation, audit logging, file validation และการป้องกันใน file storage ทั้ง S3/local/HTTP",
      ],
      tech: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Redis", "Keycloak"],
    },
    caseStudies: [
      {
        title: "Pentest Remediation",
        label: "Security Engineering",
        image: "assets/portfolio/security.png",
        summary:
          "ปรับปรุงความปลอดภัยของระบบจริงตาม OWASP patterns เช่น parameterized queries, tenant boundary checks, path traversal detection, ownership validation และ sensitive log redaction",
      },
      {
        title: "OpenBridge / OpenClaw",
        label: "AI Agent Platform",
        image: "assets/portfolio/openbridge_overview.png",
        summary:
          "มีส่วนร่วมกับแพลตฟอร์ม AI multi-agent เช่น channel integrations, prompt behavior, LINE/Facebook/Discord webhook flows, hybrid local/cloud LLM และ operational testing",
      },
      {
        title: "Stellar / Travel Rule Study",
        label: "Research | Compliance",
        image: "assets/portfolio/crypto_research_summary.png",
        summary:
          "ศึกษา Stellar, SEP-10/SEP-24, VASP, KYC, KYT, AML/CFT, Travel Rule, Sumsub และ Chainalysis โดยขอบเขตเป็น research, documentation, diagrams และ API exploration",
      },
    ],
    scopeItems: [
      {
        title: "Partner API Contracts",
        body:
          "ทำงานกับ flow top-up, withdraw, cancel, fee และ partner wallet ให้สอดคล้องกับ API specs, Postman collections, database transaction behavior และ wallet balance updates",
      },
      {
        title: "Audit Logging",
        body:
          "จัดมาตรฐาน audit actions, indexed event queries, sensitive-field change detection, report/KYC download logs และ back-office event tracking",
      },
      {
        title: "Keycloak Themes",
        body:
          "ปรับ Freemarker templates สำหรับ login, password update, info pages, toast macros, validation behavior, localization และการ render แบบ XSS-safe",
      },
      {
        title: "KYC Back Office",
        body:
          "ทำ KYC list/detail workflows, server-side filtering และ pagination, file upload states, provider result display, document access validation และ duplicate approval protection",
      },
      {
        title: "Wallet & Settlement",
        body:
          "ทำ wallet, transaction, settlement, fee และ tourist wallet services พร้อม DTOs, seed data, tests, balance formatting และ floating-point precision fixes",
      },
      {
        title: "Back-Office UI",
        body:
          "พัฒนา partner, wallet, KYC, dashboard, fee, internal user, report และ detail pages พร้อม hooks, filters, sorting, date pickers และ server-side pagination",
      },
      {
        title: "Performance Fixes",
        body:
          "ย้าย filtering/sorting ที่หนักจาก client memory ไปที่ server/database, ปรับ debounce behavior และ optimize Keycloak sync ด้วย chunked concurrency",
      },
      {
        title: "Research Boundaries",
        body:
          "Stellar, SEP-10, SEP-24, Travel Rule, Sumsub และ Chainalysis ถูกระบุเป็นงาน research/documentation แยกจาก Tourist E-Wallet ที่ไม่ใช่ Stellar",
      },
    ],
    projects: [
      {
        title: "AI Thai Poem Writing Tool",
        image: "assets/portfolio/poem_overview.png",
        summary:
          "เว็บ Flask ช่วยแต่งกลอนภาษาไทย ใช้ PyThaiNLP สำหรับ rhyme และ phonetic analysis พร้อมคำแนะนำแบบ real-time",
        href: "https://github.com/witsawadaochuai/OctaPoem-AI.git",
      },
      {
        title: "AWS Rekognition Face Verification",
        image: "assets/portfolio/facedetect_overview.png",
        summary: "เชื่อม AWS Rekognition สำหรับตรวจจับและยืนยันใบหน้าใน workflow ที่เกี่ยวข้องกับระบบ booking",
      },
      {
        title: "Hybrid AI Multi-Agent Exploration",
        image: "assets/portfolio/multi_agents.png",
        summary:
          "ทดลอง local LLM workflows ด้วย Ollama และ Gemma 3 เพื่อเทียบ privacy, latency และ cloud cost trade-offs",
      },
    ],
    experience: [
      {
        period: "07/2025 - Present",
        role: "Software Engineer | Enabridge Co., Ltd.",
        body:
          "ทำงาน full-stack บน Tourist E-Wallet ร่วมกับ Lightnet รวมถึง AI agent integrations, security hardening, Keycloak PKCE, KYC/AML workflows, wallet/transaction services และ production-facing fixes",
      },
      {
        period: "07/2024 - 02/2025",
        role: "Trainee AI & Data Engineer | Smarterware Co., Ltd.",
        body:
          "ทำ legal chatbot ด้วย Streamlit, AWS Bedrock, LangChain, RAG, Thai document processing, MongoDB, PostgreSQL และ semantic search",
      },
      {
        period: "12/2022 - 05/2023",
        role: "Trainee Project Engineer | SKY ICT PCL.",
        body:
          "ทดสอบ airport self-service kiosk, ID-card scanning, cash handling, CCTV, face detection, license-plate detection และติดตั้ง control software",
      },
    ],
    skillGroups: [
      { title: "Frontend", body: "Next.js, React, Vue 3, TypeScript, JavaScript, Tailwind CSS, HTML, CSS" },
      { title: "Backend", body: "NestJS, FastAPI, Flask, Node.js, REST API design, unit testing, Prisma ORM" },
      {
        title: "Data & Cloud",
        body: "PostgreSQL, Redis, MongoDB, AWS S3, AWS Bedrock, AWS Rekognition, Docker, GitHub Actions",
      },
      {
        title: "Security & FinTech",
        body: "OWASP Top 10, Keycloak PKCE, brute-force protection, KYC/AML, multi-tenant architecture, audit logging",
      },
      { title: "AI", body: "RAG, LangChain, prompt engineering, multi-agent workflows, Ollama, Gemma, PyThaiNLP" },
      { title: "ภาษา", body: "ไทย native, อังกฤษ intermediate" },
    ],
  },
};
