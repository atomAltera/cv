// Single source of truth for all CV content.
// Edit text here — never in the components/pages.
// Keep README.md in sync with the English locale when facts change.

export interface ExperienceItem {
  company: string;
  role: string;
  from: string; // localized display, e.g. "May 2020"
  to: string; // localized display, e.g. "Apr 2025"
  fromISO: string; // machine-readable, e.g. "2020-05"
  toISO: string; // machine-readable, e.g. "2025-04"
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
  meta: { en: Meta; ru: Meta; ka: Meta };
  locales: { en: LocalizedCV; ru: LocalizedCV; ka: LocalizedCV };
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
    ka: {
      title: 'კონსტანტინე ალიხანოვი — Senior Full-stack / Product Engineer',
      description:
        'კონსტანტინე ალიხანოვი — Senior Full-stack / Product Engineer, თბილისი, დისტანციურად. 14 წლის გამოცდილება: Go, ბექენდ-არქიტექტურა, მაღალდატვირთული სისტემები.',
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
          from: 'Jul 2025',
          to: 'Apr 2026',
          fromISO: '2025-07',
          toISO: '2026-04',
          bullets: [
            'Built an AI automation product for small businesses: backend services, LLM-based workflows, integrations with business tools.',
            'Ran the technical side — architecture, infrastructure, deployment — and wrote most of the code.',
          ],
        },
        {
          company: 'Pulserio AG · LeadRebel',
          role: 'Lead Software Engineer',
          from: 'May 2020',
          to: 'Apr 2025',
          fromISO: '2020-05',
          toISO: '2025-04',
          bullets: [
            'Built LeadRebel, a B2B lead-generation SaaS, from scratch and led its development for five years; later acquired by Leadinfo.',
            'Covered the whole stack: tracking script, event pipeline, search, analytics, admin tools, integrations, deployment.',
            'The event pipeline handled up to 1M events/minute and ~100k tracked visitors a day.',
          ],
        },
        {
          company: 'App3null GmbH',
          role: 'Web Developer',
          from: 'Oct 2016',
          to: 'May 2020',
          fromISO: '2016-10',
          toISO: '2020-05',
          bullets: [
            'Developed the web part of an order-management platform for a Volkswagen contractor that grew into a multi-company SaaS.',
            'Owned the core business logic: order upload, dispatching, search, status tracking, contractor workflows.',
          ],
        },
        {
          company: 'Business Software Consulting',
          role: '.NET Developer',
          from: 'Dec 2011',
          to: 'Sep 2016',
          fromISO: '2011-12',
          toISO: '2016-09',
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
          from: 'Июль 2025',
          to: 'Апрель 2026',
          fromISO: '2025-07',
          toISO: '2026-04',
          bullets: [
            'Делал продукт AI-автоматизации для малого бизнеса: бэкенд-сервисы, сценарии на основе LLM, интеграции с бизнес-инструментами.',
            'Отвечал за техническую сторону — архитектуру, инфраструктуру, деплой — и писал большую часть кода.',
          ],
        },
        {
          company: 'Pulserio AG · LeadRebel',
          role: 'Lead Software Engineer',
          from: 'Май 2020',
          to: 'Апрель 2025',
          fromISO: '2020-05',
          toISO: '2025-04',
          bullets: [
            'Построил LeadRebel, B2B SaaS для генерации лидов, с нуля и пять лет руководил его разработкой; позже продукт купила Leadinfo.',
            'Закрывал весь стек: скрипт трекинга, пайплайн событий, поиск, аналитику, админку, интеграции, деплой.',
            'Пайплайн событий держал до 1 млн событий в минуту и ~100 тыс. посетителей в день.',
          ],
        },
        {
          company: 'App3null GmbH',
          role: 'Web-разработчик',
          from: 'Октябрь 2016',
          to: 'Май 2020',
          fromISO: '2016-10',
          toISO: '2020-05',
          bullets: [
            'Разрабатывал веб-часть платформы управления заказами для подрядчика Volkswagen, которая выросла в SaaS для нескольких компаний.',
            'Отвечал за основную бизнес-логику: загрузку заказов, распределение, поиск, статусы, работу подрядчиков.',
          ],
        },
        {
          company: 'Business Software Consulting',
          role: '.NET-разработчик',
          from: 'Декабрь 2011',
          to: 'Сентябрь 2016',
          fromISO: '2011-12',
          toISO: '2016-09',
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

    ka: {
      name: 'კონსტანტინე ალიხანოვი',
      role: 'Senior Full-stack / Product Engineer',
      headlineDetail: 'Go · ბექენდ-არქიტექტურა · სრული პროდუქტი',
      location: 'თბილისი, საქართველო',
      availability: 'სასურველია დისტანციური',
      summary:
        'ფულსტეკ-ინჟინერი 14-წლიანი გამოცდილებით, ძირითადად მცირე გუნდებში, სადაც პროდუქტზე თავიდან ბოლომდე ვიყავი პასუხისმგებელი — საცალო POS-სისტემიდან B2B SaaS-მდე, რომელიც მოგვიანებით შეიძინეს. ძირითადი სტეკი: Go, TypeScript, MongoDB. თავისუფლად ვმუშაობ მაღალ დატვირთვასთან, ლეგასი-კოდთან და პროდაქშენში დებაგინგთან.',
      labels: {
        skills: 'უნარები',
        experience: 'გამოცდილება',
        languages: 'ენები',
        education: 'განათლება',
        openTo: 'განვიხილავ',
        contact: 'კონტაქტი',
      },
      contactLabels: {
        email: 'ელფოსტა',
        phone: 'ტელეფონი',
        telegram: 'Telegram',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
      skills: [
        {
          label: 'სტეკი',
          items: [
            'Go, TypeScript, JavaScript, Python',
            'React, Node.js, Django',
            'PostgreSQL, MongoDB, ClickHouse, Elasticsearch, Redis',
            'Kafka, NATS, Docker, Kubernetes, CI/CD',
          ],
        },
        {
          label: 'ფოკუსი',
          items: [
            'მაღალდატვირთული ბექენდები, ივენთ-პაიპლაინები, დებაგინგი პროდაქშენში',
            'AI-ხელსაწყოები ყოველდღიურ საინჟინრო სამუშაოში',
          ],
        },
      ],
      experience: [
        {
          company: 'Banyan AI',
          role: 'Co-Founder & CTO',
          from: 'ივლისი 2025',
          to: 'აპრილი 2026',
          fromISO: '2025-07',
          toISO: '2026-04',
          bullets: [
            'შევქმენი AI-ავტომატიზაციის პროდუქტი მცირე ბიზნესისთვის: ბექენდ-სერვისები, LLM-ზე დაფუძნებული ვორქფლოუები, ინტეგრაციები ბიზნეს-ხელსაწყოებთან.',
            'ვხელმძღვანელობდი ტექნიკურ მხარეს — არქიტექტურა, ინფრასტრუქტურა, დეპლოი — და ვწერდი კოდის დიდ ნაწილს.',
          ],
        },
        {
          company: 'Pulserio AG · LeadRebel',
          role: 'Lead Software Engineer',
          from: 'მაისი 2020',
          to: 'აპრილი 2025',
          fromISO: '2020-05',
          toISO: '2025-04',
          bullets: [
            'შევქმენი LeadRebel, B2B SaaS ლიდების გენერაციისთვის, ნულიდან და ხუთი წელი ვხელმძღვანელობდი მის განვითარებას; მოგვიანებით პროდუქტი შეიძინა Leadinfo-მ.',
            'ვფარავდი მთელ სტეკს: ტრექინგ-სკრიპტი, ივენთ-პაიპლაინი, ძებნა, ანალიტიკა, ადმინ-ხელსაწყოები, ინტეგრაციები, დეპლოი.',
            'ივენთ-პაიპლაინი უმკლავდებოდა წუთში 1 მლნ-მდე ივენთს და დღეში ~100 ათას მონახულებას.',
          ],
        },
        {
          company: 'App3null GmbH',
          role: 'ვები-დეველოპერი',
          from: 'ოქტომბერი 2016',
          to: 'მაისი 2020',
          fromISO: '2016-10',
          toISO: '2020-05',
          bullets: [
            'ვავითარებდი შეკვეთების მართვის პლატფორმის ვებ-ნაწილს Volkswagen-ის კონტრაქტორისთვის, რომელიც გადაიზარდა მრავალკომპანიან SaaS-ად.',
            'ვპასუხობდი ძირითად ბიზნეს-ლოგიკაზე: შეკვეთების ატვირთვა, განაწილება, ძებნა, სტატუსების თვალყურის დევნება, კონტრაქტორების ვორქფლოუები.',
          ],
        },
        {
          company: 'Business Software Consulting',
          role: '.NET დეველოპერი',
          from: 'დეკემბერი 2011',
          to: 'სექტემბერი 2016',
          fromISO: '2011-12',
          toISO: '2016-09',
          bullets: [
            'შევქმენი POS-სისტემა საცალო ვაჭრობისა და რესტორნებისთვის — მოთხოვნებიდან დანერგვამდე და მხარდაჭერამდე.',
            'ვმუშაობდი ERP-სა და ინტეგრაციის ხელსაწყოებზე კლიენტებისთვის, მათ შორის SOLO / Bank of Georgia და Tegeta Motors.',
          ],
        },
      ],
      openTo: [
        'Senior Full-stack / Backend / Product Engineer',
        'Founding engineer',
        'დისტანციურად · B2B ან შტატში',
      ],
      languages: [
        { name: 'რუსული', level: 'მშობლიური' },
        { name: 'ქართული', level: 'თავისუფლად' },
        { name: 'ინგლისური', level: 'C1' },
      ],
      education: [
        {
          school: 'საქართველოს ტექნიკური უნივერსიტეტი',
          field: 'პროგრამირება',
          year: '2014',
        },
      ],
    },
  },
};
