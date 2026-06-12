// Single source of truth for all CV content.
// Edit text here — never in the components/pages.
// Keep README.md in sync with the English locale when facts change.

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  school: string;
  field: string;
  year: string;
}

export interface SkillGroup {
  label: string;
  items: string[]; // each rendered on its own line
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface ContactLabels {
  email: string;
  phone: string;
  telegram: string;
  github: string;
  linkedin: string;
}

export interface SectionLabels {
  skills: string;
  experience: string;
  languages: string;
  education: string;
  openTo: string;
  contact: string;
}

export interface LocalizedCV {
  name: string;
  role: string;
  headlineDetail: string;
  location: string;
  availability: string;
  summary: string;
  labels: SectionLabels;
  contactLabels: ContactLabels;
  skills: SkillGroup[];
  experience: ExperienceItem[];
  openTo: string[];
  languages: LanguageItem[];
  education: EducationItem[];
}

export interface Contact {
  email: string;
  phone: string;
  telegram: string; // without leading @
  github: string; // full URL
  linkedin: string; // full URL
}

export interface Meta {
  title: string;
  description: string;
}

export interface CV {
  contact: Contact;
  meta: { en: Meta; ru: Meta };
  locales: { en: LocalizedCV; ru: LocalizedCV };
}

export const cv: CV = {
  contact: {
    email: 'atomaltera@gmail.com',
    phone: '+995 593 52-73-10',
    telegram: 'ak_altera',
    github: 'https://github.com/atomAltera',
    linkedin: 'https://www.linkedin.com/in/konstantin-alikhanov-22769a4b',
  },

  meta: {
    en: {
      title: 'Konstantin Alikhanov — Senior Full-stack / Product Engineer',
      description:
        'Konstantin Alikhanov — Senior Full-stack / Product Engineer in Tbilisi, remote preferred. 14 years of experience: Go, backend architecture, high-load systems.',
    },
    ru: {
      title: 'Константин Алиханов — Senior Full-stack / Product Engineer',
      description:
        'Константин Алиханов — Senior Full-stack / Product Engineer, Тбилиси, удалённо. 14 лет опыта: Go, бэкенд-архитектура, высоконагруженные системы.',
    },
  },

  locales: {
    en: {
      name: 'Konstantin Alikhanov',
      role: 'Senior Full-stack / Product Engineer',
      headlineDetail: 'Go · Backend Architecture · End-to-End Delivery',
      location: 'Tbilisi, Georgia',
      availability: 'Remote preferred',
      summary:
        'Full-stack engineer with 14 years of experience, mostly in small teams where I owned the product end to end — from a retail POS system to a B2B SaaS that was later acquired. Main stack: Go, TypeScript, MongoDB. Comfortable with high-load backends, legacy code, and production debugging.',
      labels: {
        skills: 'Skills',
        experience: 'Experience',
        languages: 'Languages',
        education: 'Education',
        openTo: 'Open to',
        contact: 'Contact',
      },
      contactLabels: {
        email: 'Email',
        phone: 'Phone',
        telegram: 'Telegram',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
      skills: [
        {
          label: 'Stack',
          items: [
            'Go, TypeScript, JavaScript, Python',
            'React, Node.js, Django',
            'PostgreSQL, MongoDB, ClickHouse, Elasticsearch, Redis',
            'Kafka, NATS, Docker, Kubernetes, CI/CD',
          ],
        },
        {
          label: 'Focus areas',
          items: [
            'High-load backends, event pipelines, production debugging',
            'AI tools in everyday engineering work',
          ],
        },
      ],
      experience: [
        {
          company: 'Banyan AI',
          role: 'Co-Founder & CTO',
          period: 'Jul 2025 — Apr 2026',
          bullets: [
            'Built an AI automation product for small businesses: backend services, LLM-based workflows, integrations with business tools.',
            'Ran the technical side — architecture, infrastructure, deployment — and wrote most of the code.',
          ],
        },
        {
          company: 'Pulserio AG · LeadRebel',
          role: 'Lead Software Engineer',
          period: 'May 2020 — Apr 2025',
          bullets: [
            'Built LeadRebel, a B2B lead-generation SaaS, from scratch and led its development for five years; later acquired by Leadinfo.',
            'Covered the whole stack: tracking script, event pipeline, search, analytics, admin tools, integrations, deployment.',
            'The event pipeline handled up to 1M events/minute and ~100k tracked visitors a day.',
          ],
        },
        {
          company: 'App3null GmbH',
          role: 'Web Developer',
          period: 'Oct 2016 — May 2020',
          bullets: [
            'Developed the web part of an order-management platform for a Volkswagen contractor that grew into a multi-company SaaS.',
            'Owned the core business logic: order upload, dispatching, search, status tracking, contractor workflows.',
          ],
        },
        {
          company: 'Business Software Consulting',
          role: '.NET Developer',
          period: 'Dec 2011 — Sep 2016',
          bullets: [
            'Built a POS system for retail and restaurants, from requirements to rollout and support.',
            'Worked on ERP and integration tools for clients including SOLO / Bank of Georgia and Tegeta Motors.',
          ],
        },
      ],
      openTo: [
        'Senior Full-stack / Backend / Product Engineer',
        'Founding engineer',
        'Remote · B2B or full-time',
      ],
      languages: [
        { name: 'Russian', level: 'Native' },
        { name: 'Georgian', level: 'Fluent' },
        { name: 'English', level: 'C1' },
      ],
      education: [
        {
          school: 'Georgian Technical University',
          field: 'Programming',
          year: '2014',
        },
      ],
    },

    ru: {
      name: 'Константин Алиханов',
      role: 'Senior Full-stack / Product Engineer',
      headlineDetail: 'Go · Бэкенд-архитектура · Продукт целиком',
      location: 'Тбилиси, Грузия',
      availability: 'Предпочтительно удалённо',
      summary:
        'Фулстек-инженер с 14-летним опытом, в основном в небольших командах, где отвечал за продукт целиком — от кассовой системы для розницы до B2B SaaS, который позже купили. Основной стек: Go, TypeScript, MongoDB. Уверенно работаю с высокими нагрузками, легаси и отладкой в продакшене.',
      labels: {
        skills: 'Навыки',
        experience: 'Опыт работы',
        languages: 'Языки',
        education: 'Образование',
        openTo: 'Рассматриваю',
        contact: 'Контакты',
      },
      contactLabels: {
        email: 'Почта',
        phone: 'Телефон',
        telegram: 'Telegram',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
      skills: [
        {
          label: 'Стек',
          items: [
            'Go, TypeScript, JavaScript, Python',
            'React, Node.js, Django',
            'PostgreSQL, MongoDB, ClickHouse, Elasticsearch, Redis',
            'Kafka, NATS, Docker, Kubernetes, CI/CD',
          ],
        },
        {
          label: 'Специализация',
          items: [
            'Высоконагруженные бэкенды, пайплайны событий, отладка в продакшене',
            'AI-инструменты в ежедневной работе',
          ],
        },
      ],
      experience: [
        {
          company: 'Banyan AI',
          role: 'Co-Founder & CTO',
          period: 'Июль 2025 — Апрель 2026',
          bullets: [
            'Делал продукт AI-автоматизации для малого бизнеса: бэкенд-сервисы, сценарии на основе LLM, интеграции с бизнес-инструментами.',
            'Отвечал за техническую сторону — архитектуру, инфраструктуру, деплой — и писал большую часть кода.',
          ],
        },
        {
          company: 'Pulserio AG · LeadRebel',
          role: 'Lead Software Engineer',
          period: 'Май 2020 — Апрель 2025',
          bullets: [
            'Построил LeadRebel, B2B SaaS для генерации лидов, с нуля и пять лет руководил его разработкой; позже продукт купила Leadinfo.',
            'Закрывал весь стек: скрипт трекинга, пайплайн событий, поиск, аналитику, админку, интеграции, деплой.',
            'Пайплайн событий держал до 1 млн событий в минуту и ~100 тыс. посетителей в день.',
          ],
        },
        {
          company: 'App3null GmbH',
          role: 'Web-разработчик',
          period: 'Октябрь 2016 — Май 2020',
          bullets: [
            'Разрабатывал веб-часть платформы управления заказами для подрядчика Volkswagen, которая выросла в SaaS для нескольких компаний.',
            'Отвечал за основную бизнес-логику: загрузку заказов, распределение, поиск, статусы, работу подрядчиков.',
          ],
        },
        {
          company: 'Business Software Consulting',
          role: '.NET-разработчик',
          period: 'Декабрь 2011 — Сентябрь 2016',
          bullets: [
            'Построил POS-систему для розницы и ресторанов — от требований до внедрения и поддержки.',
            'Разрабатывал ERP и интеграционные инструменты для клиентов, среди которых SOLO / Bank of Georgia и Tegeta Motors.',
          ],
        },
      ],
      openTo: [
        'Senior Full-stack / Backend / Product Engineer',
        'Founding engineer',
        'Удалённо · B2B или штат',
      ],
      languages: [
        { name: 'Русский', level: 'Родной' },
        { name: 'Грузинский', level: 'Свободно' },
        { name: 'Английский', level: 'C1' },
      ],
      education: [
        {
          school: 'Грузинский технический университет',
          field: 'Программирование',
          year: '2014',
        },
      ],
    },
  },
};
