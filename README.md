# Psychology Landing Page

Landing page moderno y profesional para servicios de psicología construido con Next.js 14, React 18, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Responsive**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **SEO Optimizado**: Metadata completa, Schema.org, sitemap y robots.txt
- **Performance**: Optimizado para Core Web Vitals
- **Accesibilidad**: Diseño accesible con ARIA labels y navegación por teclado
- **Animaciones**: Transiciones y efectos visuales atractivos

## 📋 Secciones

1. **Hero**: Sección principal con CTA y estadísticas
2. **About**: Información sobre la psicóloga y credenciales
3. **Services**: Servicios ofrecidos (terapia individual, pareja, familiar, online, etc.)
4. **Specialties**: Especialidades clínicas (ansiedad, depresión, autoestima, etc.)
5. **Approach**: Metodología y enfoque terapéutico
6. **Testimonials**: Testimonios de pacientes
7. **Contact**: Formulario de contacto e información

## 🛠️ Tecnologías

- **Next.js 14**: Framework React con App Router
- **React 18**: Biblioteca UI
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Iconos SVG
- **Poppins Font**: Tipografía moderna de Google Fonts

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo (puerto 3001)
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🎨 Personalización

### Colores

Los colores se pueden modificar en `tailwind.config.ts`:

- **Primary**: Verde (tonos de #10b981)
- **Secondary**: Azul (tonos de #3b82f6)
- **Accent**: Morado (tonos de #d946ef)

### Contenido

El contenido se puede actualizar directamente en los componentes de las secciones ubicados en `src/components/sections/`.

### Imágenes

Coloca tus imágenes en la carpeta `public/images/` y actualiza las referencias en los componentes.

## 📱 Estructura del Proyecto

```
psychology/
├── src/
│   ├── app/
│   │   ├── globals.css        # Estilos globales
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página principal
│   │   ├── robots.ts          # Configuración de robots
│   │   └── sitemap.ts         # Sitemap para SEO
│   └── components/
│       ├── index.ts           # Exporta todos los componentes
│       ├── README.md          # Documentación de componentes
│       ├── layout/            # Componentes de diseño
│       │   ├── index.ts
│       │   ├── Navbar.tsx     # Navegación principal
│       │   └── Footer.tsx     # Pie de página
│       ├── sections/          # Secciones de la landing
│       │   ├── index.ts
│       │   ├── Hero.tsx       # Hero section
│       │   ├── About.tsx      # Acerca de
│       │   ├── Services.tsx   # Servicios
│       │   ├── Specialties.tsx # Especialidades
│       │   ├── Approach.tsx   # Metodología
│       │   ├── Testimonials.tsx # Testimonios
│       │   └── Contact.tsx    # Contacto + Google Maps
│       └── ui/                # Componentes UI reutilizables
│           ├── index.ts
│           ├── Button.tsx     # Botón personalizado
│           ├── Card.tsx       # Tarjeta con animaciones
│           └── SectionHeader.tsx # Encabezado de sección
├── public/
│   ├── images/               # Imágenes optimizadas
│   └── videos/               # Videos comprimidos
├── tailwind.config.ts        # Configuración de Tailwind
├── tsconfig.json             # Configuración de TypeScript
└── package.json              # Dependencias
```

## 🔧 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm start`: Ejecuta la aplicación en modo producción
- `npm run lint`: Ejecuta el linter de ESLint

## 🏗️ Arquitectura de Componentes

El proyecto utiliza una arquitectura modular y escalable:

### Layout Components (`components/layout/`)
Componentes estructurales reutilizables en todo el sitio:
- **Navbar**: Navegación principal con menú responsive
- **Footer**: Pie de página con enlaces y contacto

### Section Components (`components/sections/`)
Secciones específicas de la landing page:
- Cada sección es un componente independiente
- Incluyen sus propias animaciones y lógica
- Fáciles de reordenar o modificar

### UI Components (`components/ui/`)
Componentes reutilizables para construir interfaces:
- **Button**: Botón con variantes (primary, secondary, outline, ghost)
- **Card**: Tarjeta con animaciones de scroll
- **SectionHeader**: Encabezado estándar para secciones

### Importaciones Simplificadas
```tsx
// ✅ Usa importaciones desde el índice principal
import { Navbar, Footer, Hero, Button, Card } from "@/components";

// En lugar de rutas largas
import Navbar from "@/components/layout/Navbar";
```

Ver [src/components/README.md](src/components/README.md) para documentación detallada.

## 📈 SEO y Performance

- Metadata completa con Open Graph y Twitter Cards
- Schema.org con datos estructurados
- Sitemap.xml automático
- Robots.txt configurado
- Imágenes optimizadas
- Lazy loading de componentes

## 🌐 Deployment

El proyecto está listo para ser desplegado en:

- [Vercel](https://vercel.com) (recomendado para Next.js)
- [Netlify](https://netlify.com)
- Cualquier servidor que soporte Node.js

```bash
# Para Vercel
vercel

# Para otros servicios
npm run build
# Despliega la carpeta .next y node_modules
```

## 📝 Notas

- Actualiza los datos de contacto en `layout.tsx` y `Contact.tsx`
- Reemplaza las URLs de redes sociales en `Footer.tsx`
- Agrega tu código de Google Analytics si es necesario
- Actualiza el dominio en `sitemap.ts` y metadata

## 📄 Licencia

Este proyecto es privado y confidencial.

## 👨‍⚕️ Autor

Psicología Integral - [contacto@psicologia-integral.com](mailto:contacto@psicologia-integral.com)
