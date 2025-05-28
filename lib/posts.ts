import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

const postsDirectory = path.join(process.cwd(), "content/posts")

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  contentHtml: string
}

export function getAllPosts(): Post[] {
  // Asegúrate de que el directorio existe
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Elimina la extensión para obtener el slug
      const slug = fileName.replace(/\.md$/, "")

      // Lee el archivo como string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // Usa gray-matter para parsear la sección de metadatos
      const { data, content } = matter(fileContents)

      // Convierte el markdown a HTML
      const contentHtml = marked(content)

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        description: data.description || "",
        contentHtml: contentHtml.toString(),
      }
    })

  // Ordena los posts por fecha, más recientes primero
  return allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    // Si no existe el archivo, retorna null
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Convierte el markdown a HTML
    const contentHtml = marked(content)

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      description: data.description || "",
      contentHtml: contentHtml.toString(),
    }
  } catch (error) {
    console.error(`Error al obtener el post ${slug}:`, error)
    return null
  }
}

