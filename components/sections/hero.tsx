"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui";
import { SocialLink } from "./contact";

// Easter egg messages for clickable keywords
const easterEggs: Record<string, string[]> = {
  const: ["let? never heard of her", "var? we don't do that here", "immutable gang"],
  TMike: ["legally distinct from Mike T", "the alias I use to dodge bugs", "sounds cooler than Terry", "my rapper name didn't take off"],
  unexpectedly: ["like finding $20 in your pocket", "surprise!", "bet you didn't expect to click this"],
};

// Skill categories with colors
type SkillCategory = "framework" | "language" | "tool" | "practice" | "soft" | "cherry";

const categoryColors: Record<SkillCategory, string> = {
  framework: "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400",
  language: "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400",
  tool: "bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400",
  practice: "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400",
  soft: "bg-pink-500/10 border-pink-500/30 text-pink-600 dark:text-pink-400",
  cherry: "bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400"
};

interface Skill {
  name: string;
  category: SkillCategory;
  quips: string[];
}

const skills: Skill[] = [
    // Cloud & Backend (From Your Resume)
  { name: "AWS", category: "cherry", quips: ["Practiced Practitioner"] },
  { name: "Node.js", category: "cherry", quips: ["JavaScript everywhere", "async/await evangelist", "V8 engine enthusiast"] },
  { name: "Kubernetes", category: "cherry", quips: ["k8s config master", "pod orchestrator", "99.9% uptime guardian"] },
  { name: "AI Integration", category: "cherry", quips: ["LLM API wrangler", "prompt engineer by day", "saved 40% dev time with AI"] },

  // Frameworks
  { name: "React", category: "framework", quips: ["it's not a framework, actually", "useEverything()", "I dream in JSX"] },
  { name: "Next.js", category: "framework", quips: ["App Router supremacy", "SSR? SSG? yes.", "Vercel's favorite child"] },
  { name: "Tailwind CSS", category: "framework", quips: ["utility-first convert", "no more CSS files", "className goes brrrr"] },

  // Languages
  { name: "TypeScript", category: "language", quips: ["any? never.", "my code has trust issues", "JavaScript with a safety net"] },
  { name: "JavaScript", category: "language", quips: ["the OG", "typeof NaN === 'number' 🙃", "it's everywhere. everywhere."] },
  { name: "HTML", category: "language", quips: ["semantic or bust", "div soup chef (reformed)", "the skeleton crew"] },
  { name: "CSS", category: "language", quips: ["flexbox fixed my life", "centering divs since 2015", "cascade? more like chaos"] },

  // Tools & Testing (EXPANDED - Your Resume Highlights These)
  { name: "Git", category: "tool", quips: ["git push --force (jk... unless?)", "commit early, commit often", "merge conflict survivor"] },
  { name: "Figma", category: "tool", quips: ["designers love me", "auto-layout enthusiast", "where designs become dreams"] },
  { name: "Jest", category: "tool", quips: ["80%+ coverage or bust", "mock everything", "testing > hoping"] },
  { name: "Cypress", category: "tool", quips: ["E2E testing hero", "flaky test debugger", "click, type, assert, repeat"] },
  { name: "Docker", category: "tool", quips: ["it works on my container", "Dockerfile whisperer", "containerize all the things"] },
  { name: "CI/CD", category: "tool", quips: ["deploy on green", "pipeline architect", "automate or die"] },
    { name: "Storybook", category: "tool", quips: ["where components go to be documented", "isolation therapy for UI", "the component zoo"] },

  // Practices (Keep These, They're Great)
  { name: "Accessibility (WCAG)", category: "practice", quips: ["the web is for everyone", "screen reader tested", "a11y is not optional"] },
  { name: "Design Systems", category: "practice", quips: ["consistency is key", "tokens for everything", "one source of truth"] },
  { name: "Component Architecture", category: "practice", quips: ["composition over inheritance", "atomic design fan", "props drilling? never heard of her"] },
  { name: "Responsive Design", category: "practice", quips: ["mobile-first mindset", "breakpoints are my friends", "works on my phone™"] },
  { name: "Performance Optimization", category: "practice", quips: ["Lighthouse 95+ scores", "bundle size matters", "milliseconds count"] },

  // Soft Skills (These Are Good - Keep As-Is)
  { name: "Communication", category: "soft", quips: ["I speak human too", "translating dev to English", "meetings could've been emails"] },
  { name: "Problem Solving", category: "soft", quips: ["console.log debugging champion", "Stack Overflow contributor", "rubber duck whisperer"] },
  { name: "Collaboration", category: "soft", quips: ["plays well with others", "code review enthusiast", "PR approved ✓"] },
];

// Typewriter rotation words
const typewriterWords = ["web experiences", "digital products", "user interfaces", "cool stuff"];


// Update these with your actual social links
const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/jscrips",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jscrips",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:hello@tmike.dev",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// Skill pill component with easter egg
function SkillPill({ skill }: { skill: Skill }) {
  const [clicked, setClicked] = useState(false);
  const [quipIndex, setQuipIndex] = useState(0);

  const handleClick = () => {
    setClicked(true);
    setQuipIndex((prev: number) => (prev + 1) % skill.quips.length);
    setTimeout(() => setClicked(false), 2500);
  };

  return (
    <span className="relative inline-block">
      <button
        onClick={handleClick}
        className={`${styles.skillPill} ${categoryColors[skill.category]}`}
        aria-label={`${skill.name} - click for fun fact`}
      >
        {skill.name}
      </button>
      {clicked && (
        <span className={styles.skillTooltip}>
          {skill.quips[quipIndex]}
        </span>
      )}
    </span>
  );
}

