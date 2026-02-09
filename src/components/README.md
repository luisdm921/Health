# Estructura de Componentes

Este proyecto sigue una arquitectura organizada para facilitar el mantenimiento y escalabilidad.

## 📁 Estructura

```
src/
└── components/
    ├── index.ts                 # Exporta todos los componentes
    │
    ├── layout/                  # Componentes de diseño
    │   ├── index.ts
    │   ├── Navbar.tsx          # Navegación principal
    │   └── Footer.tsx          # Pie de página
    │
    ├── sections/               # Secciones de la landing page
    │   ├── index.ts
    │   ├── Hero.tsx            # Sección principal/hero
    │   ├── About.tsx           # Acerca de nosotros
    │   ├── Services.tsx        # Servicios ofrecidos
    │   ├── Specialties.tsx     # Especialidades
    │   ├── Approach.tsx        # Metodología
    │   ├── Testimonials.tsx    # Testimonios de clientes
    │   └── Contact.tsx         # Formulario de contacto
    │
    └── ui/                     # Componentes UI reutilizables
        ├── index.ts
        ├── Button.tsx          # Botón personalizado
        ├── Card.tsx            # Tarjeta con animaciones
        └── SectionHeader.tsx   # Encabezado de sección
```

## 🎯 Uso

### Importación simplificada

Gracias a los archivos `index.ts`, puedes importar componentes de forma limpia:

```tsx
// ✅ Recomendado - Importación desde el índice principal
import { Navbar, Footer, Hero, Button, Card } from "@/components";

// ❌ Evitar - Importaciones individuales largas
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
```

### Ejemplo de uso en pages

```tsx
// app/page.tsx
import {
  Hero,
  About,
  Services,
  Specialties,
  Approach,
  Testimonials,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Specialties />
      <Approach />
      <Testimonials />
      <Contact />
    </>
  );
}
```

## 🧩 Componentes UI Reutilizables

### Button

Botón personalizado con variantes y tamaños:

```tsx
import { Button } from "@/components";

<Button variant="primary" size="lg" icon={<FaPhone />}>
  Contactar
</Button>
```

**Props:**
- `variant`: "primary" | "secondary" | "outline" | "ghost"
- `size`: "sm" | "md" | "lg"
- `fullWidth`: boolean
- `icon`: ReactNode

### Card

Tarjeta con animaciones de scroll y efectos hover:

```tsx
import { Card } from "@/components";

<Card hover gradient delay={200}>
  <h3>Título</h3>
  <p>Contenido de la tarjeta</p>
</Card>
```

**Props:**
- `hover`: boolean (efecto hover)
- `gradient`: boolean (fondo con gradiente)
- `delay`: number (delay de animación en ms)

### SectionHeader

Encabezado de sección con animaciones:

```tsx
import { SectionHeader } from "@/components";

<SectionHeader
  badge="Servicios"
  title="Nuestros Servicios"
  description="Ofrecemos terapia personalizada..."
  align="center"
/>
```

**Props:**
- `badge`: string (opcional)
- `title`: string | ReactNode
- `description`: string (opcional)
- `align`: "left" | "center" | "right"

## 🎨 Convenciones

1. **Nombre de archivos**: PascalCase (ej: `SectionHeader.tsx`)
2. **Componentes**: Use "use client" solo cuando sea necesario
3. **Estilos**: Usar Tailwind CSS
4. **Animaciones**: Implementar con IntersectionObserver para mejor performance
5. **Tipos**: Definir interfaces para las props

## 📦 Agregar nuevos componentes

### Para componentes UI reutilizables:

1. Crear archivo en `components/ui/NuevoComponente.tsx`
2. Exportar en `components/ui/index.ts`:
   ```ts
   export { default as NuevoComponente } from "./NuevoComponente";
   ```

### Para nuevas secciones:

1. Crear archivo en `components/sections/NuevaSeccion.tsx`
2. Exportar en `components/sections/index.ts`:
   ```ts
   export { default as NuevaSeccion } from "./NuevaSeccion";
   ```

## 🔍 Best Practices

- ✅ Mantener componentes pequeños y enfocados
- ✅ Extraer lógica repetida a componentes UI
- ✅ Usar TypeScript para mejor tipo seguridad
- ✅ Implementar animaciones sutiles para mejor UX
- ✅ Responsive design first
- ✅ Optimizar imágenes y assets
- ✅ Usar lazy loading cuando sea apropiado

## 📝 Notas

- Los componentes de `layout/` se usan en el Layout principal
- Los componentes de `sections/` son específicos de la landing page
- Los componentes de `ui/` son reutilizables en todo el proyecto
