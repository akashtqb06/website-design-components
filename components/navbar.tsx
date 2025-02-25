"use client"
import styles from './navbar.module.css';
import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, Download } from "lucide-react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

const navItems = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Customers", href: "/customers" },
  { name: "Pricing", href: "/pricing" },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Changelog", href: "/changelog" },
  { name: "Docs", href: "/docs" },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className={`${styles.prefixnameae5255} transition`}>
      <div className={styles.prefixnamedcdafb}>
        <Link href="/" className={styles.prefixname00be1e}>
          <h1 className={styles.prefixname9b2aec}>MavenDX</h1>
        </Link>
        <div className={styles.prefixname859ec9}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className={`${styles.prefixname0471a4} transition`}>
              {item.name}
            </Link>
          ))}
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
      <div className={styles.prefixnamebc6e72}>
        <Link href="/" className={styles.prefixname0c4a3c}>
          <h1 className={styles.prefixname9b2aec}>MavenDX</h1>
        </Link>
        <div className={styles.prefixnamede75b5}>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className={`${styles.prefixname05a177} transition`}>
                <Menu className={styles.prefixname5954b6} />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[220px] bg-white dark:bg-zinc-800 rounded-md p-2 shadow-md"
                sideOffset={5}
              >
                {navItems.map((item) => (
                  <DropdownMenu.Item key={item.name} className="outline-none">
                    <Link
                      href={item.href}
                      className={styles.prefixname2f9266}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenu.Item>
                ))}
                <DropdownMenu.Separator className="h-px bg-zinc-200 dark:bg-zinc-700 my-2" />
                <DropdownMenu.Item className="outline-none">
                  <button
                    className={styles.prefixname929aef}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </button>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </nav>
  )
}

