import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Container } from "@/components/ui";
import { Navigation, Footer } from "@/components/layout";
import { mdxComponents } from "@/components/blog/mdx-components";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Terrance Mike`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <Container>
          <article className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-muted hover:text-accent transition-colors mb-8"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to blog
            </Link>

            {/* Header */}
            <header className="mb-8">
              <time className="text-sm text-muted font-mono">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h1 className="text-4xl font-bold tracking-tight mt-2 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted">
                <span>{post.readingTime}</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-card border border-border rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="prose-custom">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* Footer */}
            <footer className="mt-12 pt-8 border-t border-border">
              <p className="text-muted text-sm">
                Thanks for reading! Have thoughts?{" "}
                <a href="/#contact" className="text-accent hover:underline">
                  Get in touch
                </a>
                .
              </p>
            </footer>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
