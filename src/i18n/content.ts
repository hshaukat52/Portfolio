export type Locale = 'en' | 'fr'

export const profileMeta = {
  name: 'Hammad Shaukat',
  email: 'hshaukat52@gmail.com',
  phone: '+33 670 154 380',
  linkedin: 'https://linkedin.com/in/hammad-shaukat-61223a164',
  github: 'https://github.com/hammadshaukat',
}

type Content = {
  profile: {
    role: string
    location: string
    headline: string
    summary: string
    lede: string
  }
  nav: { href: string; label: string }[]
  navAria: string
  langToggle: string
  hero: {
    ctaPrimary: string
    ctaSecondary: string
  }
  expertise: {
    label: string
    title: string
    lede: string
  }
  skills: { title: string; items: string[] }[]
  experienceSection: {
    label: string
    title: string
    lede: string
  }
  experience: {
    period: string
    role: string
    company: string
    location: string
    points: string[]
  }[]
  projectsSection: {
    label: string
    title: string
    lede: string
  }
  projects: {
    name: string
    tag: string
    description: string
    outcome: string
  }[]
  about: {
    label: string
    title: string
    basedIn: string
    focus: string
    focusValue: string
    educationLabel: string
  }
  education: {
    degree: string
    school: string
    period: string
  }
  principles: { title: string; text: string }[]
  contact: {
    label: string
    title: string
    lede: string
  }
  footer: {
    role: string
  }
}

