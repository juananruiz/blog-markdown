import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Blog Minimalista",
  description: "Un blog simple escrito en Markdown",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
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