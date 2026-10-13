import { Language } from './translations';

export interface CourseModule {
  title: Record<Language, string>;
  description: Record<Language, string>;
  skills: string[];
}

export interface Course {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  badge?: Record<Language, string>;
  level: Record<Language, string>;
  duration: Record<Language, string>;
  format: Record<Language, string>;
  topics: string[];
  modules: CourseModule[];
  outcomes: Record<Language, string[]>;
  tools: string[];
}

export interface Instructor {
  id: string;
  name: string;
  role: Record<Language, string>;
  experience: Record<Language, string>;
  bio: Record<Language, string>;
  photoUrl: string;
  isPlaceholder: boolean;
  technologies: string[];
  stats: {
    studentsMentored: string;
    completedProjects: string;
    rating: string;
  };
}

export interface Testimonial {
  id: string;
  studentName: string;
  courseTaken: Record<Language, string>;
  quote: Record<Language, string>;
  outcome: Record<Language, string>;
  isPlaceholder: boolean;
  avatarSeed: string;
}

export interface SchoolConfig {
  phone: string;
  telegram: string;
  telegramUrl: string;
  instagram: string;
  instagramUrl: string;
  address: Record<Language, string>;
  workingHours: Record<Language, string>;
  email: string;
  stats: {
    students: number;
    studentsSuffix: string;
    courses: number;
    coursesSuffix: string;
    projects: number;
    projectsSuffix: string;
    practicalPercentage: number;
    practicalSuffix: string;
  };
}

export const initialSchoolConfig: SchoolConfig = {
  phone: "+998 (91) 068 03 08",
  telegram: "@startum_256",
  telegramUrl: "https://t.me/startum256",
  instagram: "@startum_itschool",
  instagramUrl: "https://instagram.com",
  address: {
    en: "Innovation Tech District, Building 4B, Suite 200",
    ru: "Инновационный Технологический Квартал, Корпус 4B, Офис 200",
    uz: "Innovatsion Texnopark hududi, 4B-bino, 200-xona",
  },
  workingHours: {
    en: "Monday – Saturday: 09:00 AM – 06:00 PM",
    ru: "Понедельник – Суббота: 09:00 – 18:00",
    uz: "Dushanba – Shanba: 09:00 – 18:00",
  },
  email: "startum256@gmail.com",
  stats: {
    students: 500,
    studentsSuffix: "+",
    courses: 4,
    coursesSuffix: "+",
    projects: 120,
    projectsSuffix: "+",
    practicalPercentage: 90,
    practicalSuffix: "%",
  },
};

