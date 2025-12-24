# 🎯 Anthana + Cloud Driver - Databricks Deck

Presentación interactiva construida con **Next.js 14**, **React**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
open http://localhost:3000
```

## 📁 Estructura del Proyecto

```
presentation-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globales + Tailwind
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página principal (orquestador)
│   │
│   └── components/
│       ├── Navigation.tsx   # Dots de navegación + indicador
│       ├── SlideWrapper.tsx # Wrapper reutilizable para slides
│       │
│       └── slides/          # Cada slide como componente
│           ├── CoverSlide.tsx
│           ├── TeamSlide.tsx
│           ├── ComparisonSlide.tsx
│           ├── ExperienceSlide.tsx
│           ├── KonfioSlide.tsx
│           ├── CollaborationSlide.tsx
│           ├── RoadmapSlide.tsx
│           ├── NextStepsSlide.tsx
│           └── index.ts
│
├── tailwind.config.ts       # Configuración de Tailwind
├── package.json
└── README.md
```

## ⌨️ Controles de Navegación

| Tecla | Acción |
|-------|--------|
| `↓` o `→` o `Space` | Siguiente slide |
| `↑` o `←` | Slide anterior |
| `Home` | Primera slide |
| `End` | Última slide |
| Click en dots | Ir a slide específico |

## 🎨 Características

- ✅ **Scroll snap** - Navegación fluida entre slides
- ✅ **Animaciones** - Transiciones con Framer Motion
- ✅ **Responsive** - Funciona en desktop y tablet
- ✅ **Dark mode** - Diseño oscuro profesional
- ✅ **Keyboard navigation** - Control completo con teclado
- ✅ **Progress indicator** - Barra de progreso en la parte inferior
- ✅ **TypeScript** - Tipado completo

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar producción
npm start

# Linting
npm run lint
```

## 📦 Build Estático

Para generar HTML estático (útil para compartir sin servidor):

```bash
npm run build
```

Los archivos estarán en la carpeta `out/`.

## 🎯 Personalización

### Cambiar colores

Editar `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#FF3621',  // Rojo Anthana
    dark: '#E62E1B',
    light: '#FF6B35',
  },
  accent: {
    DEFAULT: '#00A67E',  // Verde Cloud Driver
  },
  // ...
}
```

### Agregar nueva slide

1. Crear componente en `src/components/slides/NewSlide.tsx`
2. Exportar en `src/components/slides/index.ts`
3. Importar y agregar en `src/app/page.tsx`
4. Actualizar `TOTAL_SLIDES`

## 📱 Notas de Presentación

- **Mejor experiencia:** Pantalla completa (F11)
- **Para proyector:** La presentación está optimizada para 16:9
- **Impresión:** Usar `Cmd+P` genera un PDF página por página

---

**Anthana Group** © 2024


