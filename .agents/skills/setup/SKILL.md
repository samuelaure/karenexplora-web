---
name: setup
description: >-
  Workflow de configuración inicial del proyecto Karen Explora. Usar cuando un
  usuario abre una carpeta vacía por primera vez y pide clonar y configurar el
  proyecto, o cuando dice algo como "configura este proyecto", "ejecuta el setup",
  o "prepara el entorno".
---

# Setup — Configuración inicial de Karen Explora

Este workflow configura un entorno local completo para trabajar con el proyecto Karen Explora.
Está diseñado para usuarios sin conocimientos técnicos. El agente debe realizar todo automáticamente
y pedir intervención solo cuando sea estrictamente necesario.

**Principio fundamental:** No pedir al usuario que ejecute comandos. Hacerlo todo directamente.

---

## Fase 1: Diagnóstico del entorno

Antes de instalar nada, verificar qué está disponible. Ejecutar estos diagnósticos:

```
node -v
npm -v
git --version
gh --version
gh auth status
git config --get user.name
git config --get user.email
```

### Evaluar resultados

| Herramienta | Si falta | Acción |
|-------------|----------|--------|
| **Node.js** | No instalado o versión < 22 | Descargar e instalar Node.js 22 LTS. En Windows: `winget install OpenJS.NodeJS.LTS`. Si winget no está disponible, guiar al usuario a https://nodejs.org con instrucciones mínimas. |
| **npm** | No disponible | Se instala con Node.js. Si falta tras instalar Node, ejecutar `npm install -g npm@latest`. |
| **Git** | No instalado | `winget install Git.Git`. Si no es posible, indicar al usuario que descargue de https://git-scm.com. |
| **GitHub CLI** | No instalado | `winget install GitHub.cli`. Es la herramienta preferida para autenticación HTTPS sin configurar SSH. |
| **Git user.name / user.email** | No configurado | Preguntar nombre y correo al usuario en el chat, luego configurar con `git config --global user.name "Nombre"` y `git config --global user.email "correo"`. |
| **GitHub auth** | No autenticado | Ejecutar `gh auth login` — elegir HTTPS, autenticación vía navegador. Indicar al usuario que se abrirá su navegador para autorizar el acceso. |

### Idempotencia

Si una herramienta ya está instalada y en versión correcta, NO reinstalar ni reconfigurar.
Informar brevemente: "Git ya está instalado ✓".

---

## Fase 2: Obtener el repositorio

### Si la carpeta está vacía (setup desde cero)

```bash
gh repo clone samuelaure/karenexplora-web .
```

Esto clona usando HTTPS con las credenciales de GitHub CLI, sin necesidad de SSH.

### Si el repositorio ya existe en la carpeta

Verificar que el remote es correcto:
```bash
git remote -v
```

Debe apuntar a `github.com/samuelaure/karenexplora-web`.

Si usa SSH (`git@github.com:...`) y el usuario no tiene SSH configurado, cambiar a HTTPS:
```bash
git remote set-url origin https://github.com/samuelaure/karenexplora-web.git
```

### Verificar acceso

```bash
git fetch origin
```

Si falla por permisos, el usuario necesita ser añadido como colaborador al repositorio.
Indicar: "Necesito que el dueño del proyecto te dé acceso al repositorio en GitHub."

---

## Fase 3: Instalar dependencias del proyecto

```bash
npm install
```

Verificar que no hay errores. Si hay problemas de permisos o versiones, resolverlos automáticamente.

---

## Fase 4: Validar el proyecto

Ejecutar las validaciones para confirmar que todo funciona:

```bash
npm run lint
npm run build
```

Si hay errores de lint o build, analizar y corregir si son problemas de configuración local.
NO corregir errores que impliquen cambios funcionales al código del proyecto.

---

## Fase 5: Verificar preview

Iniciar el servidor de desarrollo brevemente para confirmar que funciona:

```bash
npm run dev
```

Verificar que responde correctamente. Luego detener el servidor (no dejarlo corriendo indefinidamente
durante el setup).

---

## Fase 6: Finalización

Una vez todo esté configurado:

1. **NO realizar cambios funcionales al proyecto.**
2. **Presentar al usuario un resumen claro** (en español, sin jerga técnica):

Ejemplo de resumen:

> ✅ **Todo está listo para trabajar.**
>
> Este es el sitio web de **Karen Explora** — una página personal sobre exploración,
> naturaleza y conservación en Venezuela.
>
> El sitio tiene las siguientes secciones principales:
> - **Inicio** — Página principal con slider y presentación
> - **Biografía** — Quién es Karen
> - **Crónicas** — Historias de exploración
> - **Familia** — Legado de Charles Brewer-Carías
> - **Supervivencia** — Taller de supervivencia
> - **Tienda** — Libros a la venta
> - **Contacto** — Formulario de contacto
>
> Para hacer cambios, simplemente descríbeme qué quieres modificar y yo me encargo de todo.
> Cuando estés conforme con los cambios, dime "publica los cambios" y se actualizará la web.

---

## Errores comunes y resolución

| Problema | Solución |
|----------|----------|
| `npm install` falla por permisos | En Windows, ejecutar terminal como administrador si es necesario |
| `node` no se reconoce tras instalar | Cerrar y reabrir terminal, o ejecutar `refreshenv` |
| `gh auth login` no abre navegador | Usar opción de token: el usuario puede generar un token en github.com/settings/tokens |
| Puerto 5173 ocupado | Detener el proceso que lo ocupa o usar `npm run dev -- --port 5174` |
| Build falla por dependencias | Borrar `node_modules` y `package-lock.json`, luego `npm install` de nuevo |