export const COURSES_DATA: Course[] = [
  {
    id: "foundation",
    title: {
      en: "Foundation — Start Your Coding Journey",
      ru: "Foundation — Старт в программировании",
      uz: "Foundation — Dasturlashga ilk qadam",
    },
    subtitle: {
      en: "Master the fundamental building blocks of programming and modern web creation",
      ru: "Освойте фундаментальные основы программирования и создания современных веб-страниц",
      uz: "Dasturlash va zamonaviy veb-saytlar yaratishning asosiy poydevorini o‘rganing",
    },
    description: {
      en: "Learn the essential building blocks of the web and develop a strong programming foundation from absolute ground zero.",
      ru: "Изучите фундаментальные строительные блоки веба и создайте прочную алгоритмическую базу с абсолютного нуля.",
      uz: "Veb-dasturlashning asosiy bloklarini o‘rganing va noldan boshlab mustahkam dasturlash poydevorini yarating.",
    },
    badge: {
      en: "BEGINNER FRIENDLY",
      ru: "ДЛЯ НОВИЧКОВ",
      uz: "BOSHLOVCHILAR UCHUN",
    },
    level: {
      en: "Beginner",
      ru: "Начальный",
      uz: "Boshlang‘ich",
    },
    duration: {
      en: "2 Months",
      ru: "2 Месяца",
      uz: "2 Oy",
    },
    format: {
      en: "In-Person & Online",
      ru: "Очно и онлайн",
      uz: "Markazda va onlayn",
    },
    topics: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Web Design",
      "Programming Fundamentals"
    ],
    modules: [
      {
        title: {
          en: "Module 1: Web Structure & Semantic HTML5",
          ru: "Модуль 1: Структура веба и семантический HTML5",
          uz: "1-modul: Veb tuzilishi va semantik HTML5",
        },
        description: {
          en: "Semantic tags, document structure, forms, accessibility, SEO principles, modern document standards.",
          ru: "Семантические теги, структура документов, веб-формы, доступность и современные стандарты W3C.",
          uz: "Semantik teglar, hujjat tuzilishi, formalar, qulaylik va zamonaviy veb standartlari.",
        },
        skills: ["Semantic Elements", "Form Validation", "Accessibility"]
      },
      {
        title: {
          en: "Module 2: Modern CSS3 & Responsive Layouts",
          ru: "Модуль 2: Современный CSS3 и адаптивная вёрстка",
          uz: "2-modul: Zamonaviy CSS3 va moslashuvchan dizayn",
        },
        description: {
          en: "Flexbox, Grid systems, media queries, CSS variables, transitions, and mobile-first layout techniques.",
          ru: "Сетки Flexbox и CSS Grid, медиазапросы, CSS-переменные, переходы и подход Mobile-First.",
          uz: "Flexbox, CSS Grid, media so‘rovlar, CSS o‘zgaruvchilar va mobil qurilmalar uchun dizayn.",
        },
        skills: ["CSS Flexbox", "CSS Grid", "Responsive Design"]
      },
      {
        title: {
          en: "Module 3: Core JavaScript & Algorithms",
          ru: "Модуль 3: Основы JavaScript и алгоритмическое мышление",
          uz: "3-modul: Asosiy JavaScript va algoritmlar",
        },
        description: {
          en: "Variables, functions, loops, DOM manipulation, events, asynchronous logic, and algorithmic thinking.",
          ru: "Переменные, функции, циклы, манипуляции с DOM, события, асинхронность и решение задач.",
          uz: "O‘zgaruvchilar, funksiyalar, sikllar, DOM manipulyatsiyasi va asinxron mantiq.",
        },
        skills: ["DOM API", "Event Listeners", "Conditionals & Loops"]
      },
      {
        title: {
          en: "Module 4: Capstone Portfolio Projects",
          ru: "Модуль 4: Итоговые проекты для портфолио",
          uz: "4-modul: Portfolio uchun yakuniy loyihalar",
        },
        description: {
          en: "Building responsive multi-page web applications from scratch, deploying live to GitHub Pages or Vercel.",
          ru: "Создание адаптивных многостраничных сайтов с нуля и их публикация на GitHub Pages или Vercel.",
          uz: "Ko‘p sahifali veb-saytlar yaratish va ularni GitHub Pages yoki Vercel ga joylashtirish.",
        },
        skills: ["Project Architecture", "Git & GitHub", "Live Deployment"]
      }
    ],
    outcomes: {
      en: [
        "Write clean, accessible, semantic HTML5 code",
        "Build fully responsive layouts that look great on any screen",
        "Write functional JavaScript to handle user interactivity and state",
        "Deploy your own live portfolio projects online"
      ],
      ru: [
        "Писать чистый, доступный и семантичный код на HTML5",
        "Создавать адаптивные сайты, идеально выглядящие на любых экранах",
        "Писать функциональный JavaScript для интерактивности и логики",
        "Публиковать собственные проекты в интернете на GitHub"
      ],
      uz: [
        "Toza va semantik HTML5 kod yozish",
        "Har qanday ekranga moslashuvchan veb-saytlar yaratish",
        "Saytga interaktivlik qo‘shish uchun funksional JavaScript yozish",
        "O‘z loyihalaringizni internetga (GitHub/Vercel) joylash"
      ]
    },
    tools: ["VS Code", "HTML5 / CSS3", "Modern JavaScript", "Git & GitHub", "Chrome DevTools"]
  },
  {
    id: "frontend",
    title: {
      en: "Frontend Development — Build Modern Interfaces",
      ru: "Frontend Development — Создание интерфейсов",
      uz: "Frontend Development — Zamonaviy interfeyslar",
    },
    subtitle: {
      en: "Create high-performance, reactive, and scalable web apps with the modern UI ecosystem",
      ru: "Создавайте быстрые, реактивные и масштабируемые веб-приложения на современном стеке",
      uz: "Eng so‘nggi texnologiyalar yordamida tezkor va qulay veb-ilovalar yarating",
    },
    description: {
      en: "Learn to create responsive, interactive, and modern web applications using today's frontend ecosystem.",
      ru: "Научитесь создавать интерактивные, адаптивные и современные веб-приложения на актуальном стеке фронтенда.",
      uz: "Zamonaviy frontend vositalari yordamida interaktiv va murakkab veb-ilovalarni yaratishni o‘rganing.",
    },
    badge: {
      en: "POPULAR CHOICE",
      ru: "ПОПУЛЯРНЫЙ ВЫБОР",
      uz: "ENG TALABGIR KURS",
    },
    level: {
      en: "Intermediate",
      ru: "Средний",
      uz: "O‘rta",
    },
    duration: {
      en: "4 Months",
      ru: "4 Месяца",
      uz: "4 Oy",
    },
    format: {
      en: "In-Person & Online",
      ru: "Очно и онлайн",
      uz: "Markazda va onlayn",
    },
    topics: [
      "Vite",
      "Node.js Fundamentals",
      "React",
      "Next.js",
      "Redux",
      "Vue.js",
      "Nuxt",
      "Pinia"
    ],
    modules: [
      {
        title: {
          en: "Module 1: Modern Tooling & JavaScript Deep Dive",
          ru: "Модуль 1: Современный инструментарий и углублённый JS",
          uz: "1-modul: Zamonaviy vositalar va chuqurlashtirilgan JS",
        },
        description: {
          en: "ESNext syntax, modules, Vite build tool, npm/pnpm package ecosystem, Node.js runtime fundamentals.",
          ru: "Синтаксис ESNext, сборщик Vite, менеджеры пакетов npm/pnpm, базовые концепции Node.js.",
          uz: "ESNext sintaksisi, Vite, npm paketlar tizimi va Node.js muhiti asoslari.",
        },
        skills: ["Vite Tooling", "ES Modules", "Node.js Environment"]
      },
      {
        title: {
          en: "Module 2: React Core & Component Architecture",
          ru: "Модуль 2: Основы React и компонентная архитектура",
          uz: "2-modul: React asoslari va komponentlar arxitekturasi",
        },
        description: {
          en: "JSX, Hooks (useState, useEffect, useMemo, custom hooks), component lifecycle, conditional rendering.",
          ru: "JSX, хуки React (useState, useEffect, useMemo), жизненный цикл и кастомные хуки.",
          uz: "JSX, React hooklari, komponentlar tuzilishi va holatni boshqarish.",
        },
        skills: ["React 19", "Custom Hooks", "State Management"]
      },
      {
        title: {
          en: "Module 3: Global State & Next.js Fullstack UI",
          ru: "Модуль 3: Глобальное состояние и Next.js Fullstack UI",
          uz: "3-modul: Global holat va Next.js Fullstack UI",
        },
        description: {
          en: "Redux Toolkit, Context API, server components, routing, data fetching, SSR, and Next.js App Router.",
          ru: "Redux Toolkit, Context API, серверные компоненты, SSR, маршрутизация и Next.js App Router.",
          uz: "Redux Toolkit, Context API, server komponentlar, SSR va Next.js App Router.",
        },
        skills: ["Next.js App Router", "Redux Toolkit", "API Routes"]
      },
      {
        title: {
          en: "Module 4: Vue 3, Nuxt & Pinia Ecosystem",
          ru: "Модуль 4: Экосистема Vue 3, Nuxt и Pinia",
          uz: "4-modul: Vue 3, Nuxt va Pinia ekotizimi",
        },
        description: {
          en: "Vue 3 Composition API, Nuxt 3 full-stack framework, Pinia store management, and real-time frontend patterns.",
          ru: "Vue 3 Composition API, фреймворк Nuxt 3, хранилище Pinia и паттерны реального времени.",
          uz: "Vue 3 Composition API, Nuxt 3 freymvorki, Pinia do‘koni va frontend andozalari.",
        },
        skills: ["Vue 3", "Nuxt 3", "Pinia"]
      }
    ],
    outcomes: {
      en: [
        "Architect complex component trees in React and Next.js",
        "Master modern UI state management with Redux and Pinia",
        "Build production-grade Single Page and Server-Rendered Applications",
        "Work with REST APIs, WebSocket feeds, and third-party services"
      ],
      ru: [
        "Проектировать сложные компонентные деревья в React и Next.js",
        "Управлять глобальным состоянием с помощью Redux и Pinia",
        "Создавать высоконагруженные SPA и SSR приложения",
        "Интегрировать REST API, WebSockets и сторонние сервисы"
      ],
      uz: [
        "React va Next.js da murakkab komponentlar daraxtini yaratish",
        "Redux va Pinia yordamida ma’lumotlar oqimini professional boshqarish",
        "Ishlab chiqarishga tayyor SPA va SSR ilovalarini yaratish",
        "REST API, WebSocket va tashqi xizmatlar bilan ishlash"
      ]
    },
    tools: ["Vite", "React", "Next.js", "Vue.js", "Nuxt", "Redux Toolkit", "Tailwind CSS"]
  },
  {
    id: "backend",
    title: {
      en: "Backend Development — Power the Web",
      ru: "Backend Development — Архитектура серверов",
      uz: "Backend Development — Serverlar va ma’lumotlar bazasi",
    },
    subtitle: {
      en: "Architect scalable APIs, relational and NoSQL databases, authentication, and cloud servers",
      ru: "Проектируйте надёжные API, базы данных NoSQL, авторизацию и облачные серверы",
      uz: "Kengaytiriluvchi APIlar, NoSQL ma’lumotlar bazalari va xavfsiz avtorizatsiyani yarating",
    },
    description: {
      en: "Understand how servers, APIs, databases, and application logic work together behind the scenes.",
      ru: "Поймите, как серверы, базы данных, API и бизнес-логика слаженно работают под капотом приложений.",
      uz: "Serverlar, ma’lumotlar bazalari, API va dastur mantiqi sahna ortida qanday ishlashini to‘liq tushuning.",
    },
    level: {
      en: "Intermediate to Advanced",
      ru: "Средний / Продвинутый",
      uz: "O‘rta / Yuqori",
    },
    duration: {
      en: "4 Months",
      ru: "4 Месяца",
      uz: "4 Oy",
    },
    format: {
      en: "In-Person & Online",
      ru: "Очно и онлайн",
      uz: "Markazda va onlayn",
    },
    topics: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Server-Side Fundamentals"
    ],
    modules: [
      {
        title: {
          en: "Module 1: Node.js Runtime & Asynchronous Engine",
          ru: "Модуль 1: Среда выполнения Node.js и Event Loop",
          uz: "1-modul: Node.js muhiti va asinxron Event Loop",
        },
        description: {
          en: "Event Loop, streams, file system, HTTP module, npm scripting, asynchronous programming patterns.",
          ru: "Event Loop, потоки (streams), файловая система, модуль HTTP, асинхронные паттерны.",
          uz: "Event Loop, streamlar, fayllar tizimi, HTTP moduli va asinxron dasturlash.",
        },
        skills: ["Node.js Event Loop", "Buffers & Streams", "Async / Await"]
      },
      {
        title: {
          en: "Module 2: Express.js & RESTful API Architecture",
          ru: "Модуль 2: Архитектура Express.js и RESTful API",
          uz: "2-modul: Express.js va RESTful API arxitekturasi",
        },
        description: {
          en: "Routing, middleware pipelines, error handling, request validation, headers, and security practices.",
          ru: "Маршрутизация, middleware, централизованная обработка ошибок, валидация запросов.",
          uz: "Marshrutlash, middleware, xatolarni ushlash va xavfsizlik talablari.",
        },
        skills: ["Express Routing", "Custom Middleware", "JWT Authentication"]
      },
      {
        title: {
          en: "Module 3: MongoDB, Mongoose & Data Modeling",
          ru: "Модуль 3: MongoDB, Mongoose и моделирование данных",
          uz: "3-modul: MongoDB, Mongoose va ma’lumotlar modeli",
        },
        description: {
          en: "NoSQL document schemas, indexing, aggregation pipelines, relationships, data validation and migrations.",
          ru: "Схемы NoSQL, индексы, агрегации данных, связи коллекций, валидация и миграции.",
          uz: "NoSQL sxemalari, indekslash, agregatsiya va ma’lumotlar validatsiyasi.",
        },
        skills: ["MongoDB Atlas", "Mongoose ODM", "Aggregations"]
      },
      {
        title: {
          en: "Module 4: Security, Authentication & Cloud Deployment",
          ru: "Модуль 4: Безопасность, авторизация и деплой в облако",
          uz: "4-modul: Xavfsizlik, autentifikatsiya va bulutli serverlar",
        },
        description: {
          en: "Password hashing, JWT tokens, OAuth, rate limiting, Docker containerization, and production deployment.",
          ru: "Хэширование паролей, JWT-токены, защита от атак, контейнеризация в Docker и деплой.",
          uz: "Parollarni xeshlash, JWT tokenlar, Docker va serverda jonli ishga tushirish.",
        },
        skills: ["API Security", "Docker Basics", "Cloud Hosting"]
      }
    ],
    outcomes: {
      en: [
        "Design robust RESTful APIs with clean contract specifications",
        "Structure secure user authentication and authorization flows",
        "Model, index, and query scalable databases with MongoDB and Mongoose",
        "Deploy production backends with automated monitoring and logging"
      ],
      ru: [
        "Проектировать надёжные REST API с понятной спецификацией",
        "Реализовывать безопасную авторизацию и аутентификацию пользователей",
        "Моделировать и оптимизировать базы данных MongoDB",
        "Развёртывать серверные приложения в облачной среде"
      ],
      uz: [
        "Xavfsiz va tezkor RESTful API larni loyihalash",
        "Foydalanuvchilarni autentifikatsiya qilish va xavfsizlikni ta’minlash",
        "MongoDB yordamida kengaytiriluvchi ma’lumotlar bazalarini boshqarish",
        "Server dasturlarini bulutli xostinglarga muvaffaqiyatli joylashtirish"
      ]
    },
    tools: ["Node.js", "Express.js", "MongoDB", "Postman", "JWT", "Docker", "Git"]
  },
  {
    id: "literacy",
    title: {
      en: "Computer Literacy — Master Your Computer",
      ru: "Компьютерная грамотность — Уверенная работа с ПК",
      uz: "Kompyuter savodxonligi — Kompyuterni erkin boshqarish",
    },
    subtitle: {
      en: "Gain total confidence in managing your digital life, office suites, and internet security",
      ru: "Обретите уверенность при работе с файлами, офисными программами и безопасным интернетом",
      uz: "Fayllar, ofis dasturlari va internet xavfsizligida to‘liq ishonchga ega bo‘ling",
    },
    description: {
      en: "Build confidence using computers, managing files, working with essential software, and navigating the digital world.",
      ru: "Обретите уверенность при работе на компьютере, управлении файлами и офисными программами.",
      uz: "Kompyuter bilan ishlash, fayllarni tartibga solish va raqamli dunyoda erkin harakatlanishni o‘rganing.",
    },
    level: {
      en: "Absolute Beginner",
      ru: "С нуля",
      uz: "Noldan",
    },
    duration: {
      en: "1 Month",
      ru: "1 Месяц",
      uz: "1 Oy",
    },
    format: {
      en: "In-Person & Online",
      ru: "Очно и онлайн",
      uz: "Markazda va onlayn",
    },
    topics: [
      "Computer Fundamentals",
      "Windows and File Management",
      "Office Applications",
      "Internet and Digital Safety"
    ],
    modules: [
      {
        title: {
          en: "Module 1: Hardware, Operating Systems & Setup",
          ru: "Модуль 1: Устройство ПК, операционная система и настройка",
          uz: "1-modul: Kompyuter qurilmasi, operatsion tizim va sozlamalar",
        },
        description: {
          en: "How computers work, keyboard shortcuts, peripheral connections, system settings, and troubleshooting.",
          ru: "Принципы работы ПК, горячие клавиши, подключение устройств и базовые настройки системы.",
          uz: "Kompyuterning ishlash tamoyillari, tezkor tugmalar va tizim sozlamalari.",
        },
        skills: ["Operating System Basics", "Hardware Literacy", "System Settings"]
      },
      {
        title: {
          en: "Module 2: Professional File & Folder Organization",
          ru: "Модуль 2: Грамотная организация файлов и папок",
          uz: "2-modul: Fayl va papkalarni to‘g‘ri boshqarish",
        },
        description: {
          en: "File hierarchies, cloud storage (Google Drive, OneDrive), archiving, file formats, and backup habits.",
          ru: "Иерархия папок, облачные хранилища (Google Drive), архивация и создание резервных копий.",
          uz: "Fayllar iyerarxiyasi, bulutli xotiralar (Google Drive) va zaxira nusxalari.",
        },
        skills: ["File Management", "Cloud Storage Sync", "Archiving & Compression"]
      },
      {
        title: {
          en: "Module 3: Office & Productivity Power Tools",
          ru: "Модуль 3: Офисные программы и таблицы",
          uz: "3-modul: Ofis dasturlari va jadvallar",
        },
        description: {
          en: "Document authoring, spreadsheets with formulas, professional presentation slides, collaborative editing.",
          ru: "Создание документов, электронные таблицы с формулами, презентации и совместная работа.",
          uz: "Hujjatlar bilan ishlash, formulali jadvallar va taqdimotlar tayyorlash.",
        },
        skills: ["Word / Docs", "Excel / Sheets Formulas", "Presentation Slides"]
      },
      {
        title: {
          en: "Module 4: Internet Safety, Privacy & Digital Hygiene",
          ru: "Модуль 4: Кибербезопасность и цифровая гигиена",
          uz: "4-modul: Internet xavfsizligi va raqamli gigiyena",
        },
        description: {
          en: "Phishing defense, password managers, two-factor authentication, secure browsing, and email etiquette.",
          ru: "Защита от фишинга, менеджеры паролей, двухфакторная аутентификация и деловая переписка.",
          uz: "Fishingdan himoyalanish, parol menejerlari va ikki bosqichli himoya.",
        },
        skills: ["Digital Safety", "Password Management", "Online Privacy"]
      }
    ],
    outcomes: {
      en: [
        "Navigate Windows and macOS environments with complete confidence",
        "Keep all files, documents, and backups systematically organized",
        "Produce professional spreadsheets, reports, and presentation decks",
        "Safeguard personal data, passwords, and accounts from cyber threats"
      ],
      ru: [
        "Уверенно работать в Windows и macOS без посторонней помощи",
        "Систематизировать файлы, документы и рабочие архивы",
        "Создавать профессиональные таблицы, отчеты и презентации",
        "Надёжно защищать свои пароли, данные и аккаунты в интернете"
      ],
      uz: [
        "Windows va macOS tizimlarida mustaqil va erkin ishlash",
        "Fayllar va hujjatlarni namunali tartibga solish",
        "Jadvallar, hisobotlar va professional taqdimotlar tayyorlash",
        "Shaxsiy ma’lumotlar va parollarni xavfsiz saqlash"
      ]
    },
    tools: ["Windows / macOS", "Google Workspace", "Microsoft Office", "Password Managers", "Cloud Storage"]
  }
];

