"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui";

// Easter egg messages for clickable keywords
const easterEggs: Record<string, string[]> = {
  const: ["let? never heard of her", "var? we don't do that here", "immutable gang"],
  TMike: ["legally distinct from Mike T", "the alias I use to dodge bugs", "sounds cooler than Terry", "my rapper name didn't take off"],
  unexpectedly: ["like finding $20 in your pocket", "surprise!", "bet you didn't expect to click this"],
};

// Typewriter rotation words
const typewriterWords = ["web experiences", "digital products", "user interfaces", "cool stuff"];

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
          {/* Greeting with personality */}
          <p className={styles.greeting}>
            <EasterEggWord word="const" eggKey="const" /> greeting ={" "}
            <span className={styles.greetingValue}>&quot;Hello, I&apos;m&quot;</span>
          </p>

          {/* Name - the hero */}
          <h1 className={styles.name}>
            Terrance<EasterEggWord word="&apos;TMike&apos;" eggKey="TMike" /> Brown
          </h1>

          {/* Tagline */}
          <p className={styles.tagline}>
            I engineer <TypewriterWord /> that perform quietly and delight{" "}
            <EasterEggWord word="unexpectedly." eggKey="unexpectedly" />
          </p>

          {/* Tech stack hint */}
          <div className={styles.techStack}>
            {["React", "TypeScript", "Next.js"].map((tech) => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
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
  contentWrapper: "max-w-3xl mx-auto",
  greeting: "text-muted text-lg mb-4 font-mono",
  greetingKeyword: "text-accent",
  greetingValue: "text-foreground",
  name: "text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6",
  tagline: "text-xl sm:text-2xl text-muted mb-8 leading-relaxed",
  taglineHighlight: "text-foreground font-medium",
  taglineItalic: "italic",
  techStack: "flex flex-wrap justify-center gap-3 mb-10",
  techBadge: "px-3 py-1 text-sm font-mono bg-card border border-border rounded-full",
  ctaWrapper: "flex flex-col sm:flex-row gap-4 justify-center",
  ctaPrimary: "inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors",
  ctaSecondary: "inline-flex items-center justify-center px-6 py-3 border border-border font-medium rounded-lg hover:bg-card transition-colors",
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
