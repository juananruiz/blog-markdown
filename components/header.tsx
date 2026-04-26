import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { SearchCommand } from "@/components/search-command"
import type { PostIndex } from "@/lib/posts"

export default function Header({ posts }: { posts: PostIndex[] }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
              <span className="sr-only">Inicio</span>
            </Button>
          </Link>
          <div className="hidden md:flex">
             <SearchCommand posts={posts} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="md:hidden">
             <SearchCommand posts={posts} />
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

