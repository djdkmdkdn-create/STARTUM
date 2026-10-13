export type Language = 'en' | 'ru' | 'uz';

export interface Translations {
  nav: {
    home: string;
    courses: string;
    projects: string;
    about: string;
    why: string;
    contact: string;
    enrollNow: string;
    editInfo: string;
  };
  hero: {
    trustLabel: string;
    headlineLine1: string;
    startsWithCode: string;
    description: string;
    exploreCourses: string;
    joinCommunity: string;
    practicalLearning: string;
    modernTechnologies: string;
    realProjects: string;
    workspaceFile: string;
    run: string;
    running: string;
    copied: string;
    consoleTitle: string;
    consoleActive: string;
    badgeTitle: string;
    badgeDesc: string;
  };
  stats: {
    disclaimer: string;
    customizeBtn: string;
    studentsLabel: string;
    studentsSub: string;
    coursesLabel: string;
    coursesSub: string;
    projectsLabel: string;
    projectsSub: string;
    practicalLabel: string;
    practicalSub: string;
  };
  courses: {
    badge: string;
    heading: string;
    description: string;
    filterAll: string;
    filterBeginner: string;
    filterAdvanced: string;
    techLabel: string;
    durationPrefix: string;
    learnMore: string;
    enroll: string;
  };
  courseModal: {
    level: string;
    duration: string;
    toolsLearned: string;
    syllabus: string;
    outcomesTitle: string;
    note: string;
    close: string;
    enrollAction: string;
  };
  projects: {
    badge: string;
    heading: string;
    description: string;
    filterAll: string;
    filterWebsites: string;
    filterWebApps: string;
    filterStudent: string;
    featuredBadge: string;
    teamProject: string;
    studentProject: string;
    viewProject: string;
    comingSoon: string;
    emptyTitle: string;
    emptyDesc: string;
    resetFilter: string;
  };
  why: {
    badge: string;
    heading: string;
    description: string;
    cards: {
      title: string;
      desc: string;
      bullet: string;
      metric: string;
    }[];
  };
  roadmap: {
    badge: string;
    heading: string;
    description: string;
    stepPrefix: string;
    disclaimerTitle: string;
    disclaimerText: string;
    steps: {
      title: string;
      tagline: string;
      desc: string;
      skills: string[];
    }[];
  };
  about: {
    badge: string;
    heading: string;
    description: string;
    values: {
      title: string;
      desc: string;
    }[];
    classroomBadge: string;
    classroomTitle: string;
    classroomDetail: string;
  };
  instructor: {
    badge: string;
    heading: string;
    description: string;
    placeholderNote: string;
    editProfile: string;
    cancelEdit: string;
    saveProfile: string;
    formTitle: string;
    fullNameLabel: string;
    roleLabel: string;
    expLabel: string;
    photoLabel: string;
    bioLabel: string;
    cancel: string;
    facultyTag: string;
    techTaught: string;
    commitment1: string;
    commitment2: string;
  };
  testimonials: {
    badge: string;
    heading: string;
    placeholderNote: string;
    placeholderTag: string;
    verifiedGraduate: string;
    outcomePrefix: string;
  };
  contact: {
    badge: string;
    heading: string;
    description: string;
    demoNoticeTitle: string;
    demoNoticeText: string;
    fullName: string;
    phoneNumber: string;
    courseInterest: string;
    contactMethod: string;
    optionalMessage: string;
    messagePlaceholder: string;
    submitApplication: string;
    validating: string;
    errors: {
      nameRequired: string;
      nameMin: string;
      phoneRequired: string;
      phoneInvalid: string;
      courseRequired: string;
    };
    success: {
      title: string;
      description: string;
      applicant: string;
      contact: string;
      course: string;
      note: string;
      timestamp: string;
      submitAnother: string;
      connectBackend: string;
      hideBackend: string;
      copyCode: string;
      copied: string;
    };
    info: {
      badge: string;
      title: string;
      subtitle: string;
      phoneLabel: string;
      telegramLabel: string;
      instagramLabel: string;
      locationLabel: string;
      hoursLabel: string;
      consultationTitle: string;
      consultationDesc: string;
      consultationBtn: string;
    };
  };
  faq: {
    badge: string;
    heading: string;
    description: string;
    unansweredTitle: string;
    unansweredDesc: string;
    askAdmissions: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  footer: {
    schoolDesc: string;
    customizerLink: string;
    navTitle: string;
    programsTitle: string;
    contactTitle: string;
    allRightsReserved: string;
    tagline1: string;
    tagline2: string;
  };
  communityModal: {
    title: string;
    description: string;
    telegramTitle: string;
    instagramTitle: string;
    workshopsTitle: string;
    workshopsTime: string;
    workshopsDesc: string;
    close: string;
  };
  configDrawer: {
    title: string;
    subtitle: string;
    statsGroup: string;
    students: string;
    courses: string;
    projects: string;
    practical: string;
    contactGroup: string;
    phone: string;
    telegram: string;
    instagram: string;
    address: string;
    hours: string;
    exportJson: string;
    copiedJson: string;
    applyChanges: string;
    footerNote: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      courses: "Courses",
      projects: "Projects",
      about: "About Us",
      why: "Why STARTUM",
      contact: "Contact",
      enrollNow: "Enroll Now",
      editInfo: "Edit Info",
    },
    hero: {
      trustLabel: "YOUR JOURNEY INTO THE WORLD OF IT BEGINS HERE",
      headlineLine1: "YOUR FUTURE",
      startsWithCode: "STARTS WITH CODE.",
      description: "Turn your curiosity into real-world skills. Learn programming, build amazing projects, and take your first steps toward a career in technology with STARTUM IT SCHOOL.",
      exploreCourses: "Explore Courses",
      joinCommunity: "Join Our Community",
      practicalLearning: "Practical Learning",
      modernTechnologies: "Modern Technologies",
      realProjects: "Real Projects",
      workspaceFile: "startum-workspace.ts",
      run: "Run",
      running: "Running...",
      copied: "Copied!",
      consoleTitle: "STARTUM Interactive Console",
      consoleActive: "Node v20.x · Active",
      badgeTitle: "100% Practical Focus",
      badgeDesc: "Build portfolio from Day 1",
    },
    stats: {
      disclaimer: "Statistics are customizable placeholder values for STARTUM IT SCHOOL.",
      customizeBtn: "Customize Stat Values",
      studentsLabel: "Students Enrolled",
      studentsSub: "Placeholder value · Ready for real metrics",
      coursesLabel: "Core Courses",
      coursesSub: "Foundation to Full-Stack tracks",
      projectsLabel: "Projects Created",
      projectsSub: "Portfolios & production web apps",
      practicalLabel: "Practical Learning",
      practicalSub: "Coding drills & lab practice",
    },
    courses: {
      badge: "Curriculum & Programs",
      heading: "CHOOSE YOUR PATH IN TECH",
      description: "Start from the fundamentals or explore modern development technologies. Find the learning path that matches your ambitions.",
      filterAll: "All 4 Programs",
      filterBeginner: "Beginner Friendly",
      filterAdvanced: "Advanced / Full-Stack",
      techLabel: "Technologies & Tools",
      durationPrefix: "Duration:",
      learnMore: "Learn More",
      enroll: "Enroll",
    },
    courseModal: {
      level: "Level",
      duration: "Duration",
      toolsLearned: "Technologies & Tools Learned",
      syllabus: "Curriculum Syllabus",
      outcomesTitle: "By the end of this course, you will be able to:",
      note: "Small group batches · Hands-on mentorship",
      close: "Close",
      enrollAction: "Enroll in This Track",
    },
    projects: {
      badge: "Showcase & Portfolio",
      heading: "BUILT BY US. INSPIRED BY IDEAS.",
      description: "Explore real projects created by our team and students. Every project represents an idea, a learning experience, and a step forward in development.",
      filterAll: "All",
      filterWebsites: "Websites",
      filterWebApps: "Web Applications",
      filterStudent: "Student Projects",
      featuredBadge: "Featured",
      teamProject: "Team Project",
      studentProject: "Student Project",
      viewProject: "View Project",
      comingSoon: "Coming Soon",
      emptyTitle: "No projects in this category",
      emptyDesc: "Check back soon as new student and team projects are added.",
      resetFilter: "Show All Projects",
    },
    why: {
      badge: "Our Educational Philosophy",
      heading: "MORE THAN JUST CODING",
      description: "We bridge the gap between theoretical knowledge and real software creation through immersion, mentorship, and disciplined practice.",
      cards: [
        {
          title: "Learn by Building",
          desc: "Focus on practical exercises, real coding challenges, and projects rather than theory alone. Every concept is tested through immediate application.",
          bullet: "No endless passive video watching",
          metric: "Over 90% hands-on code labs",
        },
        {
          title: "Modern Technologies",
          desc: "Explore tools and frameworks used in contemporary web development. Learn Vite, React, Node.js, and modern ecosystems as utilized by leading software teams.",
          bullet: "Constantly refreshed curriculum",
          metric: "Modern tooling from Day 1",
        },
        {
          title: "Supportive Learning Environment",
          desc: "Learn step by step, ask questions, and receive guidance throughout your learning journey. Mentors provide patient feedback on every pull request.",
          bullet: "Structured 1-on-1 code reviews",
          metric: "Active community & mentor help",
        },
        {
          title: "Build Your Portfolio",
          desc: "Work on projects that help demonstrate your skills and track your progress. Graduate with verified GitHub repositories that speak for your abilities.",
          bullet: "Showcase-ready web applications",
          metric: "Deploy live projects to the web",
        },
      ],
    },
    roadmap: {
      badge: "Suggested Progression",
      heading: "THE LEARNING ROADMAP",
      description: "Follow a proven step-by-step trajectory from your first line of code to building production-ready applications.",
      stepPrefix: "Step 0",
      disclaimerTitle: "Educational Journey Notice:",
      disclaimerText: "This roadmap represents a recommended learning trajectory structured for skill acquisition and steady progress, not an automated or guaranteed employment timeline. Mastery depends on individual commitment, practice drills, and project execution.",
      steps: [
        {
          title: "Discover",
          tagline: "Understand computer fundamentals and the web",
          desc: "Demystify how hardware, operating systems, networks, and browsers interact. Establish comfort with terminal commands, files, and internet architecture.",
          skills: ["Operating Systems", "Terminal / CLI", "Web Architecture", "Version Control Concepts"],
        },
        {
          title: "Learn the Basics",
          tagline: "Master HTML, CSS, and JavaScript",
          desc: "Form the core foundation of all web development. Write clean semantic markup, create responsive layouts with CSS Grid/Flexbox, and add logic with JavaScript.",
          skills: ["Semantic HTML5", "Responsive CSS3", "JavaScript ES6+", "DOM Manipulation"],
        },
        {
          title: "Build Projects",
          tagline: "Turn your knowledge into practical applications",
          desc: "Bridge theory into execution by building complete multi-page websites and interactive tools. Learn to debug errors and use Git workflows.",
          skills: ["Project Architecture", "Git & GitHub", "Responsive Debugging", "Third-party APIs"],
        },
        {
          title: "Explore Frameworks",
          tagline: "Learn React, Vue, Next.js, or Nuxt",
          desc: "Adopt modern industry frameworks for dynamic, single-page and server-rendered web applications with state management and reusable components.",
          skills: ["React 19 / Vue 3", "Next.js App Router", "Redux / Pinia", "Component Design"],
        },
        {
          title: "Grow as a Developer",
          tagline: "Improve your skills and build a portfolio",
          desc: "Refine your personal software engineering portfolio, optimize performance, participate in mock interviews, and contribute to collaborative repositories.",
          skills: ["Production Deployment", "Code Optimization", "Portfolio Polish", "Tech Interview Prep"],
        },
      ],
    },
    about: {
      badge: "About the School",
      heading: "WE HELP TURN CURIOSITY INTO SKILLS",
      description: "STARTUM IT SCHOOL is a place where students explore technology, develop practical skills, and learn how to transform ideas into digital projects. Our goal is to make IT education engaging, accessible, and relevant to the modern world.",
      values: [
        {
          title: "Learn with Purpose",
          desc: "Every lesson ties directly to solving real programming problems and creating digital utility.",
        },
        {
          title: "Create with Confidence",
          desc: "Gain the courage to build, test, refactor, and deploy software without fear of making mistakes.",
        },
        {
          title: "Keep Moving Forward",
          desc: "Embrace continuous curiosity and progressive improvement as the tech industry constantly evolves.",
        },
      ],
      classroomBadge: "Modern IT Academy Space",
      classroomTitle: "Collaborative labs designed for hands-on software development",
      classroomDetail: "Dedicated hardware, fast dev environments, and interactive peer programming.",
    },
    instructor: {
      badge: "Mentorship & Faculty",
      heading: "LEARN WITH GUIDANCE",
      description: "Direct mentorship from passionate developers who guide you step-by-step through every programming milestone.",
      placeholderNote: "Editable Instructor Profile Placeholder · Ready for real school faculty details",
      editProfile: "Edit Profile",
      cancelEdit: "Cancel Edit",
      saveProfile: "Save Profile Details",
      formTitle: "Update Instructor Information",
      fullNameLabel: "Instructor Full Name",
      roleLabel: "Role / Title",
      expLabel: "Experience Summary",
      photoLabel: "Photo Image URL",
      bioLabel: "Short Biography",
      cancel: "Cancel",
      facultyTag: "Editable Faculty",
      techTaught: "Technologies Taught",
      commitment1: "Live code reviews on every task",
      commitment2: "Patient, beginner-friendly support",
    },
    testimonials: {
      badge: "Community & Reviews",
      heading: "WHAT OUR STUDENTS SAY",
      placeholderNote: "Clearly Marked Placeholder Carousel · Real student feedback will replace these slots upon official survey release",
      placeholderTag: "Placeholder",
      verifiedGraduate: "Verified Graduate Candidate",
      outcomePrefix: "Outcome:",
    },
    contact: {
      badge: "Start Your Journey",
      heading: "READY TO START YOUR JOURNEY?",
      description: "Take the first step toward learning new skills and building your future in technology.",
      demoNoticeTitle: "Demonstration Enrollment Flow: ",
      demoNoticeText: "This form demonstrates live client-side validation and workflow handling without transmitting private data to an unconfigured external server.",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      courseInterest: "Course of Interest",
      contactMethod: "Preferred Contact Method",
      optionalMessage: "Optional Message / Questions",
      messagePlaceholder: "Tell us about your learning goals or scheduling preferences...",
      submitApplication: "Submit Application",
      validating: "Validating Application...",
      errors: {
        nameRequired: "Full Name is required",
        nameMin: "Please enter a valid full name (at least 2 letters)",
        phoneRequired: "Phone number is required",
        phoneInvalid: "Please enter a valid phone number (digits, +, or -)",
        courseRequired: "Please select a course of interest",
      },
      success: {
        title: "Application Demo Verified!",
        description: "Thank you for your interest. In a live production deployment, this inquiry is instantly dispatched to the STARTUM admissions team via Telegram or CRM webhook.",
        applicant: "Applicant:",
        contact: "Contact:",
        course: "Course:",
        note: "Note:",
        timestamp: "Timestamp:",
        submitAnother: "Submit Another Inquiry",
        connectBackend: "Connect Real Backend",
        hideBackend: "Hide Backend Guide",
        copyCode: "Copy Code",
        copied: "Copied!",
      },
      info: {
        badge: "Direct Inquiries",
        title: "Contact Information",
        subtitle: "Editable placeholder contact details for STARTUM IT SCHOOL.",
        phoneLabel: "Direct Phone",
        telegramLabel: "Telegram Channel & Bot",
        instagramLabel: "Instagram Community",
        locationLabel: "Campus Location",
        hoursLabel: "Working Hours",
        consultationTitle: "Need Help Selecting Your Track?",
        consultationDesc: "Our education counselors offer free 15-minute consultations to review your background and recommend the best starting course.",
        consultationBtn: "Chat with an Advisor on Telegram",
      },
    },
    faq: {
      badge: "Frequently Asked Questions",
      heading: "ANSWERS TO YOUR QUESTIONS",
      description: "Everything you need to know about starting your IT learning journey with STARTUM.",
      unansweredTitle: "Have another question not answered here?",
      unansweredDesc: "Reach out directly to our admissions team for immediate assistance.",
      askAdmissions: "Ask Admissions",
      items: [
        {
          q: "Do I need prior programming experience?",
          a: "No prior experience is necessary for our Foundation and Computer Literacy courses! We start from the very beginning, explaining concepts with plain language, real-world analogies, and hands-on practice. For intermediate courses like Frontend or Backend Development, basic familiarity with HTML, CSS, and fundamental JavaScript logic is recommended.",
        },
        {
          q: "Which course should I choose as a beginner?",
          a: "If you have never coded before but want to create websites and software, we recommend the 'Foundation — Start Your Coding Journey' course. If you want to gain confidence with general computer operations, operating systems, office applications, and digital security first, our 'Computer Literacy' course is the ideal stepping stone.",
        },
        {
          q: "What technologies will I learn?",
          a: "Depending on your selected track, you will learn industry-standard tools including HTML5, CSS3, modern JavaScript (ESNext), Vite, React 19, Next.js, Redux, Vue.js, Nuxt, Node.js, Express.js, MongoDB, Git version control, and GitHub workflows. All syllabi are continually updated to reflect modern tech industry practices.",
        },
        {
          q: "Will I work on practical projects?",
          a: "Yes, absolutely! At STARTUM IT SCHOOL, over 90% of our curriculum is centered on active building. You will not just watch lecture slides; you will write code every day, resolve real coding challenges, and graduate with a personal portfolio of functional web applications to show friends, colleagues, and employers.",
        },
        {
          q: "How can I enroll in STARTUM IT SCHOOL?",
          a: "You can submit an application directly using the enrollment form on this website, or contact us through Telegram or telephone. Our admissions team will get in touch with you within 24 hours to schedule an introductory consultation, discuss your goals, and help you select the optimal learning format.",
        },
        {
          q: "How can I find out about course prices and schedules?",
          a: "Course schedules (morning, evening, and weekend batches) and tuition plans vary depending on group format (in-person vs. online) and promotional offers. Please submit an enrollment inquiry or reach out to our staff via Telegram or phone, and we will immediately provide our comprehensive schedule and pricing brochure.",
        },
      ],
    },
    footer: {
      schoolDesc: "An education center empowering students with programming, frontend, backend development, and computer literacy skills through structured, hands-on learning.",
      customizerLink: "Customize Site Data",
      navTitle: "Navigation",
      programsTitle: "Programs",
      contactTitle: "School Contact",
      allRightsReserved: "All rights reserved.",
      tagline1: "Modern IT Education",
      tagline2: "Your future starts with code",
    },
    communityModal: {
      title: "STARTUM Coding Community",
      description: "Connect with fellow students, alumni, and instructors. Get help with code errors, share weekend projects, and stay updated on free workshops.",
      telegramTitle: "Telegram Discussion Group",
      instagramTitle: "Instagram Media & Updates",
      workshopsTitle: "Weekly Open Coding Labs",
      workshopsTime: "Saturdays 3:00 PM – 5:00 PM (In-Person & Online Stream)",
      workshopsDesc: "Free open session for beginners to ask code questions and review fundamentals.",
      close: "Close",
    },
    configDrawer: {
      title: "School Placeholders Editor",
      subtitle: "Live customize stats & contact details",
      statsGroup: "Statistics Counters",
      students: "Students Count",
      courses: "Courses Count",
      projects: "Projects Count",
      practical: "Practical %",
      contactGroup: "Contact Information",
      phone: "Phone Number",
      telegram: "Telegram Channel / Link",
      instagram: "Instagram Account",
      address: "School Address",
      hours: "Working Hours",
      exportJson: "Export JSON",
      copiedJson: "Copied JSON",
      applyChanges: "Apply Real-Time Changes",
      footerNote: "STARTUM IT SCHOOL · Ready for official school details",
    },
  },

