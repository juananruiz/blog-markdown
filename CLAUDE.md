# Blog Minimalista - Guía de Desarrollo

Este proyecto es un blog Next.js minimalista que utiliza archivos Markdown para el contenido.

## Comandos Principales
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera la versión de producción.
- `npm run lint`: Ejecuta el linter.

## Estructura de Archivos
- `app/`: Directorio de rutas de Next.js.
- `content/posts/`: Archivos .md del blog.
- `components/`: Componentes React (shadcn/ui).
- `lib/`: Utilidades para manejar posts y formateo.

## Estilo y Diseño
- Utiliza **Tailwind CSS** con variables CSS en `globals.css`.
- Los componentes UI están en `components/ui/` (shadcn).
- Tipografía actual: **Inter**.
- Soporte para **Modo Claro / Oscuro**.

## Reglas de Contenido
1. Los posts deben estar en `content/posts/`.
2. El frontmatter debe incluir: `title`, `date`, `description`.
3. El slug se deriva del nombre del fichero.

## Mejoras Planificadas
- [x] Crear estructura .agent
- [ ] Implementar búsqueda (Command Palette)
- [ ] Mejorar tipografía y legibilidad
