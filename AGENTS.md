# Karen Explora — Reglas del Agente

> Este archivo es la fuente de verdad para el comportamiento del agente al trabajar en este proyecto.
> Es descubierto automáticamente por Antigravity y se aplica en todas las conversaciones.

---

## Perfil del proyecto

- **Nombre:** Karen Explora
- **Tipo:** Sitio web personal / marca (React SPA)
- **URL de producción:** https://karenexplora.com
- **Hosting:** Hostinger (shared hosting con PHP y Apache)
- **Repositorio:** `samuelaure/karenexplora-web` (GitHub, privado)
- **Despliegue:** Automático al hacer push a `main` (Hostinger Git auto-deploy)

### Stack tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | React | 19.x |
| Bundler | Vite | 7.x |
| Lenguaje | JavaScript (JSX) | ES2020+ |
| Routing | React Router DOM | 7.x |
| Animaciones | Framer Motion | 12.x |
| Iconos | Lucide React, React Icons | latest |
| SEO | React Helmet Async | 3.x |
| Estilos | CSS Modules + CSS vanilla (variables globales) | — |
| Linting | ESLint (flat config) | 9.x |
| Servidor prod | Express + Helmet (CSP) | 5.x |
| Servidor dev | Vite dev server (HMR) | — |
| Gestor de paquetes | npm | 10.x |
| Node.js | v22.x LTS | — |

### Estructura del proyecto

```
karenexplora-web/
├── index.html              ← Entry point HTML (carga fuentes, meta tags base)
├── vite.config.js          ← Configuración de Vite (plugin React)
├── eslint.config.js        ← ESLint flat config
├── server.js               ← Servidor Express para producción (CSP, SPA fallback)
├── package.json            ← Dependencias y scripts
├── public/
│   ├── .htaccess           ← Reglas Apache: HTTPS, no-www, redirect /charles, SPA routing, CSP, security headers
│   ├── api/upload.php      ← Endpoint PHP para subir archivos (autenticación por UPLOAD_SECRET)
│   ├── media/index.php     ← Redirect 301 SEO para /media/
│   ├── manifest.json       ← PWA manifest
│   ├── robots.txt          ← Control de indexación
│   ├── sitemap.xml         ← Sitemap para buscadores
│   ├── images/             ← Imágenes del proyecto (históricas, en repo)
│   └── voiceflow-init.js   ← Script chatbot (desactivado actualmente)
├── src/
│   ├── main.jsx            ← Punto de entrada React (StrictMode, HelmetProvider, BrowserRouter)
│   ├── App.jsx             ← Router principal con todas las rutas
│   ├── index.css           ← Design tokens globales (palette, tipografía, glassmorphism, utilities)
│   ├── components/         ← Componentes reutilizables (Navbar, Footer, SEO, Button, Slider, etc.)
│   └── pages/              ← Páginas del sitio (Home, Bio, Cronicas, Familia, Tienda, Libro, etc.)
├── dist/                   ← Build de producción (generado por `vite build`, en .gitignore)
└── docs/                   ← Documentación del proyecto
    └── setup.md            ← Guía de configuración inicial
```

### Rutas del sitio

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | HomeOriginal | Página principal |
| `/terremoto` | Home | Versión emergencia (terremoto Venezuela) |
| `/bio` | Bio | Biografía de Karen |
| `/cronicas` | Cronicas | Crónicas de exploración |
| `/familia` | Familia | Legado familiar (Charles Brewer-Carías) |
| `/supervivencia` | Supervivencia | Taller de supervivencia |
| `/supervivencia/gracias` | SupervivenciaGracias | Confirmación de compra |
| `/tienda` | Tienda | Tienda de libros |
| `/libro` | Libro | Detalle de libro |
| `/contacto` | Contacto | Formulario de contacto |
| `/uploads` | Uploads | Gestor de archivos (protegido por contraseña) |
| `/privacidad` | Privacidad | Política de privacidad |
| `/aviso-legal` | AvisoLegal | Aviso legal |
| `/terminos-venta` | TerminosVenta | Términos de venta |

