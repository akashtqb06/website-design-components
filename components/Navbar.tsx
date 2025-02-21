"use client"

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
    <nav className="sticky top-0 z-30 py-3 w-full font-sans border-b border-transparent transition duration-200 ease-in-out md:bg-transparent animate-header-slide-down-fade md:backdrop-blur-md">
      <div className="hidden flex-row justify-between items-center px-6 mx-auto w-full md:flex lg:max-w-7xl h-[58px] md:max-w-full">
        <Link href="/" className="pt-10 md:pt-0 w-[100px] lg:w-[180px]">
          <h1 className="font-mono text-3xl font-bold tracking-tighter uppercase">MavenDX</h1>
        </Link>
        <div className="flex items-center md:gap-4 lg:gap-6 text-[rgb(120,125,129)] mx-auto text-sm font-bold">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="transition duration-150 ease-in-out hover:text-slate-50">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[rgb(120,125,129)] hover:text-slate-50 transition ease-in-out duration-150 font-bold md:hidden lg:inline-block">
            Sign in
          </button>
          {/* <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary shadow hover:bg-primary/90 h-9 px-4 py-2 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black">
            <span>Download Arc </span>
            <Download className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </button> */}
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 stroke-zinc-900 dark:stroke-zinc-100 dark:hidden" />
            <Moon className="hidden h-5 w-5 stroke-zinc-900 dark:stroke-zinc-100 dark:block" />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center px-6 mx-auto w-full max-w-5xl md:hidden md:max-w-7xl h-[58px] backdrop-blur-md">
        <Link href="/" className="lg:w-[180px]">
          <h1 className="font-mono text-3xl font-bold tracking-tighter uppercase">ARC</h1>
        </Link>
        <div className="flex gap-4">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="text-[rgb(120,125,129)] hover:text-slate-50 transition ease-in-out duration-150">
                <Menu className="text-3xl" />
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
                      className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenu.Item>
                ))}
                <DropdownMenu.Separator className="h-px bg-zinc-200 dark:bg-zinc-700 my-2" />
                <DropdownMenu.Item className="outline-none">
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md"
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

