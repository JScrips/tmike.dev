import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui";
import { getRecentPosts } from "@/lib/blog";

export async function BlogPreview() {
  const posts = await Promise.resolve(getRecentPosts(3));

  if (posts.length === 0) {
    return null;
  }

  return (
    <Section id="blog">
      <SectionHeader
        title="Latest Posts"
        subtitle="Thoughts and learnings from the trenches"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors"
          >
            <time className="text-xs text-muted font-mono">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <h3 className="text-lg font-semibold mt-2 mb-2 group-hover:text-accent transition-colors line-clamp-2">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="text-sm text-muted line-clamp-2 mb-3">
              {post.description}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{post.readingTime}</span>
              <div className="flex gap-1">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 bg-background border border-border rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center text-accent hover:underline"
        >
          View all posts
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </Section>
  );
}
