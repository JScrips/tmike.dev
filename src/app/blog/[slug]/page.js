import { getPostBySlug, getAllPosts } from '@/lib/markdown';
import { notFound } from 'next/navigation';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPost({ params }) {
  let post;
  
  try {
    post = await getPostBySlug(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="container" style={{ maxWidth: '800px', padding: '4rem 1rem' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: '1.2' }}>
          {post.title}
        </h1>
        <div style={{ color: '#64748b', fontSize: '0.95rem' }}>
          <time dateTime={post.date}>{post.date}</time>
          {post.author && <span> • {post.author}</span>}
        </div>
      </header>

      <div 
        style={{ 
          lineHeight: '1.8', 
          fontSize: '1.125rem',
          color: '#334155'
        }}
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
        <Link href="/blog" style={{ color: '#6366f1', fontWeight: 600 }}>
          ← Back to Blog
        </Link>
      </footer>
    </article>
  );
}