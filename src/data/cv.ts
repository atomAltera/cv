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
  description: string; // prose paragraph, not a bullet list
}

export interface EducationItem {
  school: string;
  field: string;
  year: string;
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
  skills: string[]; // prose paragraphs, not lists
  skillBadges: string[]; // concrete tech names, rendered as scannable badges
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

// Concrete technologies, shown as scannable badges. Language-neutral, so the
// same list is reused across all locales — edit here to keep them in sync.
const stack: string[] = [
  'Go',
  'TypeScript',
  'JavaScript',
  'Python',
  'React',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'ClickHouse',
  'Elasticsearch',
  'Redis',
  'Kafka',
  'NATS',
  'Docker',
  'Kubernetes',
  'CI/CD',
];

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
        'Go and TypeScript are my main languages day to day, with the rest of the stack chosen to fit the problem. Most of my work is high-load backends — event pipelines, search, analytics — together with the frontend and the infrastructure to run it.',
        'I am most at home with the kind of debugging that only shows up under real production traffic, and lately AI tools have become a regular part of how I work.',
      ],
      skillBadges: stack,
      experience: [
        {
          company: 'Banyan AI',
          role: 'Co-Founder & CTO',
          from: 'Jul 2025',
          to: 'Apr 2026',
          fromISO: '2025-07',
          toISO: '2026-04',
          description:
            'Co-founded an AI automation product for small businesses and ran the entire technical side — architecture, infrastructure, deployment — writing most of the code myself. The product pulled together backend services, LLM-based workflows, and integrations with the tools small businesses already use.',
        },
        {
          company: 'Pulserio AG · LeadRebel',
          role: 'Lead Software Engineer',
          from: 'May 2020',
          to: 'Apr 2025',
          fromISO: '2020-05',
          toISO: '2025-04',
          description:
            'Built LeadRebel, a B2B lead-generation SaaS, from scratch and led its development for five years, until it was acquired by Leadinfo. I worked across the whole stack — the tracking script, the event pipeline, search, analytics, admin tools, integrations, and deployment — with the pipeline handling up to a million events a minute and around 100,000 tracked visitors a day.',
        },
        {
          company: 'App3null GmbH',
          role: 'Web Developer',
          from: 'Oct 2016',
          to: 'May 2020',
          fromISO: '2016-10',
          toISO: '2020-05',
          description:
            'Developed the web side of an order-management platform for a Volkswagen contractor that eventually grew into a multi-company SaaS. I owned the core business logic — order upload, dispatching, search, status tracking, and the contractor workflows around it.',
        },
        {
          company: 'Business Software Consulting',
          role: '.NET Developer',
          from: 'Dec 2011',
          to: 'Sep 2016',
          fromISO: '2011-12',
          toISO: '2016-09',
          description:
            'Built a point-of-sale system for retail and restaurants end to end, from gathering requirements through rollout and support, and worked on ERP and integration tools for clients such as SOLO / Bank of Georgia and Tegeta Motors.',
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
        'Go и TypeScript — мои основные языки в повседневной работе, остальной стек подбираю под задачу. В основном занимаюсь высоконагруженными бэкендами — пайплайны событий, поиск, аналитика — вместе с фронтендом и инфраструктурой вокруг них.',
        'Увереннее всего чувствую себя с отладкой, которая проявляется только на живом продакшен-трафике, а в последнее время AI-инструменты стали обычной частью моей работы.',
      ],
      skillBadges: stack,
      experience: [
        {
          company: 'Banyan AI',
          role: 'Co-Founder & CTO',
          from: 'Июль 2025',
          to: 'Апрель 2026',
          fromISO: '2025-07',
          toISO: '2026-04',
          description:
            'Стал сооснователем продукта для AI-автоматизации малого бизнеса и вёл всю техническую часть — архитектуру, инфраструктуру, деплой, — написав большую часть кода. Продукт связывал бэкенд-сервисы, сценарии на основе LLM и интеграции с привычными для бизнеса инструментами.',
        },
        {
          company: 'Pulserio AG · LeadRebel',
          role: 'Lead Software Engineer',
          from: 'Май 2020',
          to: 'Апрель 2025',
          fromISO: '2020-05',
          toISO: '2025-04',
          description:
            'С нуля построил LeadRebel — B2B SaaS для генерации лидов — и пять лет вёл его разработку, пока продукт не купила Leadinfo. Закрывал весь стек: скрипт трекинга, пайплайн событий, поиск, аналитику, админку, интеграции и деплой. Пайплайн держал до миллиона событий в минуту и около 100 тысяч отслеживаемых посетителей в день.',
        },
        {
          company: 'App3null GmbH',
          role: 'Web-разработчик',
          from: 'Октябрь 2016',
          to: 'Май 2020',
          fromISO: '2016-10',
          toISO: '2020-05',
          description:
            'Разрабатывал веб-часть платформы управления заказами для подрядчика Volkswagen, которая со временем выросла в SaaS для нескольких компаний. Отвечал за основную бизнес-логику — загрузку заказов, распределение, поиск, отслеживание статусов и рабочие процессы подрядчиков.',
        },
        {
          company: 'Business Software Consulting',
          role: '.NET-разработчик',
          from: 'Декабрь 2011',
          to: 'Сентябрь 2016',
          fromISO: '2011-12',
          toISO: '2016-09',
          description:
            'С нуля сделал POS-систему для розницы и ресторанов — от сбора требований до внедрения и поддержки. Параллельно работал над ERP и интеграционными инструментами для клиентов, среди которых SOLO / Bank of Georgia и Tegeta Motors.',
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
        'Go და TypeScript ჩემი ძირითადი ენებია ყოველდღიურ მუშაობაში, დანარჩენ სტეკს კი ამოცანის მიხედვით ვარჩევ. ძირითადად ვმუშაობ მაღალდატვირთულ ბექენდებზე — ივენთ-პაიპლაინები, ძებნა, ანალიტიკა — ფრონტენდსა და მათ გარშემო არსებულ ინფრასტრუქტურასთან ერთად.',
        'ყველაზე კომფორტულად ვგრძნობ თავს იმ დებაგინგთან, რომელიც მხოლოდ ცოცხალ პროდაქშენ-ტრაფიკზე ვლინდება, ბოლო დროს კი AI-ხელსაწყოები ჩემი მუშაობის ჩვეულებრივ ნაწილად იქცა.',
      ],
      skillBadges: stack,
      experience: [
        {
          company: 'Banyan AI',
          role: 'Co-Founder & CTO',
          from: 'ივლისი 2025',
          to: 'აპრილი 2026',
          fromISO: '2025-07',
          toISO: '2026-04',
          description:
            'თანადამფუძნებელი ვიყავი მცირე ბიზნესისთვის განკუთვნილი AI-ავტომატიზაციის პროდუქტისა და ვხელმძღვანელობდი მთელ ტექნიკურ მხარეს — არქიტექტურა, ინფრასტრუქტურა, დეპლოი — და ვწერდი კოდის დიდ ნაწილს. პროდუქტი აერთიანებდა ბექენდ-სერვისებს, LLM-ზე დაფუძნებულ ვორქფლოუებსა და ინტეგრაციებს ბიზნესის ჩვეულ ხელსაწყოებთან.',
        },
        {
          company: 'Pulserio AG · LeadRebel',
          role: 'Lead Software Engineer',
          from: 'მაისი 2020',
          to: 'აპრილი 2025',
          fromISO: '2020-05',
          toISO: '2025-04',
          description:
            'ნულიდან შევქმენი LeadRebel — B2B SaaS ლიდების გენერაციისთვის — და ხუთი წელი ვხელმძღვანელობდი მის განვითარებას, სანამ პროდუქტს Leadinfo შეიძენდა. ვფარავდი მთელ სტეკს: ტრექინგ-სკრიპტი, ივენთ-პაიპლაინი, ძებნა, ანალიტიკა, ადმინ-ხელსაწყოები, ინტეგრაციები და დეპლოი. პაიპლაინი უმკლავდებოდა წუთში მილიონამდე ივენთს და დღეში დაახლოებით 100 ათას მონახულებას.',
        },
        {
          company: 'App3null GmbH',
          role: 'ვები-დეველოპერი',
          from: 'ოქტომბერი 2016',
          to: 'მაისი 2020',
          fromISO: '2016-10',
          toISO: '2020-05',
          description:
            'ვავითარებდი შეკვეთების მართვის პლატფორმის ვებ-ნაწილს Volkswagen-ის კონტრაქტორისთვის, რომელიც დროთა განმავლობაში მრავალკომპანიან SaaS-ად გადაიზარდა. პასუხისმგებელი ვიყავი ძირითად ბიზნეს-ლოგიკაზე — შეკვეთების ატვირთვა, განაწილება, ძებნა, სტატუსების თვალყურის დევნება და კონტრაქტორების ვორქფლოუები.',
        },
        {
          company: 'Business Software Consulting',
          role: '.NET დეველოპერი',
          from: 'დეკემბერი 2011',
          to: 'სექტემბერი 2016',
          fromISO: '2011-12',
          toISO: '2016-09',
          description:
            'ნულიდან შევქმენი POS-სისტემა საცალო ვაჭრობისა და რესტორნებისთვის — მოთხოვნების შეგროვებიდან დანერგვამდე და მხარდაჭერამდე. პარალელურად ვმუშაობდი ERP-სა და ინტეგრაციის ხელსაწყოებზე კლიენტებისთვის, მათ შორის SOLO / Bank of Georgia და Tegeta Motors.',
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
