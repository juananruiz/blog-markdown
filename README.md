# Blog Minimalista con Markdown

Este proyecto es un blog con la mínima cantidad de código y funcionalidades, basado en archivos markdown en lugar de usar una base de datos. La idea principal es mantener la simplicidad tanto en el desarrollo como en la experiencia de lectura.

## Características

- **Sin base de datos**: Todo el contenido se almacena en archivos markdown.
- **Diseño minimalista**: Interfaz limpia y enfocada en el contenido.
- **Fácil de mantener**: Añadir nuevo contenido es tan simple como crear un archivo markdown.
- **Optimizado para SEO**: Generación de páginas estáticas para mejor rendimiento y SEO.

## Tecnologías utilizadas

- **Next.js**: Framework de React para renderizado del lado del servidor y generación de sitios estáticos.
- **React**: Biblioteca JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework CSS para diseño rápido y responsivo.
- **MDX**: Permite usar componentes React dentro de markdown.
- **TypeScript**: Superset de JavaScript con tipado estático.
- **Radix UI**: Componentes de interfaz de usuario accesibles y sin estilos.

## Estructura del proyecto

```
blog-minimalista/
├── app/                  # Directorio principal de la aplicación Next.js
├── components/           # Componentes React reutilizables
├── content/              # Archivos markdown del blog
│   └── posts/            # Artículos del blog en formato markdown
├── hooks/                # Hooks personalizados de React
├── lib/                  # Utilidades y funciones auxiliares
├── public/               # Archivos estáticos (imágenes, etc.)
└── styles/               # Estilos globales y configuración de Tailwind
```

## Cómo usar

### Requisitos previos

- Node.js (versión 18 o superior)
- npm, yarn o pnpm

### Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/blog-minimalista.git
   cd blog-minimalista
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # si falla prueba con
   npm install --legacy-peer-deps
   # o
   yarn
   # o
   pnpm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Añadir nuevo contenido

Para crear un nuevo artículo, simplemente añade un archivo markdown en el directorio `content/posts/` con el siguiente formato:

```markdown
---
title: 'Título del artículo'
date: 'YYYY-MM-DD'
excerpt: 'Breve descripción del artículo'
---

# Contenido del artículo

Escribe aquí tu contenido usando markdown...
```

## Implementación en producción

Este blog puede ser fácilmente desplegado en varios servicios de hosting. Aquí te mostramos algunas opciones:

### Vercel (Recomendado)

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub, GitLab o Bitbucket
3. Vercel detectará automáticamente que es un proyecto Next.js y lo configurará correctamente
4. ¡Listo! Tu blog estará en línea en minutos

### Netlify

1. Crea una cuenta en [Netlify](https://netlify.com)
2. Conecta tu repositorio
3. Configura los siguientes ajustes:
   - Build command: `npm run build` o `yarn build`
   - Publish directory: `.next`
4. Haz clic en "Deploy site"

### Servidor propio

1. Construye la aplicación para producción:
   ```bash
   npm run build
   # o
   yarn build
   # o
   pnpm build
   ```

2. Inicia el servidor:
   ```bash
   npm run start
   # o
   yarn start
   # o
   pnpm start
   ```

3. Configura un servidor web (como Nginx o Apache) para servir la aplicación en el puerto configurado.

## Personalización

Este blog está diseñado para ser fácilmente personalizable:

- Modifica los estilos en `styles/` y `tailwind.config.ts`
- Actualiza los componentes en `components/`
- Ajusta la configuración de Next.js en `next.config.mjs`

## Créditos
La versión inicial del proyecto se hizo con V0.


## Licencia

Este proyecto está disponible como código abierto bajo la licencia [MIT](https://opensource.org/licenses/MIT).