### Convenciones de código

- **Componentes:** PascalCase, un archivo `.jsx` + un `.module.css` por componente
- **Estilos:** CSS Modules para componentes, `index.css` para tokens globales y utilities
- **Paleta:** Nature premium (deep forest greens, parchment cream, muted gold) — definida en `:root` de `index.css`
- **Tipografía:** Outfit (sans-serif, cuerpo) + Playfair Display (serif, títulos decorativos)
- **SEO:** Cada página usa el componente `<SEO>` con title, description y canonical
- **Imágenes externas:** Servidas desde `https://karenexplora.com/media/` (persistentes entre deploys)
- **Imágenes en repo:** Solo las históricas en `public/images/` (ya versionadas)

### Scripts disponibles

| Comando | Propósito |
|---------|-----------|
| `npm run dev` | Servidor de desarrollo con HMR (Vite) |
| `npm run build` | Build de producción → `dist/` |
| `npm run preview` | Preview del build de producción (Vite) |
| `npm run lint` | Ejecutar ESLint |
| `npm run verify` | Lint + Build (validación pre-publicación) |
| `npm start` | Servidor Express de producción |

---

## Perfil del usuario

**El usuario NO tiene conocimientos técnicos ni experiencia en programación.**

El agente es su interfaz exclusiva para trabajar con este proyecto. Debe asumir toda la responsabilidad técnica.

---

## Reglas de comportamiento

### Comunicación

1. Hablar siempre en español, con lenguaje claro y natural.
2. No usar jerga técnica, comandos, nombres de archivos ni conceptos de programación en la comunicación con el usuario, salvo que sean estrictamente necesarios para una decisión.
3. Explicar resultados de forma breve y orientada a lo que el usuario puede ver o verificar.
4. Traducir problemas técnicos a consecuencias prácticas: "La página de contacto no cargará bien" en lugar de "hay un error en el import de Contacto.jsx".
5. Proponer soluciones concretas en lugar de trasladar problemas técnicos al usuario.
6. Nunca pedir al usuario que ejecute comandos, edite archivos ni realice acciones técnicas que el agente pueda realizar directamente.

### Autonomía técnica

1. El agente debe aplicar criterio profesional, no limitarse a ejecutar literalmente las instrucciones del usuario.
2. Analizar el contexto completo antes de actuar: intención real del usuario, archivos involucrados, impacto en otras partes del sitio.
3. Mantener la arquitectura, convenciones de código, paleta de colores y diseño visual del proyecto. El estilo visual y comportamiento actual de la interfaz DEBEN conservarse idénticos salvo que se solicite un cambio explícito.
4. Elegir soluciones técnicamente correctas y mantenibles, incluso si el usuario no ha especificado detalles técnicos.
5. Detectar y corregir automáticamente problemas que pueda resolver sin cambiar el alcance aprobado.
6. No realizar refactors no solicitados salvo que sean estrictamente necesarios para implementar la solicitud.
7. Preferir soluciones simples, limpias y limitadas al alcance del cambio.
8. **Responsive Design estricto:** Cualquier cambio en la interfaz, nuevo componente o modificación de diseño DEBE verse y funcionar perfectamente en todas las dimensiones principales (móvil, tablet, escritorio). No entregar cambios que rompan el responsive.

### Gestión de archivos externos

Los archivos (imágenes, PDFs, documentos) NO se almacenan en el repositorio Git. Se suben al servidor de producción a través de un gestor dedicado.

**Regla obligatoria:** Cada vez que sea necesario subir archivos, o el usuario pregunte dónde o cómo subirlos, el agente DEBE proporcionar explícitamente este enlace:

> **Sube tus archivos aquí:** https://karenexplora.com/uploads

Los archivos subidos quedan disponibles en URLs permanentes con el formato:
`https://karenexplora.com/media/nombre-archivo.ext`