  ru: {
    nav: {
      home: "Главная",
      courses: "Курсы",
      projects: "Проекты",
      about: "О нас",
      why: "Почему STARTUM",
      contact: "Контакты",
      enrollNow: "Записаться",
      editInfo: "Настройки",
    },
    hero: {
      trustLabel: "ВАШ ПУТЬ В МИР IT НАЧИНАЕТСЯ ЗДЕСЬ",
      headlineLine1: "ВАШЕ БУДУЩЕЕ",
      startsWithCode: "НАЧИНАЕТСЯ С КОДА.",
      description: "Превратите любознательность в востребованные практические навыки. Изучайте программирование, создавайте реальные проекты и сделайте первый уверенный шаг к карьере в технологиях вместе с STARTUM IT SCHOOL.",
      exploreCourses: "Смотреть курсы",
      joinCommunity: "Наше сообщество",
      practicalLearning: "Практическое обучение",
      modernTechnologies: "Современный стек",
      realProjects: "Реальные проекты",
      workspaceFile: "startum-workspace.ts",
      run: "Запуск",
      running: "Компиляция...",
      copied: "Скопировано!",
      consoleTitle: "Интерактивная консоль STARTUM",
      consoleActive: "Node v20.x · Активно",
      badgeTitle: "100% Практический фокус",
      badgeDesc: "Портфолио с первых дней",
    },
    stats: {
      disclaimer: "Статистика является настраиваемыми шаблонами для STARTUM IT SCHOOL.",
      customizeBtn: "Изменить показатели",
      studentsLabel: "Студентов обучено",
      studentsSub: "Шаблонное значение · Готово к реальным данным",
      coursesLabel: "Ключевых направлений",
      coursesSub: "От базового уровня до Full-Stack",
      projectsLabel: "Созданных проектов",
      projectsSub: "Портфолио и веб-приложения",
      practicalLabel: "Практических занятий",
      practicalSub: "Лабораторные и практический код",
    },
    courses: {
      badge: "Программы обучения",
      heading: "ВЫБЕРИТЕ СВОЙ ПУТЬ В IT",
      description: "Начните с фундаментальных основ или освойте современные технологии разработки. Найдите направление, соответствующее вашим целям.",
      filterAll: "Все 4 направления",
      filterBeginner: "Для новичков",
      filterAdvanced: "Продвинутый / Full-Stack",
      techLabel: "Технологии и инструменты",
      durationPrefix: "Длительность:",
      learnMore: "Подробнее",
      enroll: "Записаться",
    },
    courseModal: {
      level: "Уровень",
      duration: "Срок",
      toolsLearned: "Изучаемые технологии и инструменты",
      syllabus: "Программа курса",
      outcomesTitle: "По окончании курса вы сможете:",
      note: "Мини-группы · Персональное менторство",
      close: "Закрыть",
      enrollAction: "Записаться на курс",
    },
    projects: {
      badge: "Галерея и портфолио",
      heading: "СОЗДАНО НАМИ. ВДОХНОВЛЕНО ИДЕЯМИ.",
      description: "Познакомьтесь с реальными проектами, созданными нашей командой и учениками. За каждым проектом стоят идея, опыт и шаг вперёд в разработке.",
      filterAll: "Все",
      filterWebsites: "Сайты",
      filterWebApps: "Веб-приложения",
      filterStudent: "Проекты студентов",
      featuredBadge: "Избранное",
      teamProject: "Проект команды",
      studentProject: "Проект студента",
      viewProject: "Смотреть проект",
      comingSoon: "Скоро появится",
      emptyTitle: "В этой категории пока нет проектов",
      emptyDesc: "Загляните позже — скоро здесь появятся новые работы студентов и команды.",
      resetFilter: "Показать все проекты",
    },
    why: {
      badge: "Философия школы",
      heading: "БОЛЬШЕ, ЧЕМ ПРОСТО КОД",
      description: "Мы стираем границу между сухой теорией и реальной разработкой через глубокое погружение, менторскую поддержку и ежедневную практику.",
      cards: [
        {
          title: "Обучение через практику",
          desc: "Фокус на практических задачах, алгоритмических разминках и реальных проектах. Каждая концепция сразу закрепляется написанием кода.",
          bullet: "Никаких бесконечных пассивных видео",
          metric: "Более 90% времени — практика",
        },
        {
          title: "Актуальные технологии",
          desc: "Освоение инструментов, востребованных в современной разработке: Vite, React, Node.js и экосистемы, применяемые в ведущих IT-компаниях.",
          bullet: "Постоянно обновляемая программа",
          metric: "Современный инструментарий с 1-го дня",
        },
        {
          title: "Поддерживающая среда",
          desc: "Пошаговое обучение без спешки, подробные ответы на вопросы и поддержка менторов на каждом этапе создания проектов.",
          bullet: "Разбор кода и обратная связь 1-на-1",
          metric: "Активное сообщество и помощь наставника",
        },
        {
          title: "Создание портфолио",
          desc: "Работа над проектами, наглядно демонстрирующими ваши умения. Выпускники получают готовые репозитории на GitHub для презентации работодателям.",
          bullet: "Готовые к показу веб-приложения",
          metric: "Публикация реальных сайтов в сети",
        },
      ],
    },
    roadmap: {
      badge: "Пошаговый план",
      heading: "ДОРОЖНАЯ КАРТА ОБУЧЕНИЯ",
      description: "Проверенный маршрут от первой строчки кода до уверенного создания полноценных современных приложений.",
      stepPrefix: "Шаг 0",
      disclaimerTitle: "Примечание об учебной траектории:",
      disclaimerText: "Данная дорожная карта представляет собой рекомендуемый маршрут последовательного освоения навыков, а не автоматическую гарантию трудоустройства. Скорость прогресса зависит от личной вовлечённости и усердия в практике.",
      steps: [
        {
          title: "Открытие",
          tagline: "Базовые принципы работы компьютеров и сети",
          desc: "Понимание работы операционных систем, терминала, локальных сетей и браузеров. Уверенное владение командной строкой и файлами.",
          skills: ["Операционные системы", "Терминал / CLI", "Архитектура веба", "Основы контроля версий"],
        },
        {
          title: "Основы веба",
          tagline: "Освоение HTML, CSS и чистого JavaScript",
          desc: "Фундамент веб-разработки: семантическая вёрстка, адаптивный дизайн с Flexbox и Grid, логика и обработка событий на JavaScript.",
          skills: ["Семантический HTML5", "Адаптивный CSS3", "JavaScript ES6+", "Манипуляции с DOM"],
        },
        {
          title: "Создание проектов",
          tagline: "Превращение знаний в работающие веб-сайты",
          desc: "Переход к самостоятельной разработке: многостраничные адаптивные сайты, поиск и устранение багов, работа с Git и ветками.",
          skills: ["Архитектура проекта", "Git и GitHub", "Отладка кода", "Взаимодействие с API"],
        },
        {
          title: "Фреймворки",
          tagline: "Изучение React, Vue, Next.js или Nuxt",
          desc: "Изучение современных библиотек и фреймворков для создания интерактивных интерфейсов, управление состоянием и работа с сервером.",
          skills: ["React 19 / Vue 3", "Next.js App Router", "Redux / Pinia", "Компонентный подход"],
        },
        {
          title: "Рост разработчика",
          tagline: "Улучшение навыков и формирование портфолио",
          desc: "Полировка портфолио, оптимизация скорости загрузки, подготовка к техническим собеседованиям и командная разработка.",
          skills: ["Деплой на сервер", "Оптимизация кода", "Презентация портфолио", "Подготовка к интервью"],
        },
      ],
    },
    about: {
      badge: "О школе",
      heading: "МЫ ПРЕВРАЩАЕМ ИНТЕРЕС В НАВЫКИ",
      description: "STARTUM IT SCHOOL — это пространство, где студенты погружаются в технологии, осваивают прикладные навыки и учатся воплощать идеи в цифровые продукты. Наша цель — сделать IT-образование доступным, увлекательным и актуальным для современного мира.",
      values: [
        {
          title: "Обучение со смыслом",
          desc: "Каждый урок непосредственно связан с решением реальных задач программирования.",
        },
        {
          title: "Уверенность в творчестве",
          desc: "Смелость разрабатывать, тестировать и улучшать код без страха перед ошибками.",
        },
        {
          title: "Движение вперёд",
          desc: "Непрерывное развитие и любопытство в стремительно меняющемся мире технологий.",
        },
      ],
      classroomBadge: "Современное учебное пространство",
      classroomTitle: "Оборудованные лаборатории для практической разработки",
      classroomDetail: "Современное " + "железо" + ", быстрое окружение и совместный парный кодинг.",
    },
    instructor: {
      badge: "Преподавательский состав",
      heading: "ОБУЧЕНИЕ ПОД РУКОВОДСТВОМ",
      description: "Прямое наставничество от опытных разработчиков, которые бережно ведут вас через все сложности программирования.",
      placeholderNote: "Настраиваемый шаблон профиля преподавателя · Готов для добавления реальных данных",
      editProfile: "Изменить данные",
      cancelEdit: "Отмена",
      saveProfile: "Сохранить профиль",
      formTitle: "Обновление информации о наставнике",
      fullNameLabel: "Имя и фамилия преподавателя",
      roleLabel: "Должность / Направление",
      expLabel: "Опыт работы",
      photoLabel: "Ссылка на фото",
      bioLabel: "Краткая биография",
      cancel: "Отмена",
      facultyTag: "Настраиваемый наставник",
      techTaught: "Преподаваемые технологии",
      commitment1: "Индивидуальный разбор кода к каждой задаче",
      commitment2: "Терпеливая поддержка без заумных терминов",
    },
    testimonials: {
      badge: "Отзывы и сообщество",
      heading: "ЧТО ГОВОРЯТ НАШИ СТУДЕНТЫ",
      placeholderNote: "Наглядно обозначенный демонстрационный блок · Реальные отзывы будут добавлены после анкетирования первого потока",
      placeholderTag: "Демо-шаблон",
      verifiedGraduate: "Выпускник курса",
      outcomePrefix: "Результат:",
    },
    contact: {
      badge: "Начните обучение",
      heading: "ГОТОВЫ НАЧАТЬ СВОЙ ПУТЬ?",
      description: "Сделайте первый шаг к освоению новых технологий и созданию своего будущего в IT.",
      demoNoticeTitle: "Демонстрационная форма записи: ",
      demoNoticeText: "Форма показывает клиентскую валидацию и сценарий обработки без отправки персональных данных на ненастроенные серверы.",
      fullName: "Полное имя",
      phoneNumber: "Номер телефона",
      courseInterest: "Интересующий курс",
      contactMethod: "Удобный способ связи",
      optionalMessage: "Дополнительное сообщение / вопросы",
      messagePlaceholder: "Расскажите о ваших целях или пожеланиях по расписанию...",
      submitApplication: "Отправить заявку",
      validating: "Проверка данных...",
      errors: {
        nameRequired: "Пожалуйста, укажите ваше имя",
        nameMin: "Имя должно содержать не менее 2 букв",
        phoneRequired: "Пожалуйста, укажите номер телефона",
        phoneInvalid: "Введите корректный номер телефона (цифры, +, -)",
        courseRequired: "Выберите интересующий курс",
      },
      success: {
        title: "Заявка успешно оформлена (Демо)!",
        description: "Спасибо за обращение. В боевой системе заявка мгновенно поступит администраторам STARTUM через Telegram-бота или CRM.",
        applicant: "Кандидат:",
        contact: "Контакт:",
        course: "Направление:",
        note: "Примечание:",
        timestamp: "Время:",
        submitAnother: "Отправить ещё одну заявку",
        connectBackend: "Подключение бэкенда",
        hideBackend: "Скрыть инструкцию",
        copyCode: "Копировать код",
        copied: "Скопировано!",
      },
      info: {
        badge: "Прямая связь",
        title: "Контактная информация",
        subtitle: "Настраиваемые демонстрационные контакты STARTUM IT SCHOOL.",
        phoneLabel: "Телефон школы",
        telegramLabel: "Telegram-канал и бот",
        instagramLabel: "Instagram школы",
        locationLabel: "Адрес учебного центра",
        hoursLabel: "Часы работы",
        consultationTitle: "Не знаете, с чего начать?",
        consultationDesc: "Наши кураторы проведут бесплатную 15-минутную консультацию и помогут подобрать идеальный курс под ваш уровень.",
        consultationBtn: "Написать куратору в Telegram",
      },
    },
    faq: {
      badge: "Часто задаваемые вопросы",
      heading: "ОТВЕТЫ НА ВАШИ ВОПРОСЫ",
      description: "Всё, что важно знать перед началом обучения в STARTUM IT SCHOOL.",
      unansweredTitle: "Остались вопросы?",
      unansweredDesc: "Свяжитесь с нашей приёмной комиссией для быстрой и подробной консультации.",
      askAdmissions: "Задать вопрос",
      items: [
        {
          q: "Нужен ли начальный опыт программирования?",
          a: "Для курсов 'Foundation' и 'Компьютерная грамотность' опыт не требуется совсем! Мы обучаем с нуля, объясняя всё простым языком на наглядных примерах. Для продолжающих курсов (Frontend или Backend) желательны базовые знания HTML, CSS и начальной логики JavaScript.",
        },
        {
          q: "Какой курс выбрать новичку?",
          a: "Если вы никогда не программировали, но хотите создавать сайты и веб-сервисы, мы рекомендуем курс 'Foundation — Старт в программировании'. Если же нужно сначала уверенно освоить компьютер, офисные программы и безопасность, начните с 'Компьютерной грамотности'.",
        },
        {
          q: "Какие технологии я освою?",
          a: "В зависимости от направления вы изучите HTML5, CSS3, современный JavaScript (ESNext), Vite, React 19, Next.js, Redux, Vue.js, Nuxt, Node.js, Express.js, MongoDB, Git и GitHub. Программы постоянно обновляются под требования IT-рынка.",
        },
        {
          q: "Буду ли я создавать практические проекты?",
          a: "Да, обязательно! В STARTUM более 90% обучения посвящено практике. Вы будете писать код на каждом уроке, решать реальные задачи и выпуститесь с портфолио работающих веб-приложений.",
        },
        {
          q: "Как записаться в STARTUM IT SCHOOL?",
          a: "Заполните форму заявки на сайте или напишите нам в Telegram. Кураторы свяжутся с вами в течение рабочего дня, ответят на все вопросы и помогут выбрать удобную группу.",
        },
        {
          q: "Как узнать стоимость и расписание занятий?",
          a: "Расписание (утренние, вечерние группы и группы выходного дня) и цены зависят от формата (очно или онлайн). Оставьте заявку или напишите в Telegram, и мы сразу вышлем актуальный прайс-лист и график набора.",
        },
      ],
    },
    footer: {
      schoolDesc: "Образовательный центр, обучающий программированию, frontend- и backend-разработке, а также компьютерной грамотности через прикладную практику.",
      customizerLink: "Настройка данных школы",
      navTitle: "Навигация",
      programsTitle: "Курсы",
      contactTitle: "Контакты",
      allRightsReserved: "Все права защищены.",
      tagline1: "Современное IT-образование",
      tagline2: "Ваше будущее начинается с кода",
    },
    communityModal: {
      title: "Сообщество разработчиков STARTUM",
      description: "Общайтесь со студентами, выпускниками и наставниками. Получайте помощь с кодом, делитесь идеями и участвуйте в бесплатных мастер-классах.",
      telegramTitle: "Telegram-чат для общения",
      instagramTitle: "Instagram с новостями и анонсами",
      workshopsTitle: "Еженедельные открытые воркшопы",
      workshopsTime: "Суббота, 15:00 – 17:00 (Очно и онлайн)",
      workshopsDesc: "Бесплатная открытая практика для разбора сложных вопросов и фундаментальных тем.",
      close: "Закрыть",
    },
    configDrawer: {
      title: "Редактор шаблонов школы",
      subtitle: "Настройка показателей и контактов в реальном времени",
      statsGroup: "Счётчики статистики",
      students: "Студентов",
      courses: "Курсов",
      projects: "Проектов",
      practical: "Процент практики",
      contactGroup: "Контактная информация",
      phone: "Номер телефона",
      telegram: "Telegram канал / ссылка",
      instagram: "Аккаунт Instagram",
      address: "Адрес центра",
      hours: "График работы",
      exportJson: "Экспорт JSON",
      copiedJson: "JSON скопирован",
      applyChanges: "Применить изменения",
      footerNote: "STARTUM IT SCHOOL · Готово к внесению официальных реквизитов",
    },
  },

