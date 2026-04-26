import { getAllPosts } from "@/lib/posts"
import Link from "next/link"
import { formatDate, toMachineDate } from "@/lib/utils"

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="container max-w-4xl py-12 md:py-20">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">Blog Minimalista</h1>
        <p className="text-lg text-muted-foreground">Explorando Claude Code, Next.js y el futuro del desarrollo.</p>
      </div>
      <div className="grid gap-12">
        {posts.map((post) => (
          <article key={post.slug} className="group relative flex flex-col items-start">
            <h2 className="text-2xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
              <Link href={`/posts/${post.slug}`}>
                <span className="absolute -inset-y-2.5 -inset-x-4 z-0 scale-95 bg-muted opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10">{post.title}</span>
              </Link>
            </h2>
            <div className="relative z-10 text-sm text-muted-foreground mb-3 flex items-center">
              <time dateTime={toMachineDate(post.date)} suppressHydrationWarning>{formatDate(post.date)}</time>
            </div>
            <p className="relative z-10 text-muted-foreground leading-relaxed">
              {post.description}
            </p>
            <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary">
              Leer más
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

