import Link from 'next/link';
import { getAllPosts } from '../../lib/markdown';

export const metadata = {
  title: 'Blog',
  description: 'Read my latest articles about web development, design, and technology.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Blog</h1>
      <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '3rem' }}>
        Thoughts, tutorials, and insights about web development
      </p>

      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {posts.map(post => (
          <article key={post.slug} style={{ 
            border: '1px solid #e2e8f0', 
            borderRadius: '0.75rem', 
            padding: '1.5rem',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1e293b' }}>
                {post.title}
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>
                {post.date}
              </p>
              <p style={{ color: '#334155', lineHeight: '1.6' }}>
                {post.excerpt}
              </p>
              <span style={{ color: '#6366f1', fontWeight: 600, marginTop: '1rem', display: 'inline-block' }}>
                Read more →
              </span>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p style={{ textAlign: 'center', color: '#64748b', padding: '3rem' }}>
          No blog posts yet. Check back soon!
        </p>
      )}
    </div>
  );
}