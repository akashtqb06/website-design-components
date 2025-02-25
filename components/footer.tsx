import styles from './footer.module.css';
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
    <footer className={styles.prefixnamefc6fe7}>
      <div className={styles.prefixname982b1b}>
        <div className={styles.prefixnamef1ebfe}>
          {/* Logo & Copyright */}
          <div className={styles.prefixnamecec37f}>
            <div></div>
            <div className={styles.prefixname6def19}>© Mavenberg Innovations - All rights reserved.</div>
          </div>

          {/* Product links */}
          <div className={styles.prefixnameb0846a}>
            <h3 className={styles.prefixnameaceb99}>Product</h3>
            <ul className={styles.prefixname5b7309}>
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a className={`${styles.prefixname4f0bee} transition`} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className={styles.prefixnameb0846a}>
            <h3 className={styles.prefixnameaceb99}>Company</h3>
            <ul className={styles.prefixname5b7309}>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a className={`${styles.prefixname4f0bee} transition`} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div className={styles.prefixnameb0846a}>
            <h3 className={styles.prefixnameaceb99}>Resources</h3>
            <ul className={styles.prefixname5b7309}>
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a className={`${styles.prefixname4f0bee} transition`} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className={styles.prefixnameb0846a}>
            <h3 className={styles.prefixnameaceb99}>Social</h3>
            <ul className={styles.prefixname001656}>
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    className={`${styles.prefixnamecf8a72} transition`}
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

