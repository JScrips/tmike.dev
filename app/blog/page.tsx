import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Container } from "@/components/ui";
import { Navigation, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Blog | Terrance Mike",
  description: "Thoughts on web development, technology, and building things for the internet.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <Container>
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
            <p className="text-lg text-muted max-w-2xl">
              Thoughts, learnings, and occasional rants about web development,
              technology, and the craft of building things for the internet.
            </p>
          </header>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group border-b border-border pb-8 last:border-0"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <time className="text-sm text-muted font-mono">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h2 className="text-2xl font-semibold mt-2 mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted mb-3">{post.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">{post.readingTime}</span>
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
                  </Link>
                </article>
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
