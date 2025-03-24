import type { MDXComponents } from "mdx/types"
import Image, { type ImageProps } from "next/image"
import Link from "next/link"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Permite personalizar componentes integrados
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    a: ({ href, children }) => (
      <Link href={href || "#"} className="text-primary hover:underline">
        {children}
      </Link>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
        alt={props.alt || "Imagen del blog"}
      />
    ),
    ...components,
  }
}