  uz: {
    nav: {
      home: "Bosh sahifa",
      courses: "Kurslar",
      projects: "Loyihalar",
      about: "Biz haqimizda",
      why: "Nega STARTUM",
      contact: "Aloqa",
      enrollNow: "Kursga yozilish",
      editInfo: "Sozlamalar",
    },
    hero: {
      trustLabel: "IT OLAMIGA SAYOHATINGIZ SHU YERDAN BOSHLANADI",
      headlineLine1: "SIZNING KELAJAGINGIZ",
      startsWithCode: "KOD BILAN BOSHLANADI.",
      description: "Qiziqishingizni real IT ko‘nikmalariga aylantiring. Dasturlashni o‘rganing, ajoyib loyihalar yarating va STARTUM IT SCHOOL bilan texnologiya sohasidagi ilk ishonchli qadamingizni tashlang.",
      exploreCourses: "Kurslarni ko‘rish",
      joinCommunity: "Hamjamiyatga qo‘shilish",
      practicalLearning: "Amaliy ta’lim",
      modernTechnologies: "Zamonaviy texnologiyalar",
      realProjects: "Haqiqiy loyihalar",
      workspaceFile: "startum-workspace.ts",
      run: "Ishga tushirish",
      running: "Kompilyatsiya...",
      copied: "Nusxalandi!",
      consoleTitle: "STARTUM Interaktiv Konsoli",
      consoleActive: "Node v20.x · Faol",
      badgeTitle: "100% Amaliy yondashuv",
      badgeDesc: "1-kundan portfolio yaratish",
    },
    stats: {
      disclaimer: "Statistika ko‘rsatkichlari STARTUM IT SCHOOL uchun moslashtiriladigan namunalardir.",
      customizeBtn: "Ko‘rsatkichlarni tahrirlash",
      studentsLabel: "O‘quvchilar soni",
      studentsSub: "Namuna qiymati · Haqiqiy ma’lumotlarga tayyor",
      coursesLabel: "Asosiy kurslar",
      coursesSub: "Boshlang‘ichdan Full-Stack darajasigacha",
      projectsLabel: "Yaratilgan loyihalar",
      projectsSub: "Portfoliolar va veb-ilovalar",
      practicalLabel: "Amaliy mashg‘ulot",
      practicalSub: "Dasturlash laboratoriyalari va mashqlar",
    },
    courses: {
      badge: "Ta’lim yo‘nalishlari",
      heading: "IT SOHASIDAGI YO‘LINGIZNI TANLANG",
      description: "Dasturlash asoslaridan boshlang yoki zamonaviy veb-texnologiyalarni chuqur o‘rganing. Maqsadlaringizga mos yo‘nalishni toping.",
      filterAll: "Barcha 4 kurs",
      filterBeginner: "Boshlovchilar uchun",
      filterAdvanced: "Kengaytirilgan / Full-Stack",
      techLabel: "Texnologiyalar va vositalar",
      durationPrefix: "Davomiyligi:",
      learnMore: "Batafsil",
      enroll: "Yozilish",
    },
    courseModal: {
      level: "Daraja",
      duration: "Davomiyligi",
      toolsLearned: "O‘rganiladigan texnologiyalar",
      syllabus: "Kurs dasturi",
      outcomesTitle: "Kurs yakunida siz quyidagilarni qila olasiz:",
      note: "Kichik guruhlar · Shaxsiy mentorlik",
      close: "Yopish",
      enrollAction: "Ushbu kursga yozilish",
    },
    projects: {
      badge: "Galereya va portfolio",
      heading: "BIZ YARATGAN LOYIHALAR, BIZNING G‘OYALARIMIZ.",
      description: "Jamoamiz va o‘quvchilarimiz yaratgan loyihalar bilan tanishing. Har bir loyiha — yangi g‘oya, tajriba va rivojlanish sari tashlangan qadam.",
      filterAll: "Barchasi",
      filterWebsites: "Veb-saytlar",
      filterWebApps: "Veb-ilovalar",
      filterStudent: "O‘quvchilar loyihalari",
      featuredBadge: "Tanlangan",
      teamProject: "Jamoa loyihasi",
      studentProject: "O‘quvchi loyihasi",
      viewProject: "Loyihani ko‘rish",
      comingSoon: "Tez orada",
      emptyTitle: "Bu toifada hozircha loyihalar yo‘q",
      emptyDesc: "Yaqin orada yangi talabalar va jamoa loyihalari qo‘shiladi.",
      resetFilter: "Barcha loyihalarni ko‘rsatish",
    },
    why: {
      badge: "Bizning falsafamiz",
      heading: "SHUNCHAKI DASTURLASHDAN KO‘PROQ",
      description: "Nazariy bilimlar va amaliy dastur yaratish o‘rtasidagi masofani qisqartiramiz: shaxsiy mentorlik, amaliy mashg‘ulotlar va doimiy qo‘llab-quvvatlash.",
      cards: [
        {
          title: "Amalda o‘rganish",
          desc: "Faqat quruq nazariya emas, balki real dasturlash mashqlari va loyihalar. Har bir mavzu darhol kod yozish orqali mustahkamlanadi.",
          bullet: "Zerikarli passiv videolarsiz",
          metric: "90% dan ortiq amaliy mashqlar",
        },
        {
          title: "Zamonaviy texnologiyalar",
          desc: "Bugungi kunda eng talabgir bo‘lgan vositalar: Vite, React, Node.js va zamonaviy IT-kompaniyalarda qo‘llaniladigan ekotizimlar.",
          bullet: "Muntazam yangilanuvchi dastur",
          metric: "1-kundan zamonaviy vositalar",
        },
        {
          title: "Do‘stona muhit",
          desc: "Bosqichma-bosqich o‘rganish, savollarga batafsil javoblar va har bir vazifada tajribali mentorlarning yo‘l-yo‘riqlari.",
          bullet: "1-ga-1 formatida kod tahlili",
          metric: "Faol hamjamiyat va doimiy yordam",
        },
        {
          title: "Shaxsiy portfolio",
          desc: "O‘z mahoratingizni isbotlovchi loyihalar ustida ishlash. Kurs bitiruvchilari ish beruvchilarga taqdim etish uchun GitHub profillariga ega bo‘ladilar.",
          bullet: "Ishga tayyor veb-ilovalar",
          metric: "Loyihalarni internetda jonli ishga tushirish",
        },
      ],
    },
    roadmap: {
      badge: "O‘quv yo‘nalishi",
      heading: "TA’LIM YO‘L XARITASI",
      description: "Birinchi kod qatoridan tortib, to‘laqonli ishlab chiqarishga tayyor ilovalar yaratishgacha bo‘lgan sinovdan o‘tgan bosqichlar.",
      stepPrefix: "Qadam 0",
      disclaimerTitle: "Ta’lim yo‘nalishi haqida eslatma:",
      disclaimerText: "Ushbu yo‘l xaritasi malaka oshirish va barqaror rivojlanish uchun tavsiya etilgan o‘quv rejasi bo‘lib, avtomatik ish kafolati hisoblanmaydi. Natija har bir talabaning o‘z ustida ishlashiga bog‘liq.",
      steps: [
        {
          title: "Kashfiyot",
          tagline: "Kompyuter va internet asoslarini tushunish",
          desc: "Operatsion tizimlar, tarmoqlar va brauzerlar qanday ishlashini o‘rganish. Terminal buyruqlari va fayllar bilan erkin ishlash ko‘nikmalari.",
          skills: ["Operatsion tizimlar", "Terminal / CLI", "Veb arxitekturasi", "Versiya nazorati asoslari"],
        },
        {
          title: "Asoslarni o‘rganish",
          tagline: "HTML, CSS va JavaScript asoslari",
          desc: "Veb-dasturlashning poydevori: semantik belgilash, Flexbox va Grid orqali moslashuvchan dizayn, JavaScript orqali interaktivlik.",
          skills: ["Semantik HTML5", "Moslashuvchan CSS3", "JavaScript ES6+", "DOM bilan ishlash"],
        },
        {
          title: "Loyihalar yaratish",
          tagline: "Bilimlarni amaliy ilovalarga aylantirish",
          desc: "Mustaqil dasturlash: ko‘p sahifali veb-saytlar, xatolarni tuzatish va Git orqali jamoaviy ishlash tamoyillari.",
          skills: ["Loyiha arxitekturasi", "Git va GitHub", "Kod tahlili", "API bilan integratsiya"],
        },
        {
          title: "Freymvorklar",
          tagline: "React, Vue, Next.js yoki Nuxt o‘rganish",
          desc: "Zamonaviy bir sahifali va serverda render qilinadigan ilovalar, holatni boshqarish va qayta ishlatiluvchi komponentlar.",
          skills: ["React 19 / Vue 3", "Next.js App Router", "Redux / Pinia", "Komponentlar arxitekturasi"],
        },
        {
          title: "Dasturchi sifatida o‘sish",
          tagline: "Ko‘nikmalarni charxlash va portfolio tuzish",
          desc: "Shaxsiy portfolioni mukammallashtirish, tezlikni optimallashtirish, texnik suhbatlarga tayyorgarlik va jamoaviy kod yozish.",
          skills: ["Serverga yuklash", "Kodni optimallash", "Portfolio taqdimoti", "Intervyuga tayyorgarlik"],
        },
      ],
    },
    about: {
      badge: "Maktab haqida",
      heading: "BIZ QIZIQISHNI MAHORATGA AYLANTIRAMIZ",
      description: "STARTUM IT SCHOOL — o‘quvchilar texnologiyalarni o‘rganadigan, amaliy ko‘nikmalarga ega bo‘ladigan va o‘z g‘oyalarini raqamli loyihalarga aylantiradigan ta’lim maskanidir. Maqsadimiz — IT ta’limini qiziqarli, ochiq va zamonaviy talablarga mos qilishdir.",
      values: [
        {
          title: "Maqsad bilan o‘rganish",
          desc: "Har bir dars bevosita real dasturlash muammolarini hal qilishga yo‘naltirilgan.",
        },
        {
          title: "Ishonch bilan yaratish",
          desc: "Xato qilishdan qo‘rqmasdan dastur tuzish, testlash va deploy qilish qobiliyati.",
        },
        {
          title: "Doimiy oldinga intilish",
          desc: "Tez o‘zgaruvchan texnologiyalar dunyosida yangi bilimlarga intilish va o‘sish.",
        },
      ],
      classroomBadge: "Zamonaviy IT ta’lim maskani",
      classroomTitle: "Amaliy dasturiy ta’minot yaratish uchun mo‘ljallangan laboratoriyalar",
      classroomDetail: "Kuchli texnika, tezkor dasturlash muhiti va jamoaviy o‘rganish.",
    },
    instructor: {
      badge: "Mentorlik va ustozlar",
      heading: "USTOZLAR BILAN O‘RGANING",
      description: "Dasturlashdagi har bir qadamingizda sizga yo‘l ko‘rsatadigan tajribali mutaxassislardan to‘g‘ridan-to‘g‘ri ta’lim oling.",
      placeholderNote: "Tahrirlanadigan ustoz profili · Haqiqiy ma’lumotlarni kiritish uchun tayyor",
      editProfile: "Profilni tahrirlash",
      cancelEdit: "Bekor qilish",
      saveProfile: "Saqlash",
      formTitle: "Ustoz ma’lumotlarini yangilash",
      fullNameLabel: "Ustozning to‘liq ismi",
      roleLabel: "Lavozimi / Yo‘nalishi",
      expLabel: "Tajribasi",
      photoLabel: "Rasm manzili (URL)",
      bioLabel: "Qisqacha tarjimai hol",
      cancel: "Bekor qilish",
      facultyTag: "Tahrirlanadigan ustoz",
      techTaught: "O‘qitiladigan texnologiyalar",
      commitment1: "Har bir topshiriq bo‘yicha jonli kod tekshiruvi",
      commitment2: "Boshlovchilar uchun sabrli va tushunarli qo‘llab-quvvatlash",
    },
    testimonials: {
      badge: "Hamjamiyat va fikrlar",
      heading: "TALABALARIMIZ NIMA DEYISHADI",
      placeholderNote: "Namuna sifatida ko‘rsatilgan bo‘lim · Rasmiy so‘rovnomadan so‘ng haqiqiy talabalar fikri bilan almashtiriladi",
      placeholderTag: "Namuna",
      verifiedGraduate: "Kurs bitiruvchisi",
      outcomePrefix: "Natija:",
    },
    contact: {
      badge: "Sayohatingizni boshlang",
      heading: "O‘QISHNI BOSHLASHGA TAYYORMISIZ?",
      description: "Yangi ko‘nikmalarni egallash va texnologiya sohasida kelajagingizni qurish sari birinchi qadamni tashlang.",
      demoNoticeTitle: "Namoyish ariza topshirish shakli: ",
      demoNoticeText: "Ushbu forma shaxsiy ma’lumotlarni tashqi serverga yubormasdan, mijoz tomonidan tekshirish va ish jarayonini namoyish etadi.",
      fullName: "To‘liq ismingiz",
      phoneNumber: "Telefon raqamingiz",
      courseInterest: "Qiziqqan kursingiz",
      contactMethod: "Qulay aloqa usuli",
      optionalMessage: "Qo‘shimcha xabar / Savollaringiz",
      messagePlaceholder: "O‘quv maqsadlaringiz yoki qulay vaqtlaringiz haqida yozing...",
      submitApplication: "Ariza yuborish",
      validating: "Ma’lumotlar tekshirilmoqda...",
      errors: {
        nameRequired: "Iltimos, to‘liq ismingizni kiriting",
        nameMin: "Ism kamida 2 ta harfdan iborat bo‘lishi kerak",
        phoneRequired: "Telefon raqamingizni kiriting",
        phoneInvalid: "To‘g‘ri telefon raqamini kiriting (raqamlar, +, -)",
        courseRequired: "Iltimos, qiziqqan kursingizni tanlang",
      },
      success: {
        title: "Arizangiz qabul qilindi (Demo)!",
        description: "Murojaatingiz uchun rahmat. Jonli tizimda ushbu ma’lumotlar darhol STARTUM qabul bo‘limiga Telegram yoki CRM orqali yetib boradi.",
        applicant: "Nomzod:",
        contact: "Aloqa:",
        course: "Kurs:",
        note: "Qayd:",
        timestamp: "Vaqt:",
        submitAnother: "Yana ariza yuborish",
        connectBackend: "Haqiqiy backend ulash",
        hideBackend: "Ko‘rsatmani yashirish",
        copyCode: "Kodni nusxalash",
        copied: "Nusxalandi!",
      },
      info: {
        badge: "To‘g‘ridan-to‘g‘ri aloqa",
        title: "Bog‘lanish ma’lumotlari",
        subtitle: "STARTUM IT SCHOOL uchun namunaviy aloqa ma’lumotlari.",
        phoneLabel: "Telefon raqam",
        telegramLabel: "Telegram kanal va bot",
        instagramLabel: "Instagram sahifa",
        locationLabel: "O‘quv markazi manzili",
        hoursLabel: "Ish vaqti",
        consultationTitle: "Qaysi kursni tanlashda ikkilanyapsizmi?",
        consultationDesc: "Maslahatchilarimiz 15 daqiqalik bepul maslahat o‘tkazib, sizga mos yo‘nalishni tanlashda yordam berishadi.",
        consultationBtn: "Telegram orqali maslahat olish",
      },
    },
    faq: {
      badge: "Ko‘p beriladigan savollar",
      heading: "SAVOLLARINGIZGA JAVOBLAR",
      description: "STARTUM IT SCHOOL da o‘qishni boshlash haqida bilishingiz kerak bo‘lgan muhim ma’lumotlar.",
      unansweredTitle: "Javob topa olmadingizmi?",
      unansweredDesc: "Tezkor maslahat olish uchun to‘g‘ridan-to‘g‘ri qabul bo‘limimizga murojaat qiling.",
      askAdmissions: "Savol berish",
      items: [
        {
          q: "Oldindan dasturlash tajribasi kerakmi?",
          a: "Foundation va Kompyuter savodxonligi kurslarimiz uchun hech qanday tajriba shart emas! Biz hammasini noldan, oddiy va tushunarli tilda tushuntiramiz. Frontend yoki Backend kurslari uchun esa HTML, CSS va asosiy JavaScript mantiqiy asoslarini bilish tavsiya etiladi.",
        },
        {
          q: "Boshlovchilar qaysi kursni tanlashi kerak?",
          a: "Agar siz ilgari hech qachon kod yozmagan bo‘lsangiz, lekin veb-saytlar yaratishni xohlasangiz, 'Foundation — Dasturlashga start' kursini tavsiya qilamiz. Agar kompyuter va ofis dasturlarida ishonch hosil qilishni istasangiz, 'Kompyuter savodxonligi' dan boshlang.",
        },
        {
          q: "Qanday texnologiyalarni o‘rganaman?",
          a: "Tanlagan yo‘nalishingizga qarab: HTML5, CSS3, zamonaviy JavaScript (ESNext), Vite, React 19, Next.js, Redux, Vue.js, Nuxt, Node.js, Express.js, MongoDB, Git va GitHub vositalarini o‘rganasiz. O‘quv rejalari muntazam yangilanib boradi.",
        },
        {
          q: "Haqiqiy loyihalar ustida ishlaymanmi?",
          a: "Ha, albatta! STARTUM da ta’limning 90% dan ortig‘i amaliyotdan iborat. Har bir darsda kod yozasiz, qiyin masalalarni hal qilasiz va bitirish vaqtida ish beruvchilarga ko‘rsatish uchun shaxsiy portfolioga ega bo‘lasiz.",
        },
        {
          q: "STARTUM IT SCHOOL ga qanday yozilish mumkin?",
          a: "Veb-saytdagi ariza shaklini to‘ldiring yoki Telegram orqali bizga yozing. Administratorlarimiz 24 soat ichida siz bilan bog‘lanib, qulay guruh va vaqtni tanlashga yordam berishadi.",
        },
        {
          q: "Narxlar va dars jadvalini qanday bilish mumkin?",
          a: "Dars jadvallari (ertalabki, kechki va dam olish kunlari guruhlari) hamda to‘lov narxlari ta’lim formatiga qarab farqlanadi. Saytda ariza qoldiring yoki Telegram orqali yozing, biz to‘liq ma’lumotnomani taqdim etamiz.",
        },
      ],
    },
    footer: {
      schoolDesc: "Dasturlash, frontend, backend va kompyuter savodxonligini amaliy mashg‘ulotlar orqali o‘rgatuvchi zamonaviy IT ta’lim markazi.",
      customizerLink: "Ma’lumotlarni sozlash",
      navTitle: "Navigatsiya",
      programsTitle: "Kurslar",
      contactTitle: "Aloqa",
      allRightsReserved: "Barcha huquqlar himoyalangan.",
      tagline1: "Zamonaviy IT Ta’lim",
      tagline2: "Kelajagingiz kod bilan boshlanadi",
    },
    communityModal: {
      title: "STARTUM Dasturchilar Hamjamiyati",
      description: "O‘quvchilar, bitiruvchilar va mentorlar bilan bog‘laning. Kod bo‘yicha yordam oling, hafta oxiri loyihalarini muhokama qiling va bepul mahorat darslarida qatnashing.",
      telegramTitle: "Telegram muhokama guruhi",
      instagramTitle: "Instagram yangiliklar sahifasi",
      workshopsTitle: "Haftalik ochiq amaliy laboratoriyalar",
      workshopsTime: "Shanba kunlari 15:00 – 17:00 (Markazda va onlayn)",
      workshopsDesc: "Boshlovchilar uchun savollarni ko‘rib chiqish va amaliyot o‘tash uchun bepul ochiq dars.",
      close: "Yopish",
    },
    configDrawer: {
      title: "Maktab namunalarini tahrirlash",
      subtitle: "Ko‘rsatkichlar va aloqa ma’lumotlarini real vaqtda yangilang",
      statsGroup: "Statistika hisoblagichlari",
      students: "Talabalar soni",
      courses: "Kurslar soni",
      projects: "Loyihalar soni",
      practical: "Amaliyot foizi",
      contactGroup: "Aloqa ma’lumotlari",
      phone: "Telefon raqami",
      telegram: "Telegram kanal / havola",
      instagram: "Instagram sahifasi",
      address: "Maktab manzili",
      hours: "Ish vaqti",
      exportJson: "JSON eksport qilish",
      copiedJson: "JSON nusxalandi",
      applyChanges: "O‘zgarishlarni qo‘llash",
      footerNote: "STARTUM IT SCHOOL · Rasmiy ma’lumotlarni kiritish uchun tayyor",
    },
  },
};
