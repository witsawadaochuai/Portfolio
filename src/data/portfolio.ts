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
        "I am Dong, a Computer Engineering and AI graduate. I have worked on a production Tourist E-Wallet platform (back-office, partner/wallet/transaction APIs, KYC back-office workflows, Keycloak security) and on AI agent platforms that connect LLMs to real channels and workflows.",
      viewWork: "View Work",
      resumePdf: "Resume PDF",
    },
    sections: {
      workEyebrow: "Featured Work",
      workTitle: "Portfolio Case Studies",
      scopeEyebrow: "Detailed Scope",
      scopeTitle: "What I actually built and contributed",
      scopeSubtitle:
        "Public-safe details. Research-only work is clearly marked, and no client UI, limits, or partner names are shown.",
      projectsEyebrow: "Selected Projects",
      projectsTitle: "AI, Web, and Computer Vision",
      experienceEyebrow: "Experience",
      experienceTitle: "Work History",
      skillsEyebrow: "Skills",
      skillsTitle: "Tools I Use",
      contactEyebrow: "Contact",
      contactTitle: "Let us build something solid.",
      contactBody:
        "I am open to full-stack software engineering, backend, FinTech platform, security-minded application development, and AI agent / automation roles.",
    },
    contactLinks: sharedContactLinks,
    metrics: [
      { value: "1.5 yr", label: "production experience (FinTech + AI)" },
      { value: "#1", label: "frontend committer on the e-wallet back-office repo" },
      { value: "OWASP", label: "Top 10 practices + pentest fixes" },
      { value: "Full-Stack", label: "Next.js · React · NestJS · PostgreSQL" },
    ],
    featuredCase: {
      title: "Tourist E-Wallet Back Office",
      label: "FinTech | Production Platform",
      image: "assets/portfolio/transaction.png",
      summary:
        "Built major parts of a secure e-wallet back-office (with Lightnet) — Partner, Wallet, KYC, Dashboard, Fee Management, reports, and transaction views. Worked across a Next.js / React frontend and NestJS backend APIs for partner integration and serving wallet/transaction data to the front end.",
      bullets: [
        "Led the back-office frontend from Figma (top contributor) and integrated Keycloak (PKCE) auth flow with client-side hardening.",
        "Implemented Brute-Force Protection (Keycloak Admin API) and applied OWASP Top 10 practices — resolved penetration-test findings.",
        "Built KYC back-office workflows (list / detail / status / provider-result display) and secured access to sensitive documents with ownership validation.",
      ],
      tech: ["Next.js", "React", "TypeScript", "NestJS", "Node.js", "PostgreSQL", "Redis", "Keycloak"],
    },
    caseStudies: [
      {
        title: "Security & Pentest Remediation",
        label: "Security Engineering",
        image: "assets/portfolio/security.png",
        summary:
          "Hardened real application surfaces following OWASP Top 10 — resolved penetration-test findings, added ownership / tenant boundary checks, and protected access to sensitive KYC documents. Implemented Brute-Force Protection and Keycloak (PKCE) hardening (custom auth templates).",
      },
      {
        title: "OpenBridge / Pepper AI Agent",
        label: "AI Agent Platform (team)",
        image: "assets/portfolio/openbridge_overview.png",
        summary:
          "Helped build a multi-tenant AI agent platform on the OpenClaw framework. Designed the Pepper agent's conversation / onboarding flow, connected LINE / Facebook / Discord via webhook and MCP, and handled provisioning and E2E / regression testing.",
        tech: ["Node.js", "MCP", "OpenClaw", "LINE / Facebook API", "PostgreSQL", "Redis", "Docker", "GCP"],
      },
      {
        title: "Blockchain Compliance Research (LightBit)",
        label: "Research | Documentation",
        image: "assets/portfolio/crypto_research_summary.png",
        summary:
          "Researched blockchain compliance to support the team — Stellar (SEP-10 / SEP-24), VASP / FATF, Travel Rule, and KYC. Produced flow analysis, sequence diagrams, and API exploration. Scope: research & documentation, not production implementation.",
      },
    ],
    scopeItems: [
      {
        title: "Partner API Contracts",
        body:
          "Worked on top-up, withdraw, cancel, fee, and partner wallet flows aligned with API specs and Postman collections, using database transactions for correct wallet balance updates.",
      },
      {
        title: "Audit Logging",
        body:
          "Standardized audit actions, indexed event queries, sensitive-field change detection, report / KYC download logs, and back-office event tracking.",
      },
      {
        title: "Keycloak Themes & Auth",
        body:
          "Customized Freemarker templates for login, password update, and info pages with toast macros, validation behavior, localization, and safe output rendering — alongside PKCE auth and brute-force protection.",
      },
      {
        title: "KYC Back Office",
        body:
          "Built KYC list / detail workflows with server-side filtering and pagination, file-upload states, provider-result display, document-access validation, and duplicate-approval protection.",
      },
      {
        title: "Wallet & Transaction",
        body:
          "Implemented wallet and transaction services with DTOs, seed data, unit / regression tests, balance formatting, and floating-point precision fixes.",
      },
      {
        title: "Back-Office UI",
        body:
          "Developed partner, wallet, KYC, dashboard, fee, internal-user, report, and detail pages with reusable hooks, filters, sorting, date pickers, and server-side pagination.",
      },
      {
        title: "Performance Fixes",
        body:
          "Moved expensive filtering and sorting from client memory to the server / database level, normalized debounce behavior, and optimized Keycloak sync with chunked concurrency.",
      },
      {
        title: "Research Boundaries",
        body:
          "Stellar, SEP-10 / 24, VASP / FATF, and Travel Rule are research & documentation support work — kept separate from the (non-Stellar) Tourist E-Wallet implementation.",
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
        title: "AI Face Detection (AWS Rekognition)",
        image: "assets/portfolio/facedetect_overview.png",
        summary:
          "Integrated AWS Rekognition for automated face detection and verification (explored YOLO first) to reduce manual image review.",
      },
      {
        title: "Hybrid AI Multi-Agent Exploration",
        image: "assets/portfolio/multi_agents.png",
        summary:
          "Explored local LLM workflows with Ollama and multi-agent orchestration, comparing privacy, latency, and cloud-cost trade-offs.",
      },
      {
        title: "OpenClaw Agent Framework",
        image: "assets/portfolio/openbridge_overview.png",
        summary:
          "Worked with OpenClaw as the agent framework behind OpenBridge / Pepper AI. Helped shape agent configuration, workflow behavior, tool invocation patterns, provisioning, and regression testing for channel-connected AI agents.",
      },
      {
        title: "LINE ChatBot / Pepper AI Integration",
        image: "assets/portfolio/hero.png",
        summary:
          "Built and integrated a LINE-connected AI chatbot flow for Pepper AI, covering webhook handling, agent orchestration, onboarding conversations, tool-calling behavior, and regression testing for real chat usage.",
      },
    ],
    experience: [
      {
        period: "07/2025 - Present",
        role: "Software Engineer | Enabridge Co., Ltd.",
        body:
          "Full-stack work on Tourist E-Wallet (with Lightnet): back-office UI, partner / wallet / transaction APIs, KYC back-office workflows, Keycloak (PKCE) security and brute-force protection, and OWASP pentest fixes. Also helped build the OpenBridge / Pepper AI agent platform and conducted blockchain-compliance research (LightBit).",
      },
      {
        period: "07/2024 - 02/2025",
        role: "Trainee AI & Data Engineer | Smarterware Co., Ltd.",
        body:
          "Built a legal chatbot prototype with Streamlit, AWS Bedrock, and LangChain (RAG), plus a Thai document-processing pipeline (PyThaiNLP) with MongoDB / PostgreSQL and semantic search.",
      },
      {
        period: "12/2022 - 05/2023",
        role: "Trainee Project Engineer | SKY ICT PCL.",
        body:
          "Tested coin & ID-card scanning systems, verified CCTV face and license-plate detection, and installed CCTV control software.",
      },
    ],
    skillGroups: [
      { title: "Frontend", body: "Next.js, React, Vue 3, TypeScript, JavaScript, Tailwind CSS, HTML, CSS" },
      { title: "Backend", body: "NestJS, Node.js, FastAPI, Flask, REST API design, unit testing, Prisma ORM" },
      {
        title: "Data & Cloud",
        body: "PostgreSQL, Redis, MongoDB, AWS (S3, Bedrock, Rekognition), Docker, GitHub Actions, GCP",
      },
      {
        title: "Security & FinTech",
        body: "OWASP Top 10, Keycloak (PKCE), brute-force protection, KYC/AML workflows, multi-tenant architecture, audit logging",
      },
      {
        title: "AI",
        body: "AI agents (OpenClaw / MCP), RAG (LangChain), prompt & flow engineering, Ollama, PyThaiNLP, AI-assisted dev (Claude Code, Cursor)",
      },
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
        "ผมชื่อโด่ง จบ Computer Engineering & AI เคยทำระบบ Tourist E-Wallet บน production (back-office, partner/wallet/transaction API, KYC back-office workflow, Keycloak security) และทำ AI agent platform ที่เชื่อม LLM เข้ากับช่องทางและ workflow จริง",
      viewWork: "ดูผลงาน",
      resumePdf: "เรซูเม่ PDF",
    },
    sections: {
      workEyebrow: "ผลงานเด่น",
      workTitle: "Portfolio Case Studies",
      scopeEyebrow: "ขอบเขตงานละเอียด",
      scopeTitle: "สิ่งที่ผมลงมือทำและมีส่วนร่วมจริง",
      scopeSubtitle:
        "เฉพาะข้อมูลที่เผยแพร่ได้ งาน research จะระบุชัดเจน และไม่มี UI จริง / limit / ชื่อ partner",
      projectsEyebrow: "Selected Projects",
      projectsTitle: "AI, Web และ Computer Vision",
      experienceEyebrow: "Experience",
      experienceTitle: "ประวัติการทำงาน",
      skillsEyebrow: "Skills",
      skillsTitle: "เครื่องมือและทักษะ",
      contactEyebrow: "Contact",
      contactTitle: "มาสร้างงานที่แข็งแรงและใช้งานได้จริงกันครับ",
      contactBody:
        "ผมเปิดรับงาน Full-stack Software Engineer, Backend, FinTech platform, งานที่เน้น security และงาน AI agent / automation",
    },
    contactLinks: sharedContactLinks,
    metrics: [
      { value: "1.5 ปี", label: "ประสบการณ์ production (FinTech + AI)" },
      { value: "#1", label: "committer อันดับ 1 ของ repo back-office" },
      { value: "OWASP", label: "Top 10 + แก้ pentest findings" },
      { value: "Full-Stack", label: "Next.js · React · NestJS · PostgreSQL" },
    ],
    featuredCase: {
      title: "Tourist E-Wallet Back Office",
      label: "FinTech | Production Platform",
      image: "assets/portfolio/transaction.png",
      summary:
        "พัฒนาส่วนสำคัญของระบบ back-office สำหรับ e-wallet (ร่วมกับ Lightnet) — Partner, Wallet, KYC, Dashboard, Fee Management, reports และ transaction โดยทำทั้งฝั่ง Next.js / React frontend และ NestJS backend API ที่เชื่อม partner และ feed ข้อมูล wallet/transaction ให้หน้าบ้าน",
      bullets: [
        "ขึ้น back-office frontend ตาม Figma (committer อันดับต้นๆ) และต่อ Keycloak (PKCE) auth flow + client-side hardening",
        "ทำ Brute-Force Protection (Keycloak Admin API) และ apply OWASP Top 10 — แก้ penetration-test findings",
        "ทำ KYC back-office workflow (list / detail / status / provider-result display) และป้องกันการเข้าถึงเอกสารสำคัญด้วย ownership validation",
      ],
      tech: ["Next.js", "React", "TypeScript", "NestJS", "Node.js", "PostgreSQL", "Redis", "Keycloak"],
    },
    caseStudies: [
      {
        title: "Security & Pentest Remediation",
        label: "Security Engineering",
        image: "assets/portfolio/security.png",
        summary:
          "ปรับปรุงความปลอดภัยของระบบจริงตาม OWASP Top 10 — แก้ penetration-test findings, เพิ่ม ownership / tenant boundary checks และป้องกันการเข้าถึงเอกสาร KYC ที่ sensitive พร้อมทำ Brute-Force Protection และ Keycloak (PKCE) hardening (custom auth templates)",
      },
      {
        title: "OpenBridge / Pepper AI Agent",
        label: "AI Agent Platform (งานทีม)",
        image: "assets/portfolio/openbridge_overview.png",
        summary:
          "ร่วมพัฒนา multi-tenant AI agent platform บน OpenClaw framework — ออกแบบ conversation / onboarding flow ของ Pepper agent, เชื่อม LINE / Facebook / Discord ผ่าน webhook และ MCP, ดูแล provisioning และ E2E / regression testing",
        tech: ["Node.js", "MCP", "OpenClaw", "LINE / Facebook API", "PostgreSQL", "Redis", "Docker", "GCP"],
      },
      {
        title: "Blockchain Compliance Research (LightBit)",
        label: "Research | Documentation",
        image: "assets/portfolio/crypto_research_summary.png",
        summary:
          "ศึกษา blockchain compliance เพื่อ support ทีม — Stellar (SEP-10 / SEP-24), VASP / FATF, Travel Rule และ KYC ทำ flow analysis, sequence diagram และทดลอง API · ขอบเขต: research & documentation ไม่ใช่ production implementation",
      },
    ],
    scopeItems: [
      {
        title: "Partner API Contracts",
        body:
          "ทำ flow top-up, withdraw, cancel, fee และ partner wallet ให้ตรงกับ API specs / Postman collections โดยใช้ database transaction เพื่อให้ยอด wallet ถูกต้อง",
      },
      {
        title: "Audit Logging",
        body:
          "จัดมาตรฐาน audit actions, indexed event queries, sensitive-field change detection, report / KYC download logs และ back-office event tracking",
      },
      {
        title: "Keycloak Themes & Auth",
        body:
          "ปรับ Freemarker templates สำหรับ login, password update, info pages พร้อม toast macros, validation, localization และ safe output rendering ควบคู่กับ PKCE auth + brute-force protection",
      },
      {
        title: "KYC Back Office",
        body:
          "ทำ KYC list / detail workflow, server-side filtering / pagination, file-upload states, provider-result display, document-access validation และ duplicate-approval protection",
      },
      {
        title: "Wallet & Transaction",
        body:
          "ทำ wallet และ transaction services พร้อม DTOs, seed data, unit / regression tests, balance formatting และ floating-point precision fixes",
      },
      {
        title: "Back-Office UI",
        body:
          "พัฒนา partner, wallet, KYC, dashboard, fee, internal-user, report และ detail pages พร้อม reusable hooks, filters, sorting, date pickers และ server-side pagination",
      },
      {
        title: "Performance Fixes",
        body:
          "ย้าย filtering / sorting ที่หนักจาก client memory ไปที่ server / database, ปรับ debounce และ optimize Keycloak sync ด้วย chunked concurrency",
      },
      {
        title: "Research Boundaries",
        body:
          "Stellar, SEP-10 / 24, VASP / FATF และ Travel Rule เป็นงาน research / documentation — แยกจาก Tourist E-Wallet (ที่ไม่ใช่ Stellar)",
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
        title: "AI Face Detection (AWS Rekognition)",
        image: "assets/portfolio/facedetect_overview.png",
        summary: "เชื่อม AWS Rekognition สำหรับตรวจจับและยืนยันใบหน้าอัตโนมัติ (ทดลอง YOLO ก่อน) เพื่อลดงานตรวจรูป manual",
      },
      {
        title: "Hybrid AI Multi-Agent Exploration",
        image: "assets/portfolio/multi_agents.png",
        summary:
          "ทดลอง local LLM workflows ด้วย Ollama และ multi-agent orchestration เพื่อเทียบ privacy, latency และ cloud-cost trade-offs",
      },
      {
        title: "OpenClaw Agent Framework",
        image: "assets/portfolio/openbridge_overview.png",
        summary:
          "ทำงานกับ OpenClaw ในฐานะ agent framework ที่อยู่เบื้องหลัง OpenBridge / Pepper AI ช่วยปรับ agent configuration, workflow behavior, tool invocation pattern, provisioning และ regression testing สำหรับ AI agent ที่เชื่อมกับช่องทางจริง",
      },
      {
        title: "LINE ChatBot / Pepper AI Integration",
        image: "assets/portfolio/hero.png",
        summary:
          "พัฒนาและเชื่อม LINE ChatBot สำหรับ Pepper AI ครอบคลุม webhook handling, agent orchestration, onboarding conversation, tool-calling behavior และ regression testing สำหรับการใช้งานแชตจริง",
      },
    ],
    experience: [
      {
        period: "07/2025 - Present",
        role: "Software Engineer | Enabridge Co., Ltd.",
        body:
          "ทำงาน full-stack บน Tourist E-Wallet (ร่วมกับ Lightnet): back-office UI, partner / wallet / transaction API, KYC back-office workflow, Keycloak (PKCE) security + brute-force protection และแก้ pentest findings ตาม OWASP · นอกจากนี้ร่วมพัฒนา OpenBridge / Pepper AI agent platform และทำ blockchain-compliance research (LightBit)",
      },
      {
        period: "07/2024 - 02/2025",
        role: "Trainee AI & Data Engineer | Smarterware Co., Ltd.",
        body:
          "ทำ legal chatbot prototype ด้วย Streamlit, AWS Bedrock และ LangChain (RAG) พร้อม Thai document-processing pipeline (PyThaiNLP) บน MongoDB / PostgreSQL และ semantic search",
      },
      {
        period: "12/2022 - 05/2023",
        role: "Trainee Project Engineer | SKY ICT PCL.",
        body:
          "ทดสอบระบบสแกนเหรียญ / บัตรประชาชน, ตรวจสอบ CCTV face และ license-plate detection และติดตั้ง CCTV control software",
      },
    ],
    skillGroups: [
      { title: "Frontend", body: "Next.js, React, Vue 3, TypeScript, JavaScript, Tailwind CSS, HTML, CSS" },
      { title: "Backend", body: "NestJS, Node.js, FastAPI, Flask, REST API design, unit testing, Prisma ORM" },
      {
        title: "Data & Cloud",
        body: "PostgreSQL, Redis, MongoDB, AWS (S3, Bedrock, Rekognition), Docker, GitHub Actions, GCP",
      },
      {
        title: "Security & FinTech",
        body: "OWASP Top 10, Keycloak (PKCE), brute-force protection, KYC/AML workflows, multi-tenant architecture, audit logging",
      },
      {
        title: "AI",
        body: "AI agents (OpenClaw / MCP), RAG (LangChain), prompt & flow engineering, Ollama, PyThaiNLP, AI-assisted dev (Claude Code, Cursor)",
      },
      { title: "ภาษา", body: "ไทย native, อังกฤษ intermediate" },
    ],
  },
};
