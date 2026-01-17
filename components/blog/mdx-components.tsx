import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface AnchorProps extends Props {
  href?: string;
}

export const mdxComponents = {
  h1: ({ children }: Props) => (
    <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: Props) => (
    <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-3">{children}</h2>
  ),
  h3: ({ children }: Props) => (
    <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>
  ),
  p: ({ children }: Props) => (
    <p className="text-foreground/90 leading-relaxed mb-4">{children}</p>
  ),
  a: ({ href, children }: AnchorProps) => (
    <a
      href={href}
      className="text-accent hover:underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }: Props) => (
    <ul className="list-disc list-inside mb-4 space-y-1 text-foreground/90">{children}</ul>
  ),
  ol: ({ children }: Props) => (
    <ol className="list-decimal list-inside mb-4 space-y-1 text-foreground/90">{children}</ol>
  ),
  li: ({ children }: Props) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }: Props) => (
    <blockquote className="border-l-4 border-accent pl-4 italic my-4 text-muted">
      {children}
    </blockquote>
  ),
  code: ({ children }: Props) => (
    <code className="px-1.5 py-0.5 bg-card border border-border rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }: Props) => (
    <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto my-4 text-sm">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-8 border-border" />,
  strong: ({ children }: Props) => <strong className="font-semibold">{children}</strong>,
  em: ({ children }: Props) => <em className="italic">{children}</em>,
};
