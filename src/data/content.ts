export const profile = {
  name: 'Hammad Shaukat',
  role: 'Full Stack .NET Developer',
  location: 'Douai, France',
  email: 'hshaukat52@gmail.com',
  phone: '+33 670 154 380',
  linkedin: 'https://linkedin.com/in/hammad-shaukat-61223a164',
  github: 'https://github.com/hammadshaukat',
  headline:
    'I design and ship production systems that stay fast, clear, and maintainable.',
  summary:
    'Full Stack .NET Developer with 4+ years of experience designing, developing, and maintaining enterprise-level web applications. Proficient across .NET/C#, ASP.NET Core, RESTful APIs, SQL Server, Azure, React, Blazor, and Angular. Experienced in payment and logistics integrations, cloud-native architectures, performance optimization, Agile/Scrum, and CI/CD pipelines.',
}

export const skills = [
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
      'DPD / OCR',
    ],
  },
]

export const experience = [
  {
    period: 'Apr 2026 — Present',
    role: 'Software Engineer',
    company: 'Beneki',
    location: 'Douai, France',
    points: [
      'Develop and maintain a full-stack e-commerce platform using .NET and RESTful APIs for seamless frontend, backend, and third-party communication.',
      'Integrate payment gateways (PayPal, BNP Axepta) and DPD shipping APIs for automated payment processing, label generation, and tracking.',
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
]

export const projects = [
  {
    name: 'Beneki',
    tag: '.NET · PayPal · BNP Axepta · DPD',
    description:
      'Full-stack commerce system with RESTful APIs, payment gateway integrations, and DPD shipping for automated labels and tracking.',
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
]

export const education = {
  degree: 'Bachelor of Computer Science',
  school: 'COMSATS University Islamabad, Pakistan',
  period: 'Feb 2018 — Jan 2022',
}

export const principles = [
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
]
