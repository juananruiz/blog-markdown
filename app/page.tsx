import { getAllPosts } from "@/lib/posts"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="container max-w-4xl py-10">
      <h1 className="text-3xl font-bold mb-8">Mi Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/posts/${post.slug}`}>
              <div className="border-l-4 border-primary pl-4 transition-all hover:border-l-8">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <div className="text-sm text-muted-foreground mb-3">{formatDate(post.date)}</div>
                <p className="text-muted-foreground">{post.description}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

