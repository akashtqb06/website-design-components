"use client"
import styles from './navbar.module.css';
;

import type React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {theme, setTheme } = useTheme();
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    setTheme(theme === "dark" ? "light" : "dark")
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        "max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full transition-all duration-300",
        isScrolled
          ? "top-4 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md max-w-6xl rounded-full shadow-lg dark:shadow-neutral-800/30"
          : "bg-transparent"
      )}
    >
      <div className={styles.prefixnamee37deb}>
        <div className={`${styles.prefixname55aa77} transition`}>
          <div className={styles.prefixname10e06a}>
            <Logo />
            <div className={styles.prefixname2ee271}>
            <NavLink href="/">Section 1</NavLink>
            <NavLink href="/page2">Section 2</NavLink>
            <NavLink href="/page3">Section 3</NavLink>
            </div>
          </div>
          <div className={styles.prefixname2aa9bd}>
            <ThemeToggle
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
            <AuthButtons />
          </div>
        </div>
        <div className={styles.prefixname46262d}>
          <button className={`${styles.prefixnameff2e0d} transition`}>
            Sign in
          </button>
          {/* <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary shadow hover:bg-primary/90 h-9 px-4 py-2 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black">
            <span>Download Arc </span>
            <Download className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </button> */}
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`${styles.prefixname50ccfa} transition`}
            aria-label="Toggle theme"
          >
            <Sun className={`${styles.prefixnamea2e57e} stroke-zinc-900 dark:stroke-zinc-100`} />
            <Moon className={`${styles.prefixnameb6ea97} stroke-zinc-900 dark:stroke-zinc-100`} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </nav>
  );
};

const Logo = () => (
  <Link
    href="/"
    className={styles.prefixnameac6379}
  >
    <div className={styles.prefixname66df66}></div>
    <span className={styles.prefixname29ea19}>Maven Dx</span>
  </Link>
);

const NavLink = ({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className={styles.prefixname808102}
  >
    {children}
  </Link>
);

const ThemeToggle = ({
  isDarkMode,
  toggleDarkMode
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => (
  <button
    onClick={toggleDarkMode}
    className={styles.prefixnamed0e462}
  >
    {isDarkMode ? (
      <Moon className={styles.prefixname6375ec} />
    ) : (
      <Sun className={styles.prefixname6375ec} />
    )}
    <span className="sr-only">Toggle theme</span>
  </button>
);

const AuthButtons = () => (
  <>
    <Link
      href="/login"
      className={`${styles.prefixnamebd64c0} transition`}
    >
      Login
    </Link>
    <Link
      href="/signup"
      className={`${styles.prefixname6ddeeb} transition`}
    >
      Sign Up
    </Link>
  </>
);

const MobileMenu = ({ toggleMenu }: { toggleMenu: () => void }) =>{
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };
return(
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.2 }}
    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
  >
    <div className={`${styles.prefixnameb2eaeb} divide-y-2 divide-neutral-50 dark:divide-neutral-700`}>
      <div className={styles.prefixname1e3e12}>
        <div className={styles.prefixname22c60d}>
          <Logo />
          <div className={`${styles.prefixnameb806fc} -mr-2`}>
          <ThemeToggle
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
            <button
              onClick={toggleMenu}
              className={styles.prefixname7f5820}
            >
            
              <X className={styles.prefixname601216} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className={styles.prefixname42b34b}>
          <nav className={styles.prefixname14b265}>
            <NavLink href="/">Section 1</NavLink>
            <NavLink href="/page2">Section 2</NavLink>
            <NavLink href="/page3">Section 3</NavLink>
          </nav>
        </div>
      </div>
      <div className={styles.prefixname45067a}>
        <div className={styles.prefixnamee798b7}> 
        <AuthButtons />

        </div>
      </div>
    </div>
  </motion.div>
)};

export default Navbar;
