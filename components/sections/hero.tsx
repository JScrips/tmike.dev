import { Container } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="text-center">
        <div className="max-w-3xl mx-auto">
          {/* Greeting with personality */}
          <p className="text-muted text-lg mb-4 font-mono">
            <span className="text-accent">const</span> greeting ={" "}
            <span className="text-foreground">&quot;Hello, I&apos;m&quot;</span>;
          </p>

          {/* Name - the hero */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Terrance Mike
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-muted mb-8 leading-relaxed">
            I craft <span className="text-foreground font-medium">digital experiences</span> that
            are thoughtful, performant, and occasionally make people say{" "}
            <span className="italic">&quot;oh, that&apos;s neat.&quot;</span>
          </p>

          {/* Tech stack hint */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["React", "TypeScript", "Next.js"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-mono bg-card border border-border rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              See my work
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-border font-medium rounded-lg hover:bg-card transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
