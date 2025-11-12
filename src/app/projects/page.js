import Link from 'next/link';
import { getAllProjects } from '@/lib/markdown';

export const metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web development projects, applications, and open-source contributions.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Projects</h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px' }}>
          A collection of my work showcasing web development, design, and problem-solving skills.
        </p>
      </header>

      {projects.length > 0 ? (
        <div style={{ 
          display: 'grid', 
          gap: '2rem', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' 
        }}>
          {projects.map(project => (
            <article 
              key={project.slug}
              style={{ 
                border: '1px solid #e2e8f0', 
                borderRadius: '1rem', 
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Project Image */}
              {project.image && (
                <div style={{ 
                  width: '100%', 
                  height: '200px', 
                  background: '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }}
                  />
                </div>
              )}

              {/* Project Content */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Link 
                  href={`/projects/${project.slug}`} 
                  style={{ textDecoration: 'none', flex: 1, display: 'flex', flexDirection: 'column' }}
                >
                  <h2 style={{ 
                    fontSize: '1.5rem', 
                    marginBottom: '0.75rem', 
                    color: '#1e293b',
                    lineHeight: '1.3'
                  }}>
                    {project.title}
                  </h2>
                  
                  <p style={{ 
                    color: '#64748b', 
                    lineHeight: '1.6',
                    marginBottom: '1rem',
                    flex: 1
                  }}>
                    {project.description || project.excerpt}
                  </p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div style={{ 
                      display: 'flex', 
                      gap: '0.5rem', 
                      flexWrap: 'wrap',
                      marginBottom: '1rem'
                    }}>
                      {project.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag}
                          style={{
                            background: '#f1f5f9',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '0.375rem',
                            fontSize: '0.875rem',
                            color: '#475569',
                            fontWeight: 500
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <span style={{ 
                    color: '#6366f1', 
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    View Project 
                    <span style={{ fontSize: '1.25rem' }}>→</span>
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div style={{ 
          textAlign: 'center', 
          padding: '4rem 2rem',
          background: '#f8fafc',
          borderRadius: '1rem',
          border: '2px dashed #e2e8f0'
        }}>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#64748b',
            marginBottom: '1rem'
          }}>
            No projects yet
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
            Create your first project by adding a markdown file to <code style={{ 
              background: '#e2e8f0', 
              padding: '0.25rem 0.5rem', 
              borderRadius: '0.25rem',
              fontFamily: 'monospace'
            }}>src/content/projects/</code>
          </p>
        </div>
      )}
    </div>
  );
}