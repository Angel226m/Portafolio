import nayarakEmpleado from './imegens/NayarakEmpleado.png'
import nayarakCliente from './imegens/Nayaraktourrcliente.png'
import nayarakArquitectura from './imegens/ARKITETCURANAYRAKTOUR.png'
import crackGuard1 from './imegens/crackguard.png'
import crackGuard2 from './imegens/crakguard.png'
import crackGuardArquitectura from './imegens/ARKITECTURACRAGUARD.png'
import georiesgoMapa from './imegens/GEORIESGODEZLISAMIETO.png'
import georiesgoHistorico from './imegens/registrohistoricosismo.png'
import georiesgoRiesgo from './imegens/riesgodistrito-irc.png'
import hotelFluxGrafana from './imegens/graphana.png'
import hotelFluxCliente from './imegens/paginacliente.png'
import hotelFluxAdmin from './imegens/paneladmin.png'
import hotelFluxRecepcion from './imegens/panelrecep.png'
import hotelFluxPrometheus from './imegens/Prometehus.png'

export const personal = {
  name: 'Angel Garay Torres',
  role: 'Full-Stack Developer & DevOps',
  subtitle: 'Estudiante de Ingeniería de Sistemas – 9.º ciclo',
  university: 'Universidad Nacional de Cañete',
  location: 'Lima, Perú',
  email: 'angelgarayt22@gmail.com',
  phone: '+51 932 284 763',
  github: 'https://github.com/Angel226m',
  githubHandle: 'Angel226m',
  linkedin: 'https://www.linkedin.com/in/angel-junior-garay-torres-b79891220/',
  available: true,
  availableFor: 'Prácticas preprofesionales / Junior',
  bio: 'Apasionado por el desarrollo full-stack, DevOps, Inteligencia Artificial y soluciones escalables para problemas reales. Experiencia en proyectos con arquitecturas modernas, integración de pagos, CI/CD, IoT y deep learning.',
}

export const skills = {
  frontend: ['React', 'TypeScript', 'Vue 3', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS'],
  backend: ['Go (Golang)', 'Node.js', 'Express', 'Flask', 'Clean Architecture', 'REST APIs'],
  devops: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'Nginx', 'VPS/SSH'],
  databases: ['PostgreSQL', 'Firebase Firestore', 'Redis'],
  security: ['JWT', 'AES-256-GCM', 'bcrypt', 'OWASP', 'ISO 27001', 'TLS/HTTPS'],
  ai_iot: ['Python', 'PyTorch', 'UNet++', 'EfficientNet', 'ConvNeXt', 'Raspberry Pi', 'WebRTC'],
  storage: ['Backblaze B2', 'Firebase Storage'],
  tools: ['Git', 'Linux', 'Postman', 'VS Code'],
}

