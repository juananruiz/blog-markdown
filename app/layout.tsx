import type React from "react"
import "@/app/globals.css"
import { Inter, Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import { getPostsIndex } from "@/lib/posts"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata = {
  title: "Blog Minimalista",
  description: "Un blog simple escrito en Markdown",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const posts = await getPostsIndex()

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        outfit.variable
      )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header posts={posts} />
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6">
              <div className="container max-w-4xl text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Blog Minimalista
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'