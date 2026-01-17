import { Section, SectionHeader } from "@/components/ui";

export function About() {
  return (
    <Section id="about" className="bg-card/50">
      <SectionHeader
        title="About"
        subtitle="The short version (I promise)"
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Story */}
        <div className="space-y-4 text-muted">
          <p className="text-lg text-foreground">
            I&apos;m a software engineer who believes code should be as elegant as
            it is functional.
          </p>
          <p>
            My journey into development started with curiosity and a refusal to
            accept &quot;it just works&quot; as an explanation. That same curiosity now
            drives me to build applications that don&apos;t just work—they work{" "}
            <em>well</em>.
          </p>
          <p>
            When I&apos;m not wrestling with state management or debating the merits
            of yet another JavaScript framework, you&apos;ll find me exploring new
            technologies, contributing to open source, or convincing myself that
            this side project will definitely be the one I finish.
          </p>
        </div>

        {/* Quick facts */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Quick Facts</h3>
          <dl className="space-y-4">
            <div className="flex gap-4">
              <dt className="text-muted font-mono text-sm min-w-[100px]">Focus</dt>
              <dd>Full-stack development with a frontend lean</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-muted font-mono text-sm min-w-[100px]">Philosophy</dt>
              <dd>Ship fast, iterate faster, document eventually</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-muted font-mono text-sm min-w-[100px]">Superpower</dt>
              <dd>Turning caffeine into components</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-muted font-mono text-sm min-w-[100px]">Currently</dt>
              <dd>Building this very portfolio you&apos;re looking at</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
