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
      <section id="clients" className="text-center mx-auto max-w-[80rem] px-6 md:px-8">
        <div className="py-14">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <h2 className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
              TRUSTED BY TEAMS FROM AROUND THE WORLD
            </h2>
            <div className="mt-6">
              <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
                {clients.map((client) => (
                  <li key={client.name}>
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      width={112}
                      height={32}
                      className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="[--color:var(--color-one)] pointer-events-none relative -z-[2] mx-auto h-[50rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] my-[-18.8rem] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))] after:bg-background"></div>
    </>
  )
}

