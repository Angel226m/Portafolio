export const personal = {
  name: 'Angel Garay Torres',
  role: 'Full-Stack Developer & DevOps',
  subtitle: 'Estudiante de Ingeniería de Sistemas – 8.º ciclo',
  university: 'Universidad Nacional de Cañete',
  location: 'Chincha, Perú',
  email: 'angelgarayt22@gmail.com',
  phone: '+51 932 284 763',
  github: 'https://github.com/Angel226m',
  githubHandle: 'Angel226m',
  bio: 'Apasionado por el desarrollo full-stack, DevOps, Inteligencia Artificial y soluciones escalables para problemas reales. Experiencia en proyectos con arquitecturas modernas, integración de pagos, CI/CD, IoT y deep learning.',
}

export const skills = {
  frontend: ['React', 'TypeScript', 'Vue 3', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
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
      'Reserva simultánea de paquetes familiares e individuales con validaciones en tiempo real',
      'Generación automática de vouchers PDF con datos cifrados',
      'Panel administrativo con autenticación basada en roles (vendedores / admins)',
      'Recuperación de contraseña segura con Resend + JWT',
      'Backups automáticos (pg_dump + gzip + B2) con retención de 7 días',
      'Cobertura de tests >80% (Vitest + Go test + sqlmock)',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Go', 'PostgreSQL', 'Docker', 'Nginx', 'GitHub Actions', 'JWT', 'AES-256-GCM', 'Mercado Pago', 'Backblaze B2'],
    techColors: ['blue', 'blue', 'blue', 'blue', 'purple', 'purple', 'green', 'green', 'green', 'purple', 'purple', 'blue', 'green'],
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
      'Sistema avanzado de detección de grietas en estructuras de concreto usando deep learning, IoT y análisis morfológico. Detecta patrones, causa probable (corrosión/sobrecarga) y severidad (baja/media/alta) con precisión >90%.',
    highlights: [
      'Modelo 1: UNet++ + EfficientNet-B8 + TTA (6x transformaciones, robustez >95%)',
      'Modelo 2: UNet++ + ConvNeXt-Base + CBAM Attention',
      'IoT: Raspberry Pi + cámara Arducam 1080p HDR + streaming WebRTC',
      'Procesamiento ~2s/imagen, archivos hasta 50MB',
      'Selección dinámica de modelo por request (model=model_1|model_2)',
      'Casos de uso: puentes, edificios, evaluación post-desastre',
    ],
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