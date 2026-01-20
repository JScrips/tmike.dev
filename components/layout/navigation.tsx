"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui";

const navLinks = [
  { name: "Storybook", href: "https://storybook.tmike.dev", },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },

];

export function Navigation({children}: any) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/blog") {
      return pathname.startsWith("/blog");
    }
    return false;
  };

  return (
    <div>
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:text-accent transition-colors"
          >
            tm<span className="text-accent">.</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {
                  link.name === 'Storybook' ? (
                    <a href="https://storybook.tmike.dev" target="_blank">
                      <img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg"/>
                    </a>) : (<Link
                {...link}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>)
                }
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="px-4 py-2 text-sm bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
              >
                Get in touch
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </Container>
    </header>
      {children}
              {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay - closes menu when tapped */}
            <div
              className="md:hidden fixed inset-0 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
          <div className="md:hidden py-4 border-t border-border bg-background/90 w-full sticky bottom-0 text-center z-50">
            <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                {
                  link.name === 'Storybook' ? (
                    <a className="flex justify-center" href="https://storybook.tmike.dev" target="_blank">
                      <img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg"/>
                    </a>) : (<Link
                {...link}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>)
                }
              </li>
            ))}
              <li className="pt-2">
                <Link
                  href="/#contact"
                  className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
          </>
        )}
  </div>
  
  );
}
