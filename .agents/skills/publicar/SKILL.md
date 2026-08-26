---
name: publicar
description: >-
  Workflow de publicación de cambios en Karen Explora. Se activa cuando el usuario
  aprueba los cambios y pide publicar, o dice algo como "publica", "sube los cambios",
  "ya está listo", "ponlo en la web", o equivalente.
---

# Publicar — Workflow de publicación a producción

Este workflow define el protocolo completo para publicar cambios aprobados en el sitio
de producción de Karen Explora (https://karenexplora.com).

**Regla crítica:** NUNCA publicar sin aprobación explícita del usuario.

---

## Pre-requisitos

Antes de iniciar la publicación, verificar:

1. ✅ El usuario ha aprobado explícitamente los cambios actuales.
2. ✅ Existe una rama de trabajo con los cambios (no estamos directamente en `main`).
3. ✅ El preview ha sido revisado por el usuario.

Si algún pre-requisito no se cumple, NO continuar. Preguntar al usuario.

---

## Paso 1: Validación técnica

Ejecutar la validación completa:

```bash
npm run verify
```

Este comando ejecuta `npm run lint && npm run build`.

### Si la validación falla

- **Errores de lint:** Corregir automáticamente los que sean seguros.
- **Errores de build:** Analizar y corregir sin alterar el alcance aprobado.
- **Si la corrección cambia algo visible:** Informar al usuario y esperar nueva aprobación.

### Si la validación pasa

Continuar al siguiente paso.

---

## Paso 2: Crear commit

Crear un commit atómico con formato Conventional Commits:

```bash
git add -A
git commit -m "feat(scope): descripción breve del cambio"
```

### Formato del commit

| Prefijo | Uso |
|---------|-----|
| `feat` | Nueva funcionalidad o contenido |
| `fix` | Corrección de errores |
| `style` | Cambios visuales sin cambio funcional |
| `content` | Actualización de textos o contenido |
| `chore` | Mantenimiento, configuración |

El scope debe ser descriptivo: `home`, `bio`, `cronicas`, `tienda`, `navbar`, `footer`, `seo`, etc.

Ejemplos:
- `feat(cronicas): add new chronicle about Sierra de Imataca`
- `fix(home): fix hero image not displaying on mobile`
- `style(navbar): adjust spacing and colors`

---

## Paso 3: Integrar en main

```bash
git checkout main
git pull origin main
git merge --no-ff nombre-de-la-rama -m "Merge branch 'nombre-de-la-rama'"
```

### Si hay conflictos

- Resolver automáticamente si es posible.
- Si el conflicto afecta contenido visible, volver a la rama de trabajo, informar al usuario
  y resolver con su aprobación.

---

## Paso 4: Push a producción

```bash
git push origin main
```

**Este push activa automáticamente el despliegue en Hostinger.**

### Si el push falla

- Verificar conectividad y autenticación.
- Si es un problema de permisos, informar al usuario de forma clara.
- NO hacer `force push` a `main` bajo ninguna circunstancia.

---

## Paso 5: Limpieza

Una vez confirmado que el push fue exitoso:

```bash
# Eliminar rama local
git branch -d nombre-de-la-rama

# Detener el servidor de preview si está corriendo
# (matar el proceso de npm run dev)
```

Si la rama fue pusheada al remoto en algún momento:
```bash
git push origin --delete nombre-de-la-rama
```

---

## Paso 6: Confirmar al usuario

Comunicar de forma breve y clara:

> "✅ **Los cambios ya están publicados.**
>
> Se actualizó [descripción de lo que se publicó en lenguaje simple].
>
> Puedes verlos en: https://karenexplora.com/[ruta-afectada]
>
> Los cambios pueden tardar unos segundos en aparecer."

**NO mencionar:** ramas, commits, hashes, merges ni detalles de Git.

---

## Protocolo de emergencia: Revertir

Si después de publicar el usuario reporta un problema grave:

1. Identificar el commit del merge.
2. Revertir con `git revert`.
3. Push a main.
4. Informar al usuario.

NO usar `git reset --hard` ni `git force push` en `main`.
