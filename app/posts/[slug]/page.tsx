import { getAllPosts, getPostBySlug } from "@/lib/posts"
import { notFound } from "next/navigation"
import { formatDate, toMachineDate } from "@/lib/utils"
import Link from "next/link"
import type { Metadata } from "next"

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post no encontrado",
    }
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container max-w-3xl py-12 md:py-20">
      <Link 
        href="/" 
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mr-2 h-4 w-4 stroke-current rotate-180">
          <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Volver al inicio
      </Link>
      <article>
        <header className="flex flex-col gap-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">{post.title}</h1>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <time dateTime={toMachineDate(post.date)} suppressHydrationWarning>{formatDate(post.date)}</time>
          </div>
        </header>
        <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </div>
  )
}

