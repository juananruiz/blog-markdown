import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import { cache } from "react"

const postsDirectory = path.join(process.cwd(), "content/posts")

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  content: string
}

// Usamos cache() para evitar múltiples lecturas del sistema de archivos
export const getAllPosts = cache(async (): Promise<Post[]> => {
  // Asegúrate de que el directorio existe
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      // Elimina la extensión para obtener el slug
      const slug = fileName.replace(/\.mdx?$/, "")

      // Lee el archivo como string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // Usa gray-matter para parsear la sección de metadatos
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        description: data.description || "",
        content,
      }
    })

  // Ordena los posts por fecha, más recientes primero
  return allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1))
})

// Usamos cache() para evitar múltiples lecturas del sistema de archivos
export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
  try {
    let fullPath = path.join(postsDirectory, `${slug}.mdx`)

    // Si no existe el archivo .mdx, intenta con .md
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(postsDirectory, `${slug}.md`)

      // Si tampoco existe el archivo .md, retorna null
      if (!fs.existsSync(fullPath)) {
        return null
      }
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Procesa el markdown a HTML
    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      description: data.description || "",
      content: contentHtml,
    }
  } catch (error) {
    console.error(`Error al obtener el post ${slug}:`, error)
    return null
  }
})

