# Angel Garay Torres – Portfolio

Portafolio personal desarrollado con **React + Vite + TypeScript + Tailwind CSS**.  
Desplegado con **Docker + GitHub Actions CI/CD**.

## 🚀 Inicio rápido

### Desarrollo local
```bash
npm install
npm run dev
# → http://localhost:5173
```

### Producción con Docker
```bash
docker compose up --build
# → http://localhost:4173
```

## 🏗️ Estructura

```
portfolio/
├── src/
│   ├── components/      # Navbar, Footer
│   ├── sections/        # Hero, Projects, Skills, About, Contact
│   ├── data.ts          # Toda la info del portafolio (editar aquí)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml   # CI/CD → Build → Docker → Deploy SSH
├── Dockerfile           # Multi-stage build
├── docker-compose.yml
└── ...config files
```

## ⚙️ CI/CD – GitHub Actions

El workflow `deploy.yml` hace:
1. **Build & Type Check** – en todo PR y push
2. **Docker Build** – solo en `main`
3. **Deploy SSH** – solo en `main` (requiere secrets)

### Secrets requeridos en GitHub
| Secret | Descripción |
|---|---|
| `VPS_HOST` | IP o dominio del servidor |
| `VPS_USER` | Usuario SSH |
| `VPS_SSH_KEY` | Clave privada SSH |
| `VPS_PORT` | Puerto SSH (default: 22) |

## 🎨 Tech Stack

- **React 18** + **TypeScript** + **Vite 5**
- **Tailwind CSS 3**
- **Docker** + **Docker Compose**
- **GitHub Actions** (CI/CD)
- Fuentes: Syne, DM Sans, JetBrains Mono

## 📝 Personalizar

Edita `src/data.ts` para actualizar proyectos, skills y datos personales. No necesitas tocar los componentes.

---

Made by Angel Garay Torres · [angelgarayt22@gmail.com](mailto:angelgarayt22@gmail.com)