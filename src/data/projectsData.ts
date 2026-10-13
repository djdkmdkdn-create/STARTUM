export interface ProjectItem {
  id: string;
  title: string;
  description: {
    en: string;
    ru: string;
    uz: string;
  };
  category: "Web Game" | "Websites" | "Web Applications" | "Student Projects";
  technologies: string[];
  image: string;
  projectUrl?: string;
  creatorType: "Team Project" | "Student Project";
  featured: boolean;
}

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: "project-1",
    title: "Chess House",
    description: {
      en: "Chess House is an online chess game developed using HTML, CSS, and JavaScript. It allows users to play chess directly in a web browser.",
      ru: "Chess House — это онлайн-шахматы, созданные с использованием HTML, CSS и JavaScript. Игра позволяет играть в шахматы прямо в браузере.",
      uz: "Chess House — HTML, CSS va JavaScript yordamida yaratilgan onlayn shaxmat o‘yini. O‘yin brauzer orqali shaxmat o‘ynash imkonini beradi.",
    },
    category: "Web Applications",
    technologies: ["HTML", "CSS", "JS"],
    image: "/Screenshot 2026-10-10 142303.png",
    projectUrl: "https://chess-house.netlify.app/",
    creatorType: "Team Project",
    featured: true,
  },
  {
    id: "project-2",
    title: "My Doctor",
    description: {
      en: "An online healthcare platform that allows users to find doctors, explore their profiles, and book medical appointments online.",
      ru: "Онлайн-платформа для записи к врачу: поиск специалистов, просмотр их профилей и удобное бронирование медицинских приёмов.",
      uz: "Shifokorlarni topish, ularning profillari bilan tanishish va onlayn tarzda qabulga yozilish imkonini beruvchi tibbiy platforma.",
    },
    category: "Web Applications",
    technologies: ["Vue", "Nuxt.js", "Pinia", "MongoDB"],
    image: "/Screenshot 2026-10-13 135345.png",
    projectUrl: "https://my-doctor-1.netlify.app/",
    creatorType: "Team Project",
    featured: true,
  },
  {
    id: "project-3",
    title: "Classic Tic Tac Toe",
    description: {
      en: "A classic Tic-Tac-Toe game where two players take turns placing Xs and Os on a 3×3 grid, aiming to get three marks in a row.",
      ru: "Классическая игра «Крестики-нолики», в которой два игрока по очереди ставят крестики и нолики на поле 3×3, стремясь собрать три символа в ряд.",
      uz: "Ikki o‘yinchi 3×3 maydonda navbatma-navbat X va O belgilarini qo‘yib, bir qatorda uchta belgini joylashtirishga intiladigan klassik X-O o‘yini.",
    },
    category: "Student Projects",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/Screenshot 2026-10-13 135858.png",
    projectUrl: "https://e-tic-tac-toe.netlify.app/",
    creatorType: "Student Project",
    featured: false,
  },
  {
    id: "project-4",
    title: "None Snake Game",
    description: {
      en: "A classic Snake game where players control a growing snake, collect food, and avoid collisions to achieve the highest possible score.",
      ru: "Классическая игра «Змейка», в которой игрок управляет растущей змейкой, собирает еду и избегает столкновений, чтобы набрать максимальное количество очков.",
      uz: "O‘yinchi ilonni boshqarib, ozuqa yig‘adigan va to‘qnashuvlardan qochib, imkon qadar yuqori ball to‘plashga intiladigan klassik Snake o‘yini.",
    },
    category: "Web Game",
    technologies: ["React", "Next.js", "Tailwind"],
    image: "/snake-game-icon-svg-download-png-625208.png",
    projectUrl: "https://e-snake-game.netlify.app/",
    creatorType: "Student Project",
    featured: false,
  },
  {
    id: "project-5",
    title: "TaskFlow Collaborative Board",
    description: {
      en: "A Kanban task management system built with drag-and-drop workflow columns, local data persistence, and tags filtering.",
      ru: "Система управления задачами в стиле Kanban с перетаскиванием карточек, сохранением состояния и мгновенным поиском по тегам.",
      uz: "Kanban uslubidagi vazifalar boshqaruvi: kartochkalarni surish (drag-and-drop), lokal saqlash va teglar bo‘yicha tezkor qidiruv.",
    },
    category: "Web Applications",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS"],
    image: "/src/assets/images/project_fintrack_1791521602855.jpg",
    projectUrl: "https://example.com/demo/taskflow-kanban",
    creatorType: "Student Project",
    featured: false,
  },
  {
    id: "project-6",
    title: "DevForge Portfolio Generator",
    description: {
      en: "An upcoming developer utility allowing junior programmers to generate high-performance markdown-driven portfolio sites with instant previews.",
      ru: "Готовящийся к релизу инструмент для начинающих разработчиков для быстрой сборки портфолио из Markdown-файлов с предпросмотром.",
      uz: "Boshlovchi dasturchilar uchun tezkor Markdown asosida zamonaviy portfolio saytlarni yaratishga mo‘ljallangan yangi vosita.",
    },
    category: "Websites",
    technologies: ["Next.js", "Markdown", "Tailwind CSS"],
    image: "/src/assets/images/project_mydoctor_1791521589026.jpg",
    // projectUrl intentionally omitted to showcase disabled "Coming Soon" / "Скоро появится" / "Tez orada" functionality
    projectUrl: undefined,
    creatorType: "Team Project",
    featured: false,
  },
];
