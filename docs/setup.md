# Configuración inicial — Karen Explora

Esta guía describe los pasos necesarios para configurar un entorno de desarrollo local.

> **Nota:** Si estás usando Antigravity, simplemente pide al agente que ejecute el setup.
> Él se encargará de todo automáticamente siguiendo estas instrucciones.

---

## Requisitos previos

| Herramienta | Versión | Para qué se usa |
|-------------|---------|-----------------|
| **Node.js** | 22.x LTS | Runtime de JavaScript |
| **npm** | 10.x | Gestor de paquetes (incluido con Node.js) |
| **Git** | 2.x+ | Control de versiones |
| **GitHub CLI** | Última | Autenticación HTTPS con GitHub (recomendado) |

---

## 1. Clonar el repositorio

Con GitHub CLI (recomendado):
```bash
gh repo clone samuelaure/karenexplora-web
cd karenexplora-web
```

O con Git directamente:
```bash
git clone https://github.com/samuelaure/karenexplora-web.git
cd karenexplora-web
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Configurar variables de entorno

Copiar el archivo de ejemplo:
```bash
cp .env.example .env
```

Las variables de entorno de `.env` solo son necesarias para funciones específicas.
El sitio funciona correctamente en desarrollo sin configurarlas.

---

## 4. Verificar que todo funciona

```bash
npm run verify
```

Esto ejecuta lint + build. Si no hay errores, el proyecto está correctamente configurado.

---

## 5. Iniciar el servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`.

---

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Genera el build de producción en `dist/` |
| `npm run preview` | Previsualiza el build de producción |
| `npm run lint` | Ejecuta el linter (ESLint) |
| `npm run verify` | Ejecuta lint + build (validación pre-publicación) |
| `npm start` | Inicia el servidor Express de producción |

---

## Estructura del proyecto

```
src/
├── main.jsx          ← Punto de entrada (React + Router + Helmet)
├── App.jsx           ← Definición de rutas
├── index.css         ← Tokens globales (colores, tipografía, utilidades)
├── components/       ← Componentes reutilizables
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── SEO.jsx
│   ├── Button.jsx
│   ├── Slider.jsx
│   ├── FadeIn.jsx
│   └── ...
└── pages/            ← Páginas del sitio
    ├── HomeOriginal.jsx
    ├── Bio.jsx
    ├── Cronicas.jsx
    ├── Familia.jsx
    ├── Supervivencia.jsx
    ├── Tienda.jsx
    ├── Libro.jsx
    ├── Contacto.jsx
    └── ...
```

---

## Gestión de archivos multimedia

Las imágenes y documentos NO se almacenan en el repositorio. Se suben al servidor de
producción a través de:

**https://karenexplora.com/uploads**

Los archivos subidos quedan disponibles en URLs permanentes:
`https://karenexplora.com/media/nombre-archivo.ext`

---

## Despliegue

El sitio se despliega automáticamente a producción (Hostinger) cuando se hace push a `main`.

No es necesario ejecutar ningún comando de deploy manualmente.