El agente debe usar estas URLs directamente en el código cuando el usuario las proporcione.

### Solicitud de información

Cuando una tarea requiera contenido, decisiones o archivos que el agente no pueda generar por sí mismo, debe pedirlos directamente al usuario. Esto incluye:
- Textos y contenido editorial
- Imágenes y documentos
- Decisiones de negocio o contenido
- URLs de recursos ya subidos

El agente NO debe inventar contenido, textos, nombres ni información que no pueda inferir razonablemente del contexto.

---

## Gestión de Git

El usuario NO gestiona ramas, commits, merges ni pushes. El agente lo hace todo.

### Estrategia de ramas

- **`main`** es la rama de producción. El push a `main` despliega automáticamente a producción.
- Cada implementación se realiza en una **rama temporal** con nombre descriptivo: `feat/nombre-descriptivo`, `fix/nombre-descriptivo`.
- La rama temporal se mantiene mientras los cambios estén en revisión.
- Tras la aprobación y publicación exitosa, la rama temporal se elimina (local y remota si fue creada).

### Estrategia de merge

- Merge `--no-ff` (no fast-forward) para preservar historial de ramas.
- Commits con formato Conventional Commits: `feat(scope): description`, `fix(scope): description`.

### Protección de main

No se hace push a `main` hasta que:
1. Los cambios hayan sido aprobados explícitamente por el usuario.
2. El lint haya pasado (`npm run lint`).
3. El build haya sido exitoso (`npm run build`).
4. El estado del proyecto sea apto para producción.

---

## Ciclo de vida de una implementación

Cada solicitud de cambio sigue este flujo completo:

1. **Analizar** la solicitud y el contexto del proyecto.
2. **Crear rama** temporal de trabajo.
3. **Iniciar preview** (`npm run dev`) lo antes posible tras crear la rama.
4. **Implementar** los cambios solicitados.
5. **Validar**: lint, verificar visualmente, corregir problemas.
6. **Mantener el preview** disponible para revisión del usuario.
7. **Iterar** hasta que el usuario apruebe explícitamente.
8. **Publicar** (ejecutar workflow de publicación completo).
9. **Limpiar**: detener preview, eliminar rama temporal.

### Preview

- El preview se inicia con `npm run dev` y se comunica al usuario en términos simples: "Ya puedes revisar los cambios aquí: [enlace]".
- El preview NO debe permanecer corriendo indefinidamente. Se inicia para cada implementación y se detiene tras la publicación.

---

## Despliegue a producción

El sitio está en Hostinger con auto-deploy desde GitHub.

**El push exitoso a `main` es la acción que activa la actualización de producción.**

El protocolo completo de publicación:

1. Confirmar que los cambios corresponden a una versión aprobada por el usuario.
2. Ejecutar `npm run verify` (lint + build).
3. Verificar que no existen errores.
4. Crear commit con formato Conventional Commits.
5. Cambiar a `main`.
6. Merge `--no-ff` de la rama de trabajo.
7. Push a `main`.
8. Confirmar al usuario que los cambios fueron publicados y qué se publicó.
9. Detener preview y eliminar rama temporal.

---

## Archivos que NO se deben modificar sin razón

- `public/.htaccess` — Reglas de servidor críticas (HTTPS, redirects, CSP, security headers)
- `server.js` — Servidor de producción con CSP configurada
- `public/api/upload.php` — Endpoint de carga de archivos
- `public/robots.txt`, `public/sitemap.xml` — SEO (solo modificar si cambian rutas)
- `.gitignore` — Reglas de exclusión establecidas

---

## Evolución del sistema de reglas

Si durante el trabajo el agente identifica un patrón recurrente o una necesidad operativa que debería formalizarse:

1. Crear o actualizar la regla en este archivo (`AGENTS.md`) o en el skill correspondiente dentro de `.agents/skills/`.
2. Mantener coherencia con las reglas existentes.
3. Evitar duplicación o contradicciones.
4. El repositorio es la fuente de verdad de toda la configuración.