export const content: Record<Locale, Content> = {
  en: {
    profile: {
      role: 'Full Stack .NET Developer',
      location: 'Douai, France',
      headline:
        'I design and ship production systems that stay fast, clear, and maintainable.',
      summary:
        'Full Stack .NET Developer with 4+ years of experience designing, developing, and maintaining enterprise-level web applications. Proficient across .NET/C#, ASP.NET Core, RESTful APIs, SQL Server, Azure, React, Blazor, and Angular. Experienced in payment and logistics integrations, cloud-native architectures, performance optimization, Agile/Scrum, and CI/CD pipelines.',
      lede: 'Full-stack .NET delivery — APIs, Azure systems, and product UI that hold up in production.',
    },
    nav: [
      { href: '#expertise', label: 'Expertise' },
      { href: '#work', label: 'Work' },
      { href: '#projects', label: 'Projects' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
    navAria: 'Primary',
    langToggle: 'Français',
    hero: {
      ctaPrimary: 'Start a conversation',
      ctaSecondary: 'View selected work',
    },
    expertise: {
      label: 'Expertise',
      title: 'Stack I work in every week',
      lede: 'End-to-end ownership across .NET services, data platforms, and modern frontends — with architecture decisions that stay durable.',
    },
    skills: [
      {
        title: 'Backend & APIs',
        items: [
          '.NET 8 / .NET Core',
          'C#',
          'ASP.NET Core / MVC',
          'RESTful & Minimal APIs',
          'CQRS / Mediator',
          'ADO.NET / WCF',
        ],
      },
      {
        title: 'Frontend',
        items: [
          'Blazor Server',
          'React.js',
          'Angular',
          'JavaScript / jQuery',
          'HTML5 / CSS3',
          'Kendo UI / Telerik',
        ],
      },
      {
        title: 'Cloud & DevOps',
        items: [
          'Microsoft Azure',
          'Docker / Kubernetes',
          'Azure DevOps',
          'Azure Blob Storage',
          'CI/CD',
          'Azure WebJobs',
        ],
      },
      {
        title: 'Data & Integrations',
        items: [
          'SQL Server / T-SQL',
          'Entity Framework',
          'Azure Cosmos DB',
          'Redis/ Rabbit MQ / Kafka',
          'PayPal / BNP Axepta',
          'DPD / GLS / OCR',
        ],
      },
    ],
    experienceSection: {
      label: 'Experience',
      title: 'Roles where delivery mattered',
      lede: 'Enterprise web platforms across e-commerce, healthcare, and insurance — .NET, Azure, and modern frontends.',
    },
    experience: [
      {
        period: 'Apr 2026 — Present',
        role: 'Software Engineer',
        company: 'Beneki',
        location: 'Douai, France',
        points: [
          'Develop and maintain a full-stack e-commerce platform using .NET and RESTful APIs for seamless frontend, backend, and third-party communication.',
          'Integrate payment gateways (PayPal, BNP Axepta) and shipping APIs (DPD, GLS) for automated payment processing, label generation, and tracking.',
          'Manage end-to-end order lifecycle workflows, secure hosted payment pages, callback handling, and cross-platform data consistency.',
        ],
      },
      {
        period: 'May 2025 — Apr 2026',
        role: 'Software Engineer',
        company: 'Devpert',
        location: 'Lahore, Pakistan',
        points: [
          'Designed and built scalable RESTful APIs for a healthcare web application using .NET Core and Angular.',
          'Implemented Azure WebJobs for real-time order processing and integrated OCR to extract data from order documents, reducing manual entry.',
          'Applied AI-based order routing to classify incoming orders and acted as technical mediator between clients and suppliers to refine features.',
        ],
      },
      {
        period: 'Sep 2023 — Apr 2025',
        role: 'Software Engineer',
        company: 'Eworx',
        location: 'Lahore, Pakistan',
        points: [
          'Built a cloud-native insurance platform using .NET 8, C#, Blazor Server, and Minimal APIs on Microsoft Azure.',
          'Implemented Redis distributed caching, boosting API response times by 40%+, and integrated Azure Cosmos DB for fault-tolerant data storage.',
          'Utilized Azure DevOps and Agile/Scrum for CI/CD deployment pipelines, sprint planning, automated testing, and code reviews.',
        ],
      },
      {
        period: 'Feb 2022 — Aug 2023',
        role: 'Associate Software Engineer',
        company: 'Cure Partners',
        location: 'Lahore, Pakistan',
        points: [
          'Delivered scalable web features using ASP.NET MVC, C#, SQL Server, JS, jQuery, and AJAX, cutting input errors by 20%.',
          'Refactored legacy WCF services to ADO.NET, improving response times by 40%, and offloaded media files to Azure Blob Storage.',
        ],
      },
    ],
    projectsSection: {
      label: 'Selected work',
      title: 'Systems shipped under real constraints',
      lede: 'A sample of platforms where reliability, clarity, and measurable outcomes came first.',
    },
    projects: [
      {
        name: 'Beneki',
        tag: '.NET · React · PayPal · BNP Axepta · DPD · GLS',
        description:
          'Full-stack commerce system with RESTful APIs, payment gateway integrations, and DPD/GLS shipping for automated labels and tracking.',
        outcome:
          'End-to-end order lifecycle with secure hosted payments, callbacks, and cross-platform data consistency.',
      },

      {
        name: 'Modohealth',
        tag: '.NET Core · Angular · Azure WebJobs · OCR',
        description:
          'Scalable healthcare APIs with real-time order processing, document OCR, and AI-based routing between clients and suppliers.',
        outcome: 'Reduced manual data entry and improved order classification across the supply chain.',
      },
      {
        name: 'AMS',
        tag: '.NET 8 · Blazor Server · Azure · Redis',
        description:
          'Cloud-native insurance platform on Minimal APIs and Blazor Server, with Cosmos DB and Redis distributed caching.',
        outcome: 'Boosted API response times by 40%+ with CI/CD via Azure DevOps.',
      },
      {
        name: 'ParkEasy',
        tag: '.NET Core · React · SQL',
        description:
          'Parking management platform with .NET Core APIs, a React frontend, and SQL Server for reservations, availability, and billing workflows.',
        outcome: 'Streamlined parking operations with reliable booking and payment flows.',
      },
      {
        name: 'Hartley Medical',
        tag: '.NET Core · Angular · SQL',
        description:
          'Healthcare application built with .NET Core APIs, Angular, and SQL Server for clinical and operational workflows.',
        outcome: 'Delivered a maintainable medical platform with clear data boundaries and responsive UI.',
      },
      {
        name: 'Navetor',
        tag: '.NET 6 MVC · SQL',
        description:
          'Web application on ASP.NET Core MVC (.NET 6) backed by SQL Server for structured business workflows and reporting.',
        outcome: 'Stable MVC delivery with clear controller/service layers and SQL-backed persistence.',
      },
    ],
    about: {
      label: 'About',
      title: 'How I approach the work',
      basedIn: 'Based in',
      focus: 'Focus',
      focusValue: '.NET, Azure & full-stack delivery',
      educationLabel: 'Education',
    },
    education: {
      degree: 'Bachelor of Computer Science',
      school: 'COMSATS University Islamabad, Pakistan',
      period: 'Feb 2018 — Jan 2022',
    },
    principles: [
      {
        title: 'Clarity over cleverness',
        text: 'Code and APIs that other engineers can reason about in a single sitting.',
      },
      {
        title: 'Boundaries that hold',
        text: 'Domain models, contracts, and infrastructure seams that survive changing requirements.',
      },
      {
        title: 'Ship with evidence',
        text: 'Tests, metrics, and traces so production behavior is visible — not guessed.',
      },
    ],
    contact: {
      label: 'Contact',
      title: 'Let’s build something durable',
      lede: 'Based in {location}. Open to full-stack .NET roles and product engineering collaborations.',
    },
    footer: {
      role: 'Full Stack .NET Developer',
    },
  },
  fr: {
    profile: {
      role: 'Développeur Full Stack .NET',
      location: 'Douai, France',
      headline:
        'Je conçois et livre des systèmes de production rapides, clairs et maintenables.',
      summary:
        'Développeur Full Stack .NET avec plus de 4 ans d’expérience dans la conception, le développement et la maintenance d’applications web d’entreprise. Compétent en .NET/C#, ASP.NET Core, API REST, SQL Server, Azure, React, Blazor et Angular. Expérimenté dans les intégrations paiement et logistique, les architectures cloud-native, l’optimisation des performances, Agile/Scrum et les pipelines CI/CD.',
      lede: 'Livraison full-stack .NET — API, systèmes Azure et interfaces produit qui tiennent en production.',
    },
    nav: [
      { href: '#expertise', label: 'Expertise' },
      { href: '#work', label: 'Parcours' },
      { href: '#projects', label: 'Projets' },
      { href: '#about', label: 'À propos' },
      { href: '#contact', label: 'Contact' },
    ],
    navAria: 'Principale',
    langToggle: 'English',
    hero: {
      ctaPrimary: 'Engager la conversation',
      ctaSecondary: 'Voir les projets',
    },
    expertise: {
      label: 'Expertise',
      title: 'La stack que j’utilise au quotidien',
      lede: 'Responsabilité de bout en bout sur les services .NET, les données et les frontends modernes — avec des choix d’architecture durables.',
    },
    skills: [
      {
        title: 'Backend & API',
        items: [
          '.NET 8 / .NET Core',
          'C#',
          'ASP.NET Core / MVC',
          'API REST & Minimal APIs',
          'CQRS / Mediator',
          'ADO.NET / WCF',
        ],
      },
      {
        title: 'Frontend',
        items: [
          'Blazor Server',
          'React.js',
          'Angular',
          'JavaScript / jQuery',
          'HTML5 / CSS3',
          'Kendo UI / Telerik',
        ],
      },
      {
        title: 'Cloud & DevOps',
        items: [
          'Microsoft Azure',
          'Docker / Kubernetes',
          'Azure DevOps',
          'Azure Blob Storage',
          'CI/CD',
          'Azure WebJobs',
        ],
      },
      {
        title: 'Données & intégrations',
        items: [
          'SQL Server / T-SQL',
          'Entity Framework',
          'Azure Cosmos DB',
          'Redis / Rabbit MQ / Kafka',
          'PayPal / BNP Axepta',
          'DPD / GLS / OCR',
        ],
      },
    ],
    experienceSection: {
      label: 'Expérience',
      title: 'Des rôles où la livraison comptait',
      lede: 'Plateformes web d’entreprise — e-commerce, santé et assurance — en .NET, Azure et frontends modernes.',
    },
    experience: [
      {
        period: 'Avr. 2026 — Présent',
        role: 'Ingénieur logiciel',
        company: 'Beneki',
        location: 'Douai, France',
        points: [
          'Développer et maintenir une plateforme e-commerce full-stack en .NET et API REST pour fluidifier le frontend, le backend et les échanges tiers.',
          'Intégrer les passerelles de paiement (PayPal, BNP Axepta) et les API d’expédition (DPD, GLS) pour le paiement automatisé, la génération d’étiquettes et le suivi.',
          'Gérer le cycle de vie des commandes, les pages de paiement hébergées sécurisées, les callbacks et la cohérence des données cross-plateforme.',
        ],
      },
      {
        period: 'Mai 2025 — Avr. 2026',
        role: 'Ingénieur logiciel',
        company: 'Devpert',
        location: 'Lahore, Pakistan',
        points: [
          'Concevoir et construire des API REST scalables pour une application web santé en .NET Core et Angular.',
          'Mettre en place des Azure WebJobs pour le traitement temps réel des commandes et intégrer l’OCR pour extraire les données des documents, réduisant la saisie manuelle.',
          'Appliquer un routage de commandes basé sur l’IA et servir de médiateur technique entre clients et fournisseurs pour affiner les fonctionnalités.',
        ],
      },
      {
        period: 'Sep. 2023 — Avr. 2025',
        role: 'Ingénieur logiciel',
        company: 'Eworx',
        location: 'Lahore, Pakistan',
        points: [
          'Construire une plateforme d’assurance cloud-native avec .NET 8, C#, Blazor Server et Minimal APIs sur Microsoft Azure.',
          'Mettre en place un cache Redis distribué, améliorant les temps de réponse API de plus de 40 %, et intégrer Azure Cosmos DB pour un stockage tolérant aux pannes.',
          'Utiliser Azure DevOps et Agile/Scrum pour les pipelines CI/CD, la planification de sprints, les tests automatisés et les revues de code.',
        ],
      },
      {
        period: 'Fév. 2022 — Août 2023',
        role: 'Ingénieur logiciel associé',
        company: 'Cure Partners',
        location: 'Lahore, Pakistan',
        points: [
          'Livrer des fonctionnalités web scalables avec ASP.NET MVC, C#, SQL Server, JS, jQuery et AJAX, réduisant les erreurs de saisie de 20 %.',
          'Refactoriser des services WCF legacy vers ADO.NET, améliorant les temps de réponse de 40 %, et déporter les médias vers Azure Blob Storage.',
        ],
      },
    ],
    projectsSection: {
      label: 'Travaux sélectionnés',
      title: 'Des systèmes livrés sous contraintes réelles',
      lede: 'Un échantillon de plateformes où fiabilité, clarté et résultats mesurables passaient en premier.',
    },
    projects: [
      {
        name: 'Beneki',
        tag: '.NET · React · PayPal · BNP Axepta · DPD · GLS',
        description:
          'Système e-commerce full-stack avec API REST, intégrations de paiement et expédition DPD/GLS pour étiquettes et suivi automatisés.',
        outcome:
          'Cycle de vie commande de bout en bout avec paiements hébergés sécurisés, callbacks et cohérence des données.',
      },
      {
        name: 'Modohealth',
        tag: '.NET Core · Angular · Azure WebJobs · OCR',
        description:
          'API santé scalables avec traitement temps réel, OCR documentaire et routage IA entre clients et fournisseurs.',
        outcome: 'Moins de saisie manuelle et meilleure classification des commandes dans la chaîne.',
      },
      {
        name: 'AMS',
        tag: '.NET 8 · Blazor Server · Azure · Redis',
        description:
          'Plateforme d’assurance cloud-native sur Minimal APIs et Blazor Server, avec Cosmos DB et cache Redis distribué.',
        outcome: 'Temps de réponse API améliorés de plus de 40 % avec CI/CD via Azure DevOps.',
      },
      {
        name: 'ParkEasy',
        tag: '.NET Core · React · SQL',
        description:
          'Plateforme de gestion de parking avec API .NET Core, frontend React et SQL Server pour réservations, disponibilité et facturation.',
        outcome: 'Opérations de parking fluides avec réservation et paiement fiables.',
      },
      {
        name: 'Hartley Medical',
        tag: '.NET Core · Angular · SQL',
        description:
          'Application santé construite avec API .NET Core, Angular et SQL Server pour les workflows cliniques et opérationnels.',
        outcome: 'Plateforme médicale maintenable avec des frontières de données claires et une UI réactive.',
      },
      {
        name: 'Navetor',
        tag: '.NET 6 MVC · SQL',
        description:
          'Application web ASP.NET Core MVC (.NET 6) adossée à SQL Server pour des workflows métier structurés et le reporting.',
        outcome: 'Livraison MVC stable avec couches controller/service claires et persistance SQL.',
      },
    ],
    about: {
      label: 'À propos',
      title: 'Ma façon d’aborder le travail',
      basedIn: 'Basé à',
      focus: 'Focus',
      focusValue: '.NET, Azure et livraison full-stack',
      educationLabel: 'Formation',
    },
    education: {
      degree: 'Licence en informatique',
      school: 'COMSATS University Islamabad, Pakistan',
      period: 'Fév. 2018 — Jan. 2022',
    },
    principles: [
      {
        title: 'La clarté avant la ruse',
        text: 'Du code et des API qu’un autre ingénieur peut comprendre en une seule lecture.',
      },
      {
        title: 'Des frontières solides',
        text: 'Modèles de domaine, contrats et seams d’infrastructure qui survivent aux changements.',
      },
      {
        title: 'Livrer avec des preuves',
        text: 'Tests, métriques et traces pour que le comportement en production soit visible — pas deviné.',
      },
    ],
    contact: {
      label: 'Contact',
      title: 'Construisons quelque chose de durable',
      lede: 'Basé à {location}. Ouvert aux rôles full-stack .NET et aux collaborations produit.',
    },
    footer: {
      role: 'Développeur Full Stack .NET',
    },
  },
}