// Easter egg click component
function EasterEggWord({ word, eggKey }: { word: string; eggKey: string }) {
  const [clicked, setClicked] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = easterEggs[eggKey] || ["you found a secret!"];

  const handleClick = () => {
    setClicked(true);
    setMessageIndex((prev: number) => (prev + 1) % messages.length);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <span className="relative inline-block">
      <button
        onClick={handleClick}
        className={styles.easterEgg}
        aria-label={`Click for easter egg: ${word}`}
      >
        {word}
      </button>
      {clicked && (
        <span className={styles.easterEggTooltip}>
          {messages[messageIndex]}
        </span>
      )}
    </span>
  );
}

// Typewriter component
function TypewriterWord() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = typewriterWords[currentIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev: number) => (prev + 1) % typewriterWords.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentIndex, isPaused]);

  return (
    <span className={styles.typewriter}>
      {text}
      <span className={styles.cursor}>|</span>
    </span>
  );
}

const Hero = () => {
  return (
    <section className={styles.section}>
      {/* Subtle grid background */}
      <div className={styles.backgroundWrapper}>
        <div
          className={styles.backgroundPattern}
          style={{ backgroundImage: backgroundPattern }}
        />
      </div>

      <Container className="text-center">
        <div className={styles.contentWrapper}>
                    <div className="flex justify-center gap-6 py-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          {/* Greeting with personality */}
          <p className={styles.greeting}>
            <EasterEggWord word="const" eggKey="const" /> greeting ={" "}
            <span className={styles.greetingValue}>&quot;Hello, I&apos;m&quot;</span>
          </p>

          {/* Name - the hero */}
          <h1 className={styles.name}>
            Terrance <EasterEggWord word="&apos;TMike&apos;" eggKey="TMike" /> Brown
          </h1>

          {/* Tagline */}
          <p className={styles.tagline}>
            I engineer <TypewriterWord /> that perform quietly and delight{" "}
            <EasterEggWord word="unexpectedly." eggKey="unexpectedly" />
          </p>
          <div className="pb-8 border-t border-border"></div>

          {/* Legend */}
          <div className={styles.legend}>
            <span className={`${styles.legendItem} ${categoryColors.framework}`}>Frameworks</span>
            <span className={`${styles.legendItem} ${categoryColors.language}`}>Languages</span>
            <span className={`${styles.legendItem} ${categoryColors.tool}`}>Tools</span>
            <span className={`${styles.legendItem} ${categoryColors.practice}`}>Practices</span>
            <span className={`${styles.legendItem} ${categoryColors.soft}`}>Soft Skills</span>
            <span className={`${styles.legendItem} ${categoryColors.cherry}`}>Cherry on Top</span>
          </div>
          {/* Tech stack with categories */}
          <div className={styles.techStack}>
            {skills.map((skill) => (
              <SkillPill key={skill.name} skill={skill} />
            ))}
          </div>

          {/* CTAs */}
          <div className={styles.ctaWrapper}>
            <a href="#projects" className={styles.ctaPrimary}>
              See my work
              <svg
                className={styles.ctaIcon}
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
            <a href="#contact" className={styles.ctaSecondary}>
              Get in touch
            </a>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <svg
          className={styles.scrollIcon}
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
};

const backgroundPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

const styles = {
  section: "relative min-h-[90vh] flex items-center justify-center overflow-hidden",
  backgroundWrapper: "absolute inset-0 -z-10",
  backgroundPattern: "absolute inset-0 opacity-[0.03]",
  contentWrapper: "max-w-4xl mx-auto",
  greeting: "text-muted text-lg mb-4 font-mono",
  greetingKeyword: "text-accent",
  greetingValue: "text-foreground",
  name: "text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6",
  tagline: "text-xl sm:text-2xl text-muted mb-8 leading-relaxed",
  taglineHighlight: "text-foreground font-medium",
  taglineItalic: "italic",
  techStack: "flex flex-wrap justify-center gap-2 mb-4 max-w-3xl mx-auto",
  skillPill: "px-3 py-1.5 text-sm font-medium border rounded-full cursor-pointer hover:scale-105 transition-transform",
  skillTooltip: "absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-normal tracking-normal leading-normal text-foreground whitespace-nowrap shadow-lg z-10",
  legend: "flex flex-wrap justify-center gap-3 mb-10 text-xs",
  legendItem: "px-2 py-1 rounded-full border opacity-70",
  ctaWrapper: "flex flex-col sm:flex-row gap-4 justify-center pt-4",
  ctaPrimary: "inline-flex items-center justify-center px-3 py-2 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors",
  ctaSecondary: "inline-flex items-center justify-center px-3 py-2 border border-border font-medium rounded-lg hover:bg-card transition-colors",
  ctaIcon: "ml-2 w-4 h-4",
  scrollIndicator: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",
  scrollIcon: "w-6 h-6 text-muted",
  // Interactive styles
  easterEgg: "text-accent cursor-pointer hover:underline decoration-dotted underline-offset-4 transition-all",
  easterEggTooltip: "absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-normal tracking-normal leading-normal text-foreground whitespace-nowrap shadow-lg",
  typewriter: "text-foreground font-medium",
  cursor: "animate-pulse text-accent ml-0.5",
};

export { Hero };
