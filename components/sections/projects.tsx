import { Section, SectionHeader } from "@/components/ui";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  lastActive?: string;
  status: "live" | "in-progress" | "concept";
}

// Placeholder projects - replace with your actual projects
const projects: Project[] = [
  {
    title: "Tmike.dev",
    description:
      "My personal website and portfolio. You're looking at it right now. Deep.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    status: "live",
    link: "https://tmike.dev",
    github: "https://github.com/jscrips/tmike.dev",
    lastActive: "01/18/2026"
  },
  {
    title: "Storybook",
    description:
      "My own Personal Storybook Instance where develop and document components for use in future projects",
    tags: ["Next.js", "Storybook", "React", "TypeScript", "Tailwind"],
    status: "live",
    link: "https://storybook.tmike.dev",
    github: "https://github.com/jscrips/storybook",
    lastActive: "01/18/2026"
  },
];

const statusBadge = {
  live: { label: "Live", className: "bg-green-500/10 text-green-600" },
  "in-progress": { label: "In Progress", className: "bg-amber-500/10 text-amber-600" },
  concept: { label: "Coming Soon", className: "bg-blue-500/10 text-blue-600" },
};

export function Projects() {
  return (
    <Section id="projects" className="bg-card/50">
      <SectionHeader
        title="Projects"
        subtitle="Things I've built (or am building)"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors"
          >
            {/* Status badge */}
            <span
              className={`absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full ${statusBadge[project.status].className}`}
            >
              {statusBadge[project.status].label}
            </span>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-muted mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono bg-background border border-border rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto pt-4 border-t border-border">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  Source
                </a>
              )}
              {!project.link && !project.github && (
                <span className="text-sm text-muted-foreground italic">
                  Links coming soon...
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* More projects CTA */}
      <div className="mt-12 text-center">
        <p className="text-muted mb-4">
          More projects are on the way. Want to collaborate?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center text-accent hover:underline"
        >
          Let&apos;s talk
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </Section>
  );
}
