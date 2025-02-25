import styles from './landing-page.module.css';
import Link from "next/link"

export default function LandingPage() {
  return (
    <section
      id="hero"
      className={styles.prefixnameb2299d}
    >
      {/* Background elements */}
      <div className={`${styles.prefixname9cbb86} -z-1 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]`}></div>
      <div className={styles.prefixname97623e}></div>

      {/* Content */}
      <Link href="/">
        <h1 className={`${styles.prefixname267afa} group`}>
          <pre className={styles.prefixname0c42cc}>
            Build products for everyone
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${styles.prefixname89171c} lucide lucide-chevron-right group-hover:translate-x-1`}
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </pre>
        </h1>
      </Link>
      <h1 className={`${styles.prefixname6e69cd} [--animation-delay:200ms]`}>
        MavenDX is a new way of
        <br className={styles.prefixnamed58f63} /> creating software
      </h1>
      <p className={`${styles.prefixnamec0e229} [--animation-delay:400ms]`}>
        Beautifully designed, privacy-focused, and packed with features.
        <br className={styles.prefixnamed58f63} /> We care about your experience, not your data.
      </p>
      <Link href="/docs" className={styles.prefixname7c8f48}>
        <button className={styles.prefixname46a75c}>
          Get Started
        </button>
      </Link>
    </section>
  )
}

