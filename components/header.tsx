"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container max-w-4xl flex h-16 items-center justify-between">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <Home className="h-5 w-5" />
            <span className="sr-only">Inicio</span>
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </header>
  )
}

