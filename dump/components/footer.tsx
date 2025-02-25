import { Twitter, Github, BookOpen } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Features", href: "#0" },
    { label: "Integrations", href: "#0" },
    { label: "Pricing & Plans", href: "#0" },
    { label: "Changelog", href: "#0" },
    { label: "Our method", href: "#0" },
  ],
  company: [
    { label: "About us", href: "#0" },
    { label: "Diversity & Inclusion", href: "#0" },
    { label: "Blog", href: "#0" },
    { label: "Careers", href: "#0" },
    { label: "Financial statements", href: "#0" },
  ],
  resources: [
    { label: "Community", href: "#0" },
    { label: "Terms of service", href: "#0" },
    { label: "Report a vulnerability", href: "#0" },
  ],
  social: [
    {
      label: "Twitter",
      href: "#0",
      icon: Twitter,
    },
    {
      label: "Medium",
      href: "#0",
      icon: BookOpen,
    },
    {
      label: "Github",
      href: "#0",
      icon: Github,
    },
  ],
}

export function Footer() {
  return (
    <footer className="overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 py-8 sm:grid-cols-12 md:py-12">
          {/* Logo & Copyright */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div></div>
            <div className="text-sm text-black/60 dark:text-gray-400">© Mavenberg Innovations - All rights reserved.</div>
          </div>

          {/* Product links */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a className="text-black/40 dark:text-gray-400 transition hover:text-gray-900" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a className="text-black/40 dark:text-gray-400 transition hover:text-gray-900" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a className="text-black/40 dark:text-gray-400 transition hover:text-gray-900" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    className="flex items-center justify-center text-zinc-500 transition hover:text-zinc-600"
                    aria-label={link.label}
                    href={link.href}
                  >
                    <link.icon className="h-8 w-8" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