export const projects = [
  {
    id: 1,
    year: '2025',
    title: 'Sistema de Reservas – Tours Islas Ballestas',
    role: 'Full-Stack Developer & DevOps',
    description:
      'Plataforma web completa con portal público para reserva de tours marítimos y panel administrativo. Incluye pagos online con Mercado Pago, cifrado AES-256-GCM de datos sensibles, backups automáticos a Backblaze B2 y despliegue multi-dominio.',
    highlights: [
      'Frontend: React + TypeScript + Vite + Tailwind CSS (diseño responsive moderno)',
      'Backend: Go (Golang) con Arquitectura Hexagonal + Clean Architecture',
      'Base de datos: PostgreSQL con índices optimizados · Backups automáticos en Backblaze B2 (retención 7 días)',
      'Pagos & Seguridad: Mercado Pago · JWT (HS256) · bcrypt · AES-256-GCM · OWASP · ISO 27001',
      'Infraestructura: Docker + Docker Compose · Nginx (reverse proxy) · CI/CD con GitHub Actions · Deploy en VPS',
      'Testing: Vitest (frontend) + Go test + sqlmock (backend) – cobertura >80%',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Go', 'PostgreSQL', 'Docker', 'Nginx', 'GitHub Actions', 'JWT', 'AES-256-GCM', 'Mercado Pago', 'Backblaze B2'],
    techColors: ['blue', 'blue', 'blue', 'blue', 'purple', 'purple', 'green', 'green', 'green', 'purple', 'purple', 'blue', 'green'],
    images: [nayarakArquitectura, nayarakEmpleado, nayarakCliente],
    links: {
      github: 'https://github.com/Angel226m/devops.git',
      live: 'https://reservas.angelproyect.com/inicio',
      admin: 'https://admin.angelproyect.com',
    },
    tags: ['Web App', 'Full-Stack', 'DevOps', 'Pagos'],
    color: 'cyan',
    featured: true,
  },
  {
    id: 2,
    year: '2025',
    title: 'CrackGuard v6.0 – Detector de Grietas con IA e IoT',
    role: 'Full-Stack Developer, ML Engineer & DevOps',
    description:
      'Sistema avanzado de detección de grietas en estructuras de concreto usando deep learning, IoT y análisis morfológico. Precisión >90%, procesamiento ~2 s/imagen.',
    highlights: [
      'Modelos IA: UNet++ + EfficientNet-B8 + TTA (robustez >95%) · UNet++ + ConvNeXt-Base + CBAM Attention',
      'IoT: Raspberry Pi + cámara Arducam 1080p HDR · Streaming WebRTC (MediaMTX) · Túneles FRP',
      'Backend: Flask API dual-model · Subidas multipart/form-data · Soporte archivos hasta 50 MB',
    ],
    images: [crackGuardArquitectura, crackGuard1, crackGuard2],
    tech: ['Python', 'Flask', 'PyTorch', 'UNet++', 'EfficientNet-B8', 'ConvNeXt', 'React', 'Docker', 'Raspberry Pi', 'WebRTC', 'GitHub Actions'],
    techColors: ['green', 'green', 'purple', 'purple', 'purple', 'purple', 'blue', 'green', 'green', 'blue', 'green'],
    links: {
      github: 'https://github.com/Angel226m/deeplerning.git',
      live: 'https://crackguard.angelproyect.com/',
    },
    tags: ['Deep Learning', 'IoT', 'Computer Vision', 'DevOps'],
    color: 'green',
    featured: true,
  },
  {
    id: 3,
    year: '2024',
    title: 'Agenda Digital para Docentes',
    role: 'Full-Stack Developer',
    description:
      'Aplicación web para gestión completa de horarios, tareas, recordatorios automáticos y calificaciones de docentes universitarios. Sistema de notificaciones por correo para vencimiento de tareas.',
    highlights: [
      'Autenticación segura con Firebase Authentication (Google, email/password)',
      'Base de datos NoSQL en tiempo real con Firebase Firestore',
      'Almacenamiento de archivos en Backblaze B2',
      'Recordatorios automáticos por correo con SendGrid/Resend (SMTP)',
      'Notificaciones in-app para eventos próximos',
    ],
    tech: ['Vue 3', 'Vite', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express', 'Firebase', 'Backblaze B2', 'SendGrid'],
    techColors: ['green', 'green', 'blue', 'blue', 'purple', 'purple', 'blue', 'green', 'blue'],
    links: {
      github: 'https://github.com/Angel226m/CalendarioGaray.git',
    },
    tags: ['Web App', 'Full-Stack', 'Firebase'],
    color: 'purple',
    featured: false,
  },
  {
    id: 4,
    year: '2026',
    title: 'GeoRiesgo Perú – Plataforma Multi-Amenaza con ML y EWS',
    role: 'Desarrollador de Sistemas de Información Geográfica (SIG) · Proyecto universitario final',
    description:
      'Plataforma web geoespacial para el análisis y monitoreo de riesgos naturales en Perú, integrando sismicidad, vulcanismo, inundaciones, deslizamientos, tsunamis, sequías y alertas tempranas en tiempo real.',
    highlights: [
      'Mapas interactivos 2D/3D con MapLibre GL y deck.gl para análisis espacial multi-amenaza',
      'Modelos ML con XGBoost, interpretabilidad con SHAP y optimización de hiperparámetros con Optuna',
      'Backend en Python + FastAPI con PostgreSQL/PostGIS y cache con Redis',
      'Sistema de Alertas Tempranas (EWS) con WebSockets y Server-Sent Events en tiempo real',
      'Integración de más de 15 fuentes oficiales para análisis territorial y gestión del riesgo',
      'Despliegue contenedorizado con Docker, Docker Compose y Nginx',
    ],
    images: [georiesgoMapa, georiesgoHistorico, georiesgoRiesgo],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'MapLibre GL', 'deck.gl', 'Python', 'FastAPI', 'XGBoost', 'SHAP', 'Optuna', 'PostgreSQL', 'PostGIS', 'Redis', 'WebSockets', 'SSE', 'Docker', 'Docker Compose', 'Nginx'],
    techColors: ['blue','blue','blue','blue','green','green','purple','purple','purple','purple','purple','green','green','green','blue','blue','green','green','green'],
    links: {
      github: 'https://github.com/Angel226m/SISTEMAS-DE-INFORMACI-N-geografico',
    },
    tags: ['SIG', 'Machine Learning', 'EWS', 'Full-Stack'],
    color: 'cyan',
    featured: true,
  },
  {
    id: 5,
    year: '2026',
    title: 'HotelFlux – Sistema de Gestión Hotelera Reactivo Funcional',
    role: 'Full-Stack Developer | Proyecto universitario final',
    description:
      'Programación reactiva y funcional. Plataforma web para gestión hotelera con portal de reservas y panel administrativo en tiempo real.',
    highlights: [
      'Frontend: React 19, TypeScript, RxJS, Vite y Tailwind CSS.',
      'Backend: Elixir, Phoenix Framework, WebSockets y Arquitectura Hexagonal.',
      'Base de datos: PostgreSQL con CQRS, Event Sourcing y Soft Delete.',
      'Tiempo real mediante Phoenix Channels, PubSub y Observable Repository Pattern.',
      'Implementación de Saga Pattern, FSM y programación funcional.',
      'Seguridad basada en JWT, RBAC, bcrypt, OWASP Top 10 e ISO 27001.',
      'Infraestructura con Docker, Nginx, Redis, Oban, Prometheus y Grafana.',
      'Testing automatizado con ExUnit y Vitest (>80% cobertura).',
    ],
    images: [hotelFluxCliente, hotelFluxAdmin, hotelFluxRecepcion, hotelFluxGrafana, hotelFluxPrometheus],
    tech: ['React', 'TypeScript', 'RxJS', 'Vite', 'Tailwind CSS', 'Elixir', 'Phoenix Framework', 'PostgreSQL', 'Redis', 'Docker', 'Nginx', 'Oban', 'Prometheus', 'Grafana', 'JWT', 'WebSockets'],
    techColors: ['blue', 'blue', 'purple', 'blue', 'blue', 'purple', 'purple', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'purple', 'blue'],
    links: {
      github: 'https://github.com/Angel226m/progrmacion-reac',
    },
    tags: ['Web App', 'Full-Stack', 'Tiempo Real', 'Arquitectura Reactiva'],
    color: 'cyan',
    featured: true,
  },
]

export const education = [
  {
    period: '2022 – Actualidad',
    degree: 'Ingeniería de Sistemas',
    institution: 'Universidad Nacional de Cañete',
    detail: '8.º ciclo',
    current: true,
  },
  {
    period: '2016 – 2020',
    degree: 'Educación Secundaria Completa',
    institution: 'I.E. John F. Kennedy',
    detail: '',
    current: false,
  },
]

export const softSkills = [
  'Liderazgo',
  'Comunicación asertiva',
  'Resolución de problemas',
  'Trabajo en equipo',
  'Elaboración de reportes',
  'Gestión de activos',
]

export const certifications = [
  {
    id: 5,
    title: 'Introducción a la Ciberseguridad',
    issuer: 'Cisco Networking Academy',
    abbr: 'CISCO',
    year: '2025',
    category: 'Seguridad',
    color: 'b' as const,
    link: '#',
  },
  {
    id: 6,
    title: 'Introduction to IoT',
    issuer: 'Cisco Networking Academy',
    abbr: 'CISCO',
    year: '2021',
    category: 'AI / ML',
    color: 'g' as const,
    link: '#',
  },
  {
    id: 1,
    title: 'Foundations of Cybersecurity',
    issuer: 'Google (Coursera)',
    abbr: 'GOOGLE',
    year: '2025',
    category: 'Seguridad',
    color: 'b' as const,
    link: 'https://coursera.org/share/6d15bb0206bf94d2d2f3665f06221066',
  },
  {
    id: 2,
    title: 'Play It Safe: Manage Security Risks',
    issuer: 'Google (Coursera)',
    abbr: 'GOOGLE',
    year: '2025',
    category: 'Seguridad',
    color: 'b' as const,
    link: 'https://coursera.org/share/15e58f08d9ece4fa7876de608508a6db',
  },
  {
    id: 3,
    title: 'Fundamentos de Python',
    issuer: 'CERSEU-FCM / UNMSM',
    abbr: 'UNMSM',
    year: '2024',
    category: 'AI / ML',
    color: 'g' as const,
    link: '#',
  },
  {
    id: 4,
    title: 'Python for Data Science',
    issuer: 'CINFO-DGSU / UNMSM',
    abbr: 'UNMSM',
    year: '2024',
    category: 'AI / ML',
    color: 'p' as const,
    link: '#',
  },
  {
    id: 7,
    title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
    issuer: 'IBM (Coursera)',
    abbr: 'IBM',
    year: '2026',
    category: 'Cloud',
    color: 'g' as const,
    link: 'https://coursera.org/share/f4a27721152575f072b37056705dfe10',
  },
  {
    id: 8,
    title: 'Migrating to the AWS Cloud',
    issuer: 'AWS (Coursera)',
    abbr: 'AWS',
    year: '2026',
    category: 'Cloud',
    color: 'o' as const,
    link: 'https://coursera.org/share/66c3c9533556350088b96a7b22fe2445',
  },
  {
    id: 9,
    title: 'Connect and Protect: Networks and Network Security',
    issuer: 'Google (Coursera)',
    abbr: 'GOOGLE',
    year: '2026',
    category: 'Seguridad',
    color: 'b' as const,
    link: 'https://coursera.org/share/ea51c2e7b029af228d578cb5574f2b91',
  },
  {
    id: 10,
    title: 'AWS Cloud Technical Essentials',
    issuer: 'AWS (Coursera)',
    abbr: 'AWS',
    year: '2026',
    category: 'Cloud',
    color: 'o' as const,
    link: 'https://coursera.org/share/378a08fcd9fb122126102031f99e07e6',
  },
  {
    id: 11,
    title: "IBM's specialized program on generative AI for cybersecurity professionals",
    issuer: 'IBM (Coursera)',
    abbr: 'IBM',
    year: '2026',
    category: 'Seguridad',
    color: 'b' as const,
    link: 'https://coursera.org/share/2bb39f4f746e4521d2991fb6c560134c',
    children: [
      {
        title: 'Generative AI: Introduction and Applications',
        link: 'https://coursera.org/share/12bc59561bab706f2e3fe309fb116260',
      },
      {
        title: 'Generative AI: Prompt Engineering Basics',
        link: 'https://coursera.org/share/8d039a6d64ca3c3dca85138ae9a4998f',
      },
      {
        title: 'Generative AI: Boost Your Cybersecurity Career',
        link: 'https://coursera.org/share/de56691a2e2e360f434022791202f770',
      },
    ],
  },
]
