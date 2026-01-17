import { Container } from "@/components/ui";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted">
            &copy; {currentYear} Terrance Mike. Built with{" "}
            <span className="font-mono text-foreground">Next.js</span> and
            questionable amounts of coffee.
          </p>

          {/* Tech stack easter egg */}
          <p className="text-xs text-muted-foreground font-mono">
            React 19 · TypeScript · Tailwind v4
          </p>
        </div>
      </Container>
    </footer>
  );
}
