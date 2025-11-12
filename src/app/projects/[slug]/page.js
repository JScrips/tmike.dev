import { getProjectBySlug, getAllProjects } from '../../../lib/markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  // ✅ AWAIT params
  const { slug } = await params;
  
  let project;
  try {
    project = await getProjectBySlug(slug);
  } catch (error) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  }; 
}

export default async function ProjectPage({ params }) {
  // ✅ AWAIT params
  const { slug } = await params;
  
  let project;
  
  try {
    project = await getProjectBySlug(slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="container" style={{ maxWidth: '1000px', padding: '4rem 1rem' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: '1.2' }}>
          {project.title}
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '2rem' }}>
          {project.description}
        </p>
        
        {project.tags && (
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <span 
                key={tag}
                style={{
                  background: '#f1f5f9',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#334155'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div 
        style={{ 
          lineHeight: '1.8', 
          fontSize: '1.125rem',
          color: '#334155'
        }}
        dangerouslySetInnerHTML={{ __html: project.contentHtml }}
      />

      {project.link && (
        <div style={{ marginTop: '3rem' }}>
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#6366f1',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            View Project →
          </a>
        </div>
      )}

      <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
        <a href="/projects" style={{ color: '#6366f1', fontWeight: 600 }}>
          ← Back to Projects
        </a>
      </footer>
    </article>
  );
}