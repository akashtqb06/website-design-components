import styles from './clients-section-2.module.css';
import Image from "next/image"

const clients = [
  { name: "Google", logo: "https://cdn.magicui.design/companies/Google.svg" },
  { name: "Microsoft", logo: "https://cdn.magicui.design/companies/Microsoft.svg" },
  { name: "GitHub", logo: "https://cdn.magicui.design/companies/GitHub.svg" },
  { name: "Uber", logo: "https://cdn.magicui.design/companies/Uber.svg" },
  { name: "Notion", logo: "https://cdn.magicui.design/companies/Notion.svg" },
]

export default function ClientsSection() {
  return (
    <>
      <section id="clients" className={styles.prefixname381371}>
        <div className={styles.prefixname1123d5}>
          <div className={styles.prefixname4ceaaf}>
            <h2 className={styles.prefixname6e8da6}>
              TRUSTED BY TEAMS FROM AROUND THE WORLD
            </h2>
            <div className={styles.prefixname42b34b}>
              <ul className={styles.prefixname72410b}>
                {clients.map((client) => (
                  <li key={client.name}>
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      width={112}
                      height={32}
                      className={styles.prefixname197ff9}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className={`${styles.prefixname1fdb6d} [--color:var(--color-one)] -z-[2] [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))] after:bg-background`}></div>
    </>
  )
}

