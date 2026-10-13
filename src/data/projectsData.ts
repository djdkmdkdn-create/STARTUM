export interface ProjectItem {
  id: string;
  title: string;
  description: {
    en: string;
    ru: string;
    uz: string;
  };
  category: 'Websites' | 'Web Applications' | 'Student Projects';
  technologies: string[];
  image: string;
  projectUrl?: string;
  creatorType: 'Team Project' | 'Student Project';
  featured: boolean;
}

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: "project-1",
    title: "Chess House",
    description: {
      en: "Chess House is an online chess game developed using HTML, CSS, and JavaScript. It allows users to play chess directly in a web browser.",
      ru: "Chess House — это онлайн-шахматы, созданные с использованием HTML, CSS и JavaScript. Игра позволяет играть в шахматы прямо в браузере.",
      uz: "Chess House — HTML, CSS va JavaScript yordamida yaratilgan onlayn shaxmat o‘yini. O‘yin brauzer orqali shaxmat o‘ynash imkonini beradi."
    },
    category: "Web Applications",
    technologies: ['HTML',"CSS","JS"],
    image: "/Screenshot 2026-10-10 142303.png",
    projectUrl: "https://chess-house.netlify.app/",
    creatorType: "Team Project",
    featured: true
  },
  {
    id: "project-2",
    title: "",
    description: {
      en: "A real-time financial telemetry dashboard with interactive SVG sparklines, currency transaction stream feeds, and multi-currency portfolio analytics.",
      ru: "Интерактивная панель финансовой аналитики в реальном времени с графиками транзакций, валютными потоками и мониторингом портфеля.",
      uz: "Real vaqt rejimida ishlovchi moliya analitikasi paneli: interaktiv grafiklar, valyuta oqimlari va investitsiya portfeli monitoringi."
    },
    category: "Web Applications",
    technologies: ["React 19", "Next.js", "Chart.js", "Node.js"],
    image: "/src/assets/images/project_fintrack_1791521602855.jpg",
    projectUrl: "https://my-doctor-1.netlify.app/",
    creatorType: "Team Project",
    featured: true
  },
  {
    id: "project-3",
    title: "Learnify LMS Platform",
    description: {
      en: "An interactive educational platform designed for programming academies with embedded code sandboxes, task progress tracking, and student badges.",
      ru: "Образовательная платформа для IT-академий со встроенным редактором кода, отслеживанием прогресса домашних заданий и системой достижений.",
      uz: "IT-akademiyalar uchun mo‘ljallangan ta’lim platformasi: kod muharriri, vazifalar monitoringi va o‘quvchilar yutuqlari tizimi."
    },
    category: "Student Projects",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/src/assets/images/project_eduportal_1791521617034.jpg",
    projectUrl: "https://example.com/demo/learnify-lms",
    creatorType: "Student Project",
    featured: false
  },
  {
    id: "project-4",
    title: "Artisans Ceramics Studio",
    description: {
      en: "A minimalist, responsive e-commerce showcase website crafted for an artisanal ceramic workshop with cart state and smooth micro-interactions.",
      ru: "Минималистичный интернет-магазин авторской керамики с адаптивной вёрсткой, фильтрацией товаров и плавной анимацией взаимодействия.",
      uz: "Mualliflik kulolchilik buyumlari uchun yaratilgan minimalist veb-sayt: mahsulotlar katalogi, xarid savatchasi va qulay moslashuvchan dizayn."
    },
    category: "Websites",
    technologies: ["HTML5", "CSS Grid", "JavaScript", "Responsive Design"],
    image: "/src/assets/images/about_classroom_1791519701387.jpg",
    projectUrl: "https://example.com/demo/artisans-studio",
    creatorType: "Student Project",
    featured: false
  },
  {
    id: "project-5",
    title: "TaskFlow Collaborative Board",
    description: {
      en: "A Kanban task management system built with drag-and-drop workflow columns, local data persistence, and tags filtering.",
      ru: "Система управления задачами в стиле Kanban с перетаскиванием карточек, сохранением состояния и мгновенным поиском по тегам.",
      uz: "Kanban uslubidagi vazifalar boshqaruvi: kartochkalarni surish (drag-and-drop), lokal saqlash va teglar bo‘yicha tezkor qidiruv."
    },
    category: "Web Applications",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS"],
    image: "/src/assets/images/project_fintrack_1791521602855.jpg",
    projectUrl: "https://example.com/demo/taskflow-kanban",
    creatorType: "Student Project",
    featured: false
  },
  {
    id: "project-6",
    title: "DevForge Portfolio Generator",
    description: {
      en: "An upcoming developer utility allowing junior programmers to generate high-performance markdown-driven portfolio sites with instant previews.",
      ru: "Готовящийся к релизу инструмент для начинающих разработчиков для быстрой сборки портфолио из Markdown-файлов с предпросмотром.",
      uz: "Boshlovchi dasturchilar uchun tezkor Markdown asosida zamonaviy portfolio saytlarni yaratishga mo‘ljallangan yangi vosita."
    },
    category: "Websites",
    technologies: ["Next.js", "Markdown", "Tailwind CSS"],
    image: "/src/assets/images/project_mydoctor_1791521589026.jpg",
    // projectUrl intentionally omitted to showcase disabled "Coming Soon" / "Скоро появится" / "Tez orada" functionality
    projectUrl: undefined,
    creatorType: "Team Project",
    featured: false
  }
];
