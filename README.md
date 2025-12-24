# 📊 Proyecto: Alianza Databricks - Cloud Driver + Anthana

## Contexto

Este repositorio contiene todos los materiales estratégicos y comerciales para la alianza entre **Cloud Driver** y **Anthana Group** enfocada en soluciones **Databricks**, con **Konfío** como cuenta target principal.

---

## 📁 Estructura del Proyecto

```
konfio-databricks/
│
├── 📂 presentation/
│   └── deck-ejecutivo.html      # Presentación interactiva (abrir en navegador)
│
├── 📂 sales/
│   ├── one-pager-anthana.html   # One-pager visual de capacidades
│   └── icp-perfil-cliente-ideal.md  # ICP detallado para campaña
│
├── 📂 proposals/
│   └── propuesta-tecnica-konfio.md  # Propuesta técnica completa
│
├── 📂 analysis/
│   └── databricks-vs-snowflake.md   # Análisis competitivo
│
├── CHECKLIST-REUNION-MARTES.md  # Preparación reunión 24 Dic
└── README.md                     # Este archivo
```

---

## 🚀 Cómo Usar los Materiales

### Presentación Ejecutiva
```bash
# Abrir en navegador
open presentation/deck-ejecutivo.html
```
- Navegar con scroll o flechas del teclado
- Puntos de navegación en el lado derecho
- Optimizado para presentar en pantalla o proyector

### One-Pager
```bash
# Abrir en navegador para ver
open sales/one-pager-anthana.html

# Imprimir como PDF (Cmd+P en el navegador)
```

### Documentos Markdown
- Abrir en cualquier editor de Markdown (VS Code, Typora, etc.)
- Se pueden exportar a PDF con herramientas como `pandoc`

---

## 📅 Timeline del Proyecto

| Fecha | Hito |
|-------|------|
| 22 Dic 2024 | Reunión inicial (videollamada) |
| 24 Dic 2024 | Reunión presencial Casa O |
| Ene 2025 | Lanzamiento campaña de demanda |
| Q1 2025 | Approach a Konfío |
| Q1 2025 | Evento con fondos marketing |

---

## 👥 Contactos

### Anthana Group
- **Víctor Gallo** - Business Development
- **Juan José Cardonal** - Head of Data Engineering
- **Carlos Cardona** - Product & UX

### Cloud Driver
- **Jorge Garrido** - Director
- **Rubén Ruiz Gamboa** - AWS Lead

### Databricks
- **Alejandra Sánchez** - Account Executive (facilitadora)

---

## 📝 Notas Importantes

1. **Confidencialidad:** Todos los materiales son confidenciales y requieren NDA firmado antes de compartir con terceros.

2. **Propuesta Konfío:** La propuesta técnica es un draft. Requiere discovery con el cliente para refinar estimaciones.

3. **ICP:** El perfil de cliente ideal está basado en información pública. Validar con Cloud Driver su base de datos real.

4. **Precios:** Los rangos de precios en la propuesta son estimaciones. Confirmar con Databricks pricing actual.

---

## 🔄 Actualizaciones

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | 23 Dic 2024 | Versión inicial con todos los materiales |

---

# 🎯 Technical Documentation: Anthana + Cloud Driver - Databricks Deck

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

## 📁 Estructura del Proyecto (Next.js)

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


