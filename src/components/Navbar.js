'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const pathname = usePathname();

  // Navigation items - CUSTOMIZE THIS
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu when route changes
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActivePath = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''} ${isVisible ? styles.navbarVisible : styles.navbarHidden}`}>
      <div className={styles.navbarContainer}>
        {/* Logo/Brand */}
        <Link href="/" className={styles.navbarLogo}>
          <span className={styles.logoText}>YourName</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.navbarMenu}>
          {navItems.map(item => (
            <li key={item.path} className={styles.navbarItem}>
              <Link
                href={item.path}
                className={`${styles.navbarLink} ${isActivePath(item.path) ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <div className={styles.navbarActions}>
          <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileMenuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.active : ''}`}>
        <ul className={styles.mobileMenuList}>
          {navItems.map(item => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`${styles.mobileMenuLink} ${isActivePath(item.path) ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.mobileMenuFooter}>
          <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnBlock}`}>
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };