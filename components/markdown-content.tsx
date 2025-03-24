"use client"

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