export const INITIAL_INSTRUCTOR: Instructor = {
  id: "lead-mentor",
  name: "Alex V. Romanov",
  role: {
    en: "Lead Software Instructor & Full-Stack Engineer",
    ru: "Ведущий преподаватель и Full-Stack разработчик",
    uz: "Bosh o‘qituvchi va Full-Stack dasturchi",
  },
  experience: {
    en: "7+ Years Industry Experience",
    ru: "Более 7 лет опыта в индустрии",
    uz: "7 yildan ortiq sohaviy tajriba",
  },
  bio: {
    en: "Passionate about demystifying code for newcomers. Previously built production distributed systems and scalable frontend applications. At STARTUM, Alex guides students through structured coding drills and real-world architectures with patience and clarity.",
    ru: "С увлечением помогает новичкам преодолеть страх перед кодом. Ранее разрабатывал распределённые системы и масштабируемые веб-приложения. В STARTUM ведёт студентов через практические задачи и учит чистой архитектуре с максимальным терпением.",
    uz: "Dasturlashni yangi boshlovchilar uchun oson va tushunarli qilishga intiladi. Ilgari yirik taqsimlangan tizimlar va veb-ilovalarni yaratgan. STARTUM da talabalarni qadam-baqadam yo‘naltirib, toza arxitekturani o‘rgatadi.",
  },
  photoUrl: "/src/assets/images/instructor_portrait_1791519712269.jpg",
  isPlaceholder: true,
  technologies: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Express.js",
    "MongoDB",
    "Git"
  ],
  stats: {
    studentsMentored: "450+",
    completedProjects: "95+",
    rating: "4.9 / 5.0"
  }
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    studentName: "[Student Name Placeholder]",
    courseTaken: {
      en: "Frontend Development Track",
      ru: "Направление Frontend Development",
      uz: "Frontend Development yo‘nalishi",
    },
    quote: {
      en: "Before joining STARTUM, coding tutorials felt disconnected and overwhelming. The structured step-by-step curriculum and hands-on projects gave me the clarity I needed to build full web applications with confidence.",
      ru: "До STARTUM видеоуроки казались разрозненными и сложными. Структурированная программа и постоянная практика дали мне чёткое понимание того, как создавать полноценные приложения с уверенностью.",
      uz: "STARTUM ga kelishdan oldin dasturlash videolari juda murakkab tuyulardi. Aniq tuzilgan o‘quv rejasi va doimiy amaliyot menga to‘laqonli veb-ilovalarni ishonch bilan yaratish imkonini berdi.",
    },
    outcome: {
      en: "Built 5 complete portfolio projects and learned React & Next.js ecosystem",
      ru: "Создал 5 полноценных проектов в портфолио и освоил стек React и Next.js",
      uz: "5 ta to‘liq portfolio loyihasi yaratdi hamda React va Next.js ni o‘rgandi",
    },
    isPlaceholder: true,
    avatarSeed: "Alex"
  },
  {
    id: "test-2",
    studentName: "[Student Name Placeholder]",
    courseTaken: {
      en: "Foundation Coding Track",
      ru: "Направление Foundation Coding",
      uz: "Foundation Coding yo‘nalishi",
    },
    quote: {
      en: "Starting with zero background in IT, the mentors explained HTML, CSS, and JavaScript in simple, intuitive terms. Creating my first functional web app from scratch was an incredible feeling.",
      ru: "Начиная с абсолютного нуля в IT, я получил простые и понятные объяснения HTML, CSS и JavaScript. Создать свой первый работающий сайт с нуля — это невероятное ощущение.",
      uz: "IT sohasida mutlaqo tajribam bo‘lmasa ham, ustozlar HTML, CSS va JavaScript ni juda sodda tilda tushuntirib berishdi. O‘z qo‘llarim bilan birinchi saytimni yaratish ajoyib hissiyot berdi.",
    },
    outcome: {
      en: "Transitioned from complete beginner to building responsive interactive web interfaces",
      ru: "Прошёл путь от новичка до создания адаптивных интерактивных интерфейсов",
      uz: "Boshlovchilikdan interaktiv va moslashuvchan veb-saytlar yaratish darajasiga yetdi",
    },
    isPlaceholder: true,
    avatarSeed: "Elena"
  },
  {
    id: "test-3",
    studentName: "[Student Name Placeholder]",
    courseTaken: {
      en: "Backend Development Track",
      ru: "Направление Backend Development",
      uz: "Backend Development yo‘nalishi",
    },
    quote: {
      en: "Understanding how databases, servers, and APIs communicate transformed how I view software. The practical exercises using Express and MongoDB felt like working in an authentic software engineering team.",
      ru: "Понимание того, как взаимодействуют базы данных, серверы и API, полностью изменило мой взгляд на разработку. Практика на Express и MongoDB была максимально приближена к реальной работе.",
      uz: "Ma’lumotlar bazalari, serverlar va API larning o‘zaro ishlashini tushunish dasturlashga bo‘lgan qarashimni o‘zgartirdi. Express va MongoDB dagi amaliyotlar haqiqiy IT jamoasida ishlashdek bo‘ldi.",
    },
    outcome: {
      en: "Designed and deployed 3 full RESTful APIs with secure authentication",
      ru: "Спроектировал и развернул 3 полноценных REST API с безопасной авторизацией",
      uz: "Xavfsiz avtorizatsiyaga ega 3 ta to‘laqonli REST API loyihasini yaratdi va serverga joyladi",
    },
    isPlaceholder: true,
    avatarSeed: "Marcus"
  },
  {
    id: "test-4",
    studentName: "[Student Name Placeholder]",
    courseTaken: {
      en: "Computer Literacy Track",
      ru: "Направление Компьютерная грамотность",
      uz: "Kompyuter savodxonligi yo‘nalishi",
    },
    quote: {
      en: "I used to feel intimidated by computers and complicated software. This course helped me master file systems, cloud storage, and office tools. I now complete work tasks three times faster without anxiety.",
      ru: "Раньше компьютеры вызывали у меня стресс. Этот курс помог освоить файлы, облачные хранилища и офисные программы. Теперь я выполняю рабочие задачи втрое быстрее и без страха.",
      uz: "Ilgari kompyuterda ishlashdan qo‘rqardim. Ushbu kurs fayllar tizimi, bulutli xotiralar va ofis dasturlarini o‘rganishga yordam berdi. Endi ish vazifalarimni ancha tez va oson bajaryapman.",
    },
    outcome: {
      en: "Gained total digital confidence in everyday computer and office software usage",
      ru: "Обрела полную цифровую уверенность при ежедневной работе на компьютере",
      uz: "Kundalik kompyuter va ofis dasturlaridan foydalanishda to‘liq ishonchga erishdi",
    },
    isPlaceholder: true,
    avatarSeed: "Sofia"
  }
];
