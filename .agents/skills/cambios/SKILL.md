---
name: cambios
description: >-
  Workflow para implementar cambios en Karen Explora. Se activa cuando el usuario
  solicita modificar, actualizar o ampliar cualquier parte del sitio web. Incluye
  creación de rama, preview, iteración y validación antes de publicar.
---

# Cambios — Workflow para implementar modificaciones

Este workflow define el protocolo que el agente debe seguir cada vez que el usuario
solicita un cambio en el sitio web de Karen Explora.

**Recordatorio:** El usuario no tiene conocimientos técnicos. Toda la complejidad
técnica es responsabilidad del agente.

---

## Paso 1: Comprender la solicitud

Antes de tocar ningún archivo:

1. **Interpretar la intención real.** El usuario puede expresarse de forma imprecisa.
   "Quiero cambiar la foto de arriba" puede significar el hero image, el slider, o la imagen del header.
   Si hay ambigüedad, preguntar de forma clara y concreta.

2. **Identificar el alcance.** Determinar qué archivos, componentes y páginas están involucrados.
   Revisar el componente y su CSS Module asociado antes de hacer cambios.

3. **Verificar si se necesitan recursos.** Si el cambio requiere imágenes, textos o archivos
   que el agente no tiene, pedirlos al usuario. Si necesita subir archivos:
   > **Sube tus archivos aquí:** https://karenexplora.com/uploads
   >
   > Cuando estén subidos, copia las URLs que te aparecerán y pégalas aquí.

---

## Paso 2: Preparar el entorno

### Verificar estado de Git

```bash
git status
git branch --show-current
```

- Si hay cambios no guardados de una sesión anterior, evaluar si deben preservarse o descartarse.
- Si hay una rama de trabajo anterior que ya fue publicada, limpiarla.

### Crear rama de trabajo

```bash
git checkout main
git pull origin main
git checkout -b feat/nombre-descriptivo
```

Usar nombres descriptivos y cortos: `feat/nueva-seccion-bio`, `fix/imagen-rota-tienda`, etc.

Si ya existe una rama de trabajo activa para esta solicitud, continuar en ella sin crear una nueva.

### Iniciar preview

```bash
npm run dev
```

Comunicar al usuario:
> "Ya puedes ver los cambios en tiempo real aquí: http://localhost:5173"

El preview debe iniciarse lo antes posible para que el usuario pueda revisar progresivamente.

---

## Paso 3: Implementar los cambios

### Reglas de implementación

1. **Respetar la arquitectura existente:**
   - Componentes en `src/components/` con PascalCase: `NombreComponente.jsx` + `NombreComponente.module.css`
   - Páginas en `src/pages/` con la misma convención
   - Tokens globales en `src/index.css`
   - SEO con el componente `<SEO>` en cada página

2. **Respetar la paleta de colores:**
   - Usar variables CSS definidas en `:root` de `index.css`
   - No introducir colores hardcodeados que no estén en la paleta
   - Primarios: deep forest greens (`--primary`, `--primary-light`, `--primary-dark`)
   - Secundarios: parchment cream (`--secondary`, `--secondary-dark`)
   - Acentos: muted gold (`--accent`, `--accent-glow`), fresh green (`--accent-pop`)

3. **Respetar la tipografía:**
   - Outfit (sans-serif) para cuerpo y títulos principales
   - Playfair Display (serif, itálica) para títulos decorativos y citas

4. **Mantener SEO:**
   - Si se añade una nueva página, añadir ruta en `App.jsx` y entrada en `sitemap.xml`
   - Usar el componente `<SEO>` con title, description y canonical

5. **Imágenes:**
   - Imágenes nuevas: usar URLs de `https://karenexplora.com/media/`
   - NO añadir imágenes nuevas a `public/images/` (solo las históricas ya versionadas)
   - Siempre incluir atributo `alt` descriptivo

6. **Animaciones:**
   - Usar Framer Motion para animaciones (ya está como dependencia)
   - Usar el componente `<FadeIn>` para animaciones de entrada

7. **No modificar archivos protegidos** sin razón justificada:
   - `public/.htaccess`, `server.js`, `public/api/upload.php`
   - `public/robots.txt`, `public/sitemap.xml` (solo si cambian rutas)

---

## Paso 4: Validar

Después de implementar, ejecutar:

```bash
npm run lint
```

Corregir automáticamente todos los errores de lint que sean corregibles.
Si un error requiere una decisión de diseño, consultar al usuario.

Verificar visualmente el preview para confirmar que los cambios se ven correctos.

---

## Paso 5: Presentar al usuario

Comunicar de forma clara y breve qué se hizo:

> "Ya están listos los cambios. He [descripción de lo que se hizo en lenguaje simple].
> Puedes revisarlos aquí: http://localhost:5173/[ruta-afectada]"

**NO mencionar:** nombres de archivos, ramas de Git, comandos ejecutados ni detalles de implementación,
salvo que sean relevantes para una decisión del usuario.

---

## Paso 6: Iterar

El usuario puede pedir ajustes:
- "Pon la imagen más grande"
- "Cambia ese texto"
- "No me gusta el color, prueba otro"
- "Deshaz el último cambio"

Interpretar cada instrucción, implementar el ajuste y actualizar el preview.
Continuar iterando hasta que el usuario diga algo equivalente a "está bien" o "publica".

**NO iniciar la publicación hasta que el usuario lo pida explícitamente.**

---

## Manejo de errores durante la implementación

| Situación | Acción |
|-----------|--------|
| Error de lint corregible | Corregir automáticamente |
| Error de lint ambiguo | Preguntar al usuario con opciones claras |
| Componente que no existe | Crearlo siguiendo las convenciones del proyecto |
| Dependencia faltante | Instalar con `npm install` y justificar brevemente |
| Conflicto con otro cambio | Resolver automáticamente si es posible, consultar si no |
| Imagen o recurso faltante | Pedir al usuario con enlace a https://karenexplora.com/uploads |
